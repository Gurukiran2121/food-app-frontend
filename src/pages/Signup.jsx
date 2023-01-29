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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navi = useNavigate();
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const notify = () =>
    toast.error("all fields are required*", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleform = async () => {
    if (name != "" && email != "" && password != "") {

      if (name.length > 3) {
        document.getElementById("namemsg").innerHTML = "";
        if (password.length >= 7) {
          if (password === confirmPassword) {
            let payload = { name, email, password };
            document.getElementById("msg").innerHTML = "";
            try {
              axios
                .post("https://food-app-1sbw.onrender.com/rigister", payload)
                .then((Response) => {
                  localStorage.setItem("user", JSON.stringify(email));
                  setTimeout(() => {
                    navi("/");
                  }, 1500);
                  console.log(Response.data.message);
                  const notify2 = () =>
                    toast.success("signin succesful redirecting to home page", {
                      position: "top-center",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  notify2();
                 
                })
                .catch((error) => {
                  const notify1 = () =>
                    toast.error(error.response.data.error, {
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  notify1();
                });
            } catch (error) {
              console.log(error.response.data);
            }
          } else {
            document.getElementById("msg").innerHTML = "password not matched*";
          }
        } else {
          document.getElementById("msg").innerHTML =
            "password should contain more than 8 characters*";
        }
      } else {
        document.getElementById("namemsg").innerHTML =
          "name should be greator than 3 characters*";
      }
    } else {
      notify();
    }
  };
  React.useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="flex items-center mb-5">
        <div className="w-[80%] mx-auto mt-20 flex flex-wrap justify-evenly items-center gap-10">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-6xl font-extrabold text-blue-500 italic">
              Desi food
            </h1>
            <p className="text-justify text-3xl">
              explore the varity of food and beverages...
            </p>
            <p className="text-justify text-xl">
              sign up and get 60% off on your first order.
            </p>
          </div>
          <Card className="w-96 shadow-2xl border border-gray-50 bg-gray-50">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign up
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="User Name"
                size="lg"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <span id="namemsg" className="text-sm text-red-500 -mt-4"></span>
              <Input
                label="Email"
                size="lg"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                size="lg"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                label="confirm Password"
                size="lg"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span id="msg" className="text-sm text-red-500 -mt-4"></span>
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth onClick={handleform}>
                Sign up
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                already have an account?
                <NavLink to="/login">
                  <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold hover:underline"
                  >
                    log in
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

export default Signup;
