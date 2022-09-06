import "/workspace/erpformelements/erp/src/components/navbar.css";
export default function Navbar(){
return(
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Omniforge</div>
        <div className='navbar__item'>Orders</div>
        <div className='navbar__item'>Products</div>     
    </header>
);
}