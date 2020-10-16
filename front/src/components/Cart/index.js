import React from "react";

const Cart = () => {
const [cart,setCart]=React.useState([]);


React.useEffect(()=>{
let cartData=localStorage.getItem('cart');
cartData=JSON.parse(cartData);
setCart(cartData);

},[])


  console.log(cart)

  return (
    <div className="flex flex-none items-center justify-center px-5">
      <button>
        <img className="w-8 h-8" src="/images/bag.png" />
      </button>
      {cart&&<div className="text-green-500 px-1 font-medium">{cart.length}</div>}
    </div>
  );
};

export default Cart;
