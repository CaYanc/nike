import React, { createContext, useState } from 'react'

export const userContext = createContext()

const UserProvider = ({children}) => {

    const [carrito, setCarrito] = useState(0)
    

    const sumar = ()=>{
        setCarrito(prev => prev + 1)
    } 


  return (
    <userContext.Provider value={{carrito, sumar}}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider