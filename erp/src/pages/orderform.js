import React from 'react';
import { useForm } from 'react-hook-form';
import "/workspace/erpformelements/erp/src/pages/orderform.css"
export default function OrderForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='heading'>Create order </div>
        <label className='label'> Ham
      <input  className='' type="text" placeholder="Ham" {...register("Ham", {})} />
      </label>
      <label className='label'> Die.No
      <input type="text" placeholder="Die.No" {...register("Die.No", {})} />
      </label>
      <label className='label'> JC number
      <input type="text" placeholder="JC no" {...register("JC no", {})} />
      </label>
      <label className='label'> Del
      <input type="text" placeholder="Del" {...register("Del", {})} /></label>
      <label className='label'> Sch
      <input type="text" placeholder="Sch" {...register("Sch", {})} /></label>
      <label className='label'> Cstk
      <input type="text" placeholder="Cstk" {...register("Cstk", {})} /></label>
      <label className='label'> pend
      <input type="text" placeholder="pend" {...register("pend", {})} /></label>
      <label className='label'>Wt.
      <input type="text" placeholder="Wt." {...register("Wt.", {})} /></label>
      <label className='label'>Ton
      <input type="text" placeholder="Ton" {...register("Ton", {})} /></label>
      <label className='label'> Part number
      <input type="text" placeholder="Part number" {...register("Part number", {})} /></label>
      <label className='label'> cust
      <input type="text" placeholder="cust" {...register("cust", {})} /></label>
      <label className='label'> grade1
      <input type="text" placeholder="grade1" {...register("grade1", {})} /></label>
      <label className='label'> description
      <input type="text" placeholder="description" {...register("description", {})} /></label>
      <label className='label'>rate
      <input type="text" placeholder="rate" {...register("rate", {})} /></label>
      <label className='label'> section
      <input type="text" placeholder="section" {...register("section", {})} /></label>
      <label className='label'> coil size
      <input type="text" placeholder="coil size" {...register("coil size", {})} /></label>
      <label className='label'> submit
      <input type="submit" /></label>
    </form>
  );
}