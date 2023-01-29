import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'


export const cartContaxt = createContext()
export const dispatchContaxt = createContext()
export const locationinfo = createContext()
export const redirectt = createContext(false)
export const dispatchRedirect = createContext()

const reducer = (state , action) => {
    switch (action.type) {
        case "ADD":
            return [...state , {name : action.name , price : action.price,image : action.image , discription : action.description , size : action.size , quantity :action.quantity}]
        case "REMOVE":
            let newarr = [...state]
            newarr.splice(action.index, 1)
            return newarr
        case "CLEAR":
            return []
        default:
            break;
    }
}

const reducer1 = (redirect , action)=> {
    switch (action.type) {
        case "BACK":
            return false
        case "GO":
            return true
        default:
            break;
    }
}

const ContaxtReducer = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    const [loc, setloc] = useState([])
    const [redirect , setRedirect] = React.useReducer(reducer1 , false)
    const locationdetails = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setloc(position.coords)
            
        })
    }
    useEffect(() => {
        locationdetails()
        
            }, [])
   
  return (
        <>       <dispatchContaxt.Provider value={dispatch}>
                <cartContaxt.Provider value={state}>
              <locationinfo.Provider value={loc}>
                  <dispatchRedirect.Provider value={setRedirect}>
                  <redirectt.Provider value = {redirect}>
                  {children}
                  </redirectt.Provider>
                  </dispatchRedirect.Provider>
                 
                  </locationinfo.Provider>
                    </cartContaxt.Provider>
                </dispatchContaxt.Provider>
        </>
  )
}


const useCart = () => {
    return useContext(cartContaxt)
}
const useDispatch = () => {
    return useContext(dispatchContaxt)
}
const useRediret = () => {
    return useContext(redirectt)
}
const useSetDispatch = () => {
    return useContext(dispatchRedirect)
}
export { ContaxtReducer, useCart , useDispatch , useRediret , useSetDispatch}