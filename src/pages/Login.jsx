import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPasswprd] = React.useState('')
  const navi = useNavigate()
  React.useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const handlesubmit = () => {
    let payload = { email, password }
    if (email != '' && password != '') {
      
     
      axios.post('https://food-app-1sbw.onrender.com/login', payload)
        .then((Response) => {
         
          localStorage.setItem('user', JSON.stringify(email))
          const notify = () => toast.success(Response.data.message, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          notify()
         
          setTimeout(() => {
            navi("/")
          }, 1500)
   
        })
        .catch((Response) => {
          const notify1 = () => toast.error(Response.response.data.error, {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          notify1()
        })
    } else {
      const notify2 = () =>
      toast.error("both fields are required*", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      notify2()
    }
  }


  return (
    <>
      <div className="flex items-center mb-20">
        <div className="w-[80%] mx-auto mt-20 flex flex-wrap justify-evenly items-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-6xl font-extrabold text-blue-500 italic">Desi food</h1>
            <p className="text-justify text-3xl">
              explore the varity of food and beverages...
            </p>
            <p className="text-justify text-xl">hey welcome back!!!.</p>
          </div>
          <Card className="w-96 shadow-2xl bg-gray-50">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                log in
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" size="lg" type="email"  onChange={(e)=>setEmail(e.target.value)} />
              <Input label="Password" size="lg" type="password"  onChange={(e)=>setPasswprd(e.target.value)} />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth
              onClick={handlesubmit}
              >
                log in
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                don't have an account?
                <NavLink to="/signup">
                  <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold hover:underline"
                  >
                    Create account
                  </Typography>
                </NavLink>
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>

     
      <ToastContainer />
    </>
  );
};

export default Login;
