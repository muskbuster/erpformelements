import "/workspace/erpformelements/erp/src/components/navbar.css";
import { Outlet, Link } from "react-router-dom";
import omni from "/workspace/erpformelements/erp/src/components/omni.png";
export default function Navbar(){
return(
    <>
    <header className='navbar'>
        <div className='navbar__title navbar__item'><img className="adjust" src={omni}/></div>
        <Link to='/orders' className='navbar__item'>Orders</Link>
        <Link to="/product" className='navbar__item'>Products</Link>     
    </header>
    <Outlet/>
    </>
);
}