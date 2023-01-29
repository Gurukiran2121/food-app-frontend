import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {  useDispatch } from "./ContaxtReducer";
import { useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ProdCard = (props) => {
  const notify = () => toast.success("item added succesfully", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  let sizeoption = props.data;
  let optionsize = Object.keys(sizeoption);

  const [size, setSize] = React.useState('')
  const [quantity , setQuantity] = React.useState(1)

  const dispatch = useDispatch()
  const addtocart = async () => {
    notify()
    await dispatch({ type: "ADD", name: props.name, image: props.image, description: props.description, size: size, quantity: quantity , price : finalprice })
 
  }
  const priceref = useRef()
  useEffect(() => {
    setSize( priceref.current.value)
  } , [])
  const finalprice = quantity * parseInt(sizeoption[size])

  return (
    <>
      <Card className="w-96 mt-20 mx-5">
        <CardHeader color="blue" className="relative h-56 ">
          <img
            src={props.image}
            alt="img-blur-shadow"
            className="h-full w-full hover:brightness-75 "
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {props.name}
          </Typography>
          <Typography>{props.description}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">
            <div>
              <select className="rounded-md border p-2 outline-none mr-2"
              onChange={(e)=>setQuantity(e.target.value)}
              >
                <option>Qty</option>
                {Array.from(Array(5), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="rounded-md border p-2 outline-none " ref={priceref}
                 onChange={(e)=>setSize(e.target.value)}
              >
                {optionsize.map((e) => {
                  return (
                    <>
                      <option value={e} key={e}>
                        {e}
                      </option>
                    </>
                  );
                })}
              </select>
            </div>
          </Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
          
          <span>&#8377;</span> {finalprice} /-
          </Typography>
        </CardFooter>
        <button className="border border-blue-500 p-1 rounded-lg w-fit ml-5 mb-3 text-blue-500 hover:shadow-xl hover:scale-105 hover:bg-blue-500 hover:text-white"
        onClick={addtocart}
        >
          Add to cart
        </button>
      </Card>
      <ToastContainer />
    </>
  );
};

export default ProdCard;
