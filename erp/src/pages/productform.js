import "/workspace/erpformelements/erp/src/pages/orderform.css"
import { useForm } from 'react-hook-form';
export default function ProductForm(){

const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

    return(
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='heading'>Create Product </div>
        <label className='label'> Ham
      <input  className='' type="text" placeholder="Ham" {...register("Ham", {})} />
      </label>
      <label className='label'> Product name
      <input type="text" placeholder="Die.No" {...register("Die.No", {})} />
      </label>
      <label className='label'> Start date
      <input type="text" placeholder="JC no" {...register("JC no", {})} />
      </label>
      <label className='label'> End date
      <input type="text" placeholder="Del" {...register("Del", {})} /></label>
      <label className='label'> Machine type
      <input type="text" placeholder="Sch" {...register("Sch", {})} /></label>
      <label className='label'> Machine number
      <input type="text" placeholder="Cstk" {...register("Cstk", {})} /></label>
      <label className='label'> submit
      <input type="submit" /></label>
    </form>
    )
}