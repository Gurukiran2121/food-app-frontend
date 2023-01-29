import { useState, useEffect } from "react";
import image from "../assets/main_logo.svg";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ReactModal from "react-modal";
import Cart from "../pages/Cart";
import { useCart } from "./ContaxtReducer";


const Navigation = () => {
  ReactModal.setAppElement("#root")
  const [openNav, setOpenNav] = useState(false);
  const [isOpen, setOpen] = useState(false)
  
  const navi = useNavigate()
  const cartvalue = useCart()
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
const data = localStorage.getItem("user")
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/">Home</NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to='/Products'>
         Food Menu
        </NavLink>
        
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <NavLink to='/contact'>
          Contact us
        </NavLink>
        
        
       
      </Typography>
     
    </ul>
  );

  return (
    <>
    <Navbar className="mx-auto bg-white py-2 px-4 sticky top-6 z-30 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <img src={image} alt="" className="w-12" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center">
         
          {data ? 
            <>
              
               <Button
               variant="gradient"
                size="sm"
                  className="hidden bg-none  lg:inline-block mr-5 relative"
                  onClick={()=>setOpen(true)}
              >
                <FaShoppingCart className="text-2xl text-blue-500" />
                  <span className="absolute top-0 right-0 flex items-center justify-center bg-red-400 h-5 w-5  rounded-full">{ cartvalue.length}</span>
              </Button>
             
              
              <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block mr-1"
            onClick={() => {
              localStorage.clear()
                navi("/signup")
            }}
            >
              Log out
              </Button>
            </>
            :
            <>
           
            <NavLink to="/login">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block mr-1">
                Log in
              </Button>
            </NavLink>
            
            <NavLink to="/signup">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block ml-1"
              >
                Sign up
              </Button>
            </NavLink>
            </>
          }
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        {data ?
          <>
            <div className="flex items-center">
              
        
            <Button
            variant="gradient"
            size="sm"
            className="relative bg-none mr-5"
            onClick={()=>setOpen(true)}
          >
             <FaShoppingCart className="text-2xl text-blue-500" />
             <span className="absolute top-0 right-0 flex items-center justify-center bg-red-400 h-5 w-5  rounded-full"> {cartvalue.length}</span>
              </Button>
            
            <Button
            variant="gradient"
            size="sm"
            className=""
          onClick={() => {
            localStorage.clear()
              navi("/signup")
          }}
          >
            Log out
            </Button>
            </div>
            </>
    :      
      <>
        <NavLink to="/login">
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          Login
          </Button></NavLink>
          <NavLink to="/signup">
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          Signup
              </Button></NavLink>
              </>
        }
      </MobileNav>
      </Navbar>
      <div>
        <ReactModal isOpen={isOpen} style={{
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
            height: '90%',
            width: "80%",
            
          },
        }}>
          <Cart />
          <div className="flex justify-end mt-5">
          <button className="bg-blue-500  p-2 rounded-lg text-white w-40 font-bold"
          onClick={()=>setOpen(false)}
          >Back</button>
          </div>
        
        </ReactModal>
      </div>
    </>
  );
};

export default Navigation;
