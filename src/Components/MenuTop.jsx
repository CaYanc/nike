
import { useContext } from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { CiTextAlignLeft } from 'react-icons/ci'
import { userContext } from '../Context/UserProvider'


const MenuTop = ({nombre}) => {

  const {carrito} = useContext(userContext)


  return (
    <div className='content_menu_top '>
        <div className='icon_menu_top'>
            <CiTextAlignLeft />
        </div>
        <div>{nombre}</div>
        <div className='icon_menu_top'>
            <AiOutlineShopping />
            <div className='carrito'>
              {carrito}
            </div>
        </div>
    </div>
  )
}

export default MenuTop