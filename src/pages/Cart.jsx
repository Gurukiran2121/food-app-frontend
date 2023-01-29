import React from "react";
import ReactModal from "react-modal";
import { useCart, useDispatch, useRediret, useSetDispatch } from "../components/ContaxtReducer";
import Payment from "../components/Payment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const dispatch = useDispatch()
    const cartdata = useCart();
    const notify = () => toast.success("Review Submitted Thank You" , {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    if (cartdata.length === 0) {
      
        return (
            <div>
                <h1 className="text-4xl font-bold text-center">cart is empty...</h1>
               
                <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="text-2xl mb-5 text-green-500 font-bold">Order Delivered...</h1>
                    <p>write us review...</p>
                    <div className="">
                    <textarea cols="30" rows="10" className="border mx-auto rounded-lg border-blue-300"></textarea>
                    </div>
                   
                    <button className="bg-blue-500 p-2 text-white font-bold w-28 rounded-lg mt-5"
                        onClick={() => {
                            notify()
                    }}
                    >submit</button>
                </div>
                <ToastContainer/>
         </div>
     )
    }
    const totalprice = cartdata.reduce((total, food) => total + food.price, 0)
    const redirect = useRediret()
    const dispatchh = useSetDispatch()
  
  return (
      <>
          <div className="container mx-auto">
              <h1 className="text-center text-4xl font-bold">Cart data</h1>
              
              <div className="flex flex-wrap justify-center gap-5">
                  <div className="w-[650px] h-[520px] overflow-y-scroll scrollbar-hide md:p-2">
                      
                
                  {
                      cartdata.map((e, i) => {
                          return (
                              <div key={i} className = "flex flex-col md:flex-row mt-7 shadow-md drop-shadow-md border border-gray-200 rounded-xl md:p-3">
                                  <div className=" md:w-[20%] h-28">
                                  <img src={e.image} alt="image" className="w-60 mx-auto md:w-[100%] h-28 rounded-xl" />
                                  </div>
                                  <div className="mx-auto text-center md:text-start md:w-[60%] md:p-2">
                                      <h1 className="text-lg font-bold">{ e.name}</h1>
                                      <p className="text-xs ">{ e.discription}</p>
                                  </div>
                                  <div className="mx-auto text-center md:text-start md:w-[20%] flex flex-col justify-evenly items-center">
                                      <h1> &#8377; {e.price} /-</h1>
                                      <button className="flex items-center text-red-500 hover:underline"
                                          onClick={() => {
                                            
                                            dispatch({type : "REMOVE" , index :i})
                                      }}
                                      >Remove</button>
                                  </div>
                              </div>
                          )
                      })
                  }  </div>
                  <div className="w-[350px] border flex flex-col justify-center mt-10 pr-5 pl-5 h-60 shadow-md drop-shadow-md border-gray-200 rounded-xl">
                      <div className="flex justify-between p-2 " >
                          <span className="font-bold text-lg text-blue-600 " >sub total</span>
                          <span className="font-bold" >&#8377; {totalprice} /- </span>
                      </div>
                      <div className="flex justify-between p-2" >
                          <span className="font-bold text-lg text-blue-600 " >shipping charge</span>
                          <span className="font-bold" >&#8377; 30.50 /-</span>
                      </div>
                      <hr />
                      <div className="flex justify-between p-2" >
                          <span className="font-bold text-lg text-blue-600 ">total</span>
                          <span className="font-bold" >&#8377; { totalprice +30.50} /-</span>
                      </div>
                      <div className="flex justify-end p-2">
                          <button className="bg-blue-500 p-2 text-white font-bold rounded-lg w-32"
                          onClick={()=>{dispatchh({type : 'GO'})}}
                          >
                              check out</button>
                      </div>
                  </div>
              </div>
           </div>

          <ReactModal isOpen = {redirect} style={{
          overlay: {
            zIndex: "50",
            backgroundColor: "#f8fafc",
         
           
            
            
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: '100%',
            width: "100%",
            
          },
        }}>
              <Payment />
              <div>
                  <button onClick={()=>{dispatchh({type : 'BACK'})}} className = "text-lg ml-10 text-blue-500 font-bold">  -GO BACK</button>
              </div>
    </ReactModal>

    </>
  );
};

export default Cart;
