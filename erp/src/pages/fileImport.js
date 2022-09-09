import React from "react";
import { useState } from "react";
import * as XLSX from "xlsx";
import db from "/workspace/erpformelements/erp/src/pages/db.js";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";

function FileImport() {
  const [file, setFile] = useState();

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = async (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
        setFile(data);
        const size = data.length;

        // const docRef = doc(db, "PRODUCTS", "SF");
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //   console.log("Document data:", docSnap.data());
        // } else {
        //   // doc.data() will be undefined in this case
        //   console.log("No such document!");
        // }

        // const m = query(collectionGroup(db, "PRODUCTS"))
        // const querySnapshot = await getDocs(m)
        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id , "**********************")
        // })

        for (let i = 0; i < size; i++) {
          const iter = data[i];
          const id = uuidv4();
          const primary = iter["JC NO"];
          const ham = iter["Ham"] || "";
          const die = iter["Die No."] || "";
          const del = iter["Del"] || "";
          const sch = iter["Sch."] || "";
          const cstk = iter["CStk"] || "";
          const pend = iter["pend"] || "";
          const wt = iter["Wt."] || "";
          const ton = iter["Ton"] || "";
          const partNo = iter["PART NO"] || "";
          const cust = iter["Cust."] || "";
          const grade = iter["Grade 1"];
          const description = iter["Discription"] || "";
          const rate = iter["Rate"] || "";
          const section = iter["Section"] || "";
          const coilSize = iter["Coil Size"] || "";
            const key = i;
          const test = {
            primary: primary,
            ham,
            die,
            del,
            sch,
            cstk,
            pend,
            wt,
            ton,
            partNo,
            cust,
            grade,
            description,
            rate,
            section,
            coilSize,
          };
        //   console.log(test);
          await setDoc(doc(db, "PRODUCTS", id), test);
        }

        //getting all docs from firebase
        const querySnapshot = await getDocs(collection(db, "PRODUCTS"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const docId = doc.id
          const docData = doc.data()
        //   console.log(doc.id, " => ", doc.data());
          const dict = {
             data : docData,
             id : docId
          }
          console.log(dict)
        });
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      {/* <table class="table container">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {file.map((d) => (
            <tr key={d.Ham}>
              <th>{d.JCNO}</th>
              <td>{d.discription}</td>
              <td>{d.CStk}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <button>Submit</button>
    </div>
  );
}

export default FileImport;
