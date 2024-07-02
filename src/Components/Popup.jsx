import React, { useContext } from 'react'
import { IoIosBookmark } from 'react-icons/io'
import nike from '../assets/NIKE.png'
import img1 from '../assets/img1.png'
import cajanike from '../assets/cajanike.png'
import { CiShoppingCart } from 'react-icons/ci'
import { AiOutlineAccountBook, AiOutlineShopping } from 'react-icons/ai'
import { userContext } from '../Context/UserProvider'



const Popup = ({setEstado,setImg}) => {

    const {sumar} = useContext(userContext)

    const azul = ()=>{
        const zapato = document.querySelector('.zapato')
        zapato.style.filter='hue-rotate(200deg)'
    }
    const rojo = ()=>{
        const zapato = document.querySelector('.zapato')
        zapato.style.filter='hue-rotate(300deg)'
    }

  return (
    <div className='content_popup'>
        <div className='popup'>
        <div className='popup_size'>
            <h2>Size</h2>
            <div className='size'>
                UK_5
            </div>
            <div className='size'>
                UK_6
            </div>
            <div className='size'>
                UK_7
            </div>
            <div className='size'>
                UK_8
            </div>
            <div className='size'>
                UK_9
            </div>

            <div className='precio'>
            <h2>$90.99</h2>
            <p>10% OFF</p>
        </div>
        </div>
        <div className='popup_img'>
            <img className='nike' src={nike} alt="" />
            <img className='zapato' src={setImg} alt="" />
        </div>
        <div className='popup_right'>
            <div className='guardar'>
                <div><IoIosBookmark/></div>
                <div onClick={()=>{sumar()}}><CiShoppingCart/></div>
            </div>
           

            <div className='popup_colors'>
                <div onClick={azul} className='azul'><div className=''></div></div>
                <div onClick={rojo}  className='rojo'><div className=''></div></div>
            </div>

        </div>

        <div className='caja_nike'> 
            <p>Swipe down to add</p>
            <div>
            <AiOutlineShopping/>
            <p>V</p>
            </div>
            <img src={cajanike} alt="" />

            <div onClick={()=>{setEstado(false)}} className='cerar'>
                Volver
            </div>
        </div>

        
    </div>
    </div>
  )
}

export default Popup