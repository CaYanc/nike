import React from 'react'
import img1 from '../assets/img1.png'
import { FaArrowRight } from "react-icons/fa";

const Products = ({nombre,img, precio,setEstado,setImg,setNombre,setPrecio}) => {

  return (
    <div className='products'>
        <figure>
            <img src={img} alt="" />
        </figure>
        <h2>{nombre}</h2>
        <p>$ {precio}</p>
        <button onClick={()=>{
          setEstado(true),
          setImg(img),
          setNombre(nombre),
          setPrecio(precio)
          }}><FaArrowRight /></button>
    </div>
  )
}

export default Products