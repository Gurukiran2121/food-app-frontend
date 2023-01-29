import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import spin from "../assets/spin.gif"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSetDispatch } from "./ContaxtReducer";
 
const  Dilog =()=> {
  const [size, setSize] = useState(null);
  
  const handleOpen = (value) => setSize(value);
  const navi = useNavigate()
  const dispatch = useSetDispatch()
  const dispatchh = useDispatch()

 
  return (
    <Fragment>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => {
          handleOpen("md")
          const redirect = setTimeout(() => {
            navi("/")
            handleOpen(null)
            dispatch({ type: "BACK" })
            dispatchh({type : "CLEAR"})
          }, 3000)
        }} variant="gradient" className="w-48 text-base ">
          Pay Now
        </Button>
      </div>
      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader className="text-sm md:text-4xl">Order Succesful...</DialogHeader>
        <DialogBody divider>
          <h1 className="text-center text-sm md:text-2xl font-bold flex items-center justify-center gap-3 animate-pulse">
            <img src={spin} alt="spin" className="w-40" />
            Redirecting to Cart</h1>
        </DialogBody>
        <DialogFooter>
         
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default Dilog