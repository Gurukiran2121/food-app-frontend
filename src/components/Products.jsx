import { BsSearch } from "react-icons/bs";
import React from "react";
import axios from "axios";
import loading from  "../assets/loading.gif"
import ProdCard from "./ProdCard";

const Products = () => {
  const [prodlist, setProdlist] = React.useState([]);
  const [catagories, setCatogories] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const reducer = (state , action) => {
    switch (action.type) {
      case 'LOADING':
        return true
      case 'DATA': 
        return false
      
      default:
        break;
    }
  }
  const [state, dispatch] = React.useReducer(reducer, false)
  
  const getprod = () => {
    dispatch({ type: "LOADING" })
    setTimeout(() => {
      axios
      .get("https://food-app-1sbw.onrender.com/products")
      .then((Response) => {
        dispatch({type : "DATA"})
        setProdlist(Response.data[0]);
        setCatogories(Response.data[1]);
      })
        .catch((err) => {
        alert("check your connection and refresh the page.")
        
      });
    },500)
   
  };
  React.useEffect(() => {
    getprod();
  }, []);


  if (state) {
    return <div className="bg-white">
      <div  className="flex justify-center">
        <img src={loading} alt="" className="object-fill w-[50%] h-96" />
        
      </div>
      <h1 className="text-5xl font-semibold text-center ">Loading Food....</h1>
    </div>
  }
  return (
    <>
      <div className="p-2 md:w-[50%] mx-auto mt-10 ">
        <div className="flex bg-white rounded-md items-center p-3 shadow-lg gap-2 border">
          <BsSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search for food"
            className="outline-none w-full"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {/* <Button
            variant="gradient"
            className="flex justify-center font-bold w-fit "
          >
            Search
          </Button> */}
        </div>
      </div>

      <div className="mt-10 container mx-auto p-2">
        {catagories !== [] ? (
          catagories.map((catogo, i) => {
            return (
              <>
                <div key={i} className="text-3xl my-3 font-bold">
                  {catogo.CategoryName} :--
                </div>
                <div className="flex flex-wrap justify-center p-2">
                  <hr />
                  {prodlist !== [] ? (
                    prodlist
                      .filter((item) => {
                        return (
                          item.CategoryName == catogo.CategoryName &&
                          item.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                        );
                      })
                      .map((i) => {
                        return (
                          <>
                            <div key={i}>
                              <ProdCard
                                image={i.img}
                                name={i.name}
                                description={i.description}
                                data={i.options[0]}
                              />
                            </div>
                          </>
                        );
                      })
                  ) : (
                    <div>****no products found****</div>
                  )}
                </div>
              </>
            );
          })
        ) : (
          <div>********loading data********</div>
        )}
      </div>
    </>
  );
};

export default Products;
