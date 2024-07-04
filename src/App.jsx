import { useState } from 'react'
import MenuMitad from './Components/MenuMitad'
import MenuTop from './Components/MenuTop'
import Popup from './Components/Popup'
import Products from './Components/Products'
import Slider from './Components/Slider'

import img1  from './assets/img1.png'
import img2  from './assets/img2.png'
import img3  from './assets/img3.png'
import UserProvider from './Context/UserProvider'

function App() {

  const [estado, setEstado] = useState(false)
  const [img, setImg] = useState()
  const [nombre, setNombre] = useState()
  const [precio, setPrecio] = useState()



  return (
    
      <UserProvider>
        <div className='app'>
        <div className='content_meutop'>
          <MenuTop nombre={estado && nombre}/>
        </div>
        <Slider/>
        <MenuMitad/>

        <div className='content_productos'>
          <Products nombre='Air Max 97' precio='20.99' img={img1} setEstado={setEstado} setImg={setImg} setNombre={setNombre} setPrecio={setPrecio}/>
          <Products nombre='React Presto' precio='29.00' img={img2} setEstado={setEstado}  setImg={setImg} setNombre={setNombre} setPrecio={setPrecio}/>
          <Products nombre=' Max 200 ' precio='60.44' img={img3} setEstado={setEstado}  setImg={setImg} setNombre={setNombre} setPrecio={setPrecio}/>
          <Products nombre='Presto Nike' precio='124.00' img={img1} setEstado={setEstado}  setImg={setImg} setNombre={setNombre} setPrecio={setPrecio}/>
          <Products nombre='Air 1200 ' precio='60.44' img={img3} setEstado={setEstado}  setImg={setImg} setNombre={setNombre} setPrecio={setPrecio}/>
          <Products nombre='Retro 4' precio='60.44' img={img2} setEstado={setEstado}  setImg={setImg} setNombre={setNombre} setPrecio={setPrecio}/>
        </div>
        {estado && <Popup  setEstado={setEstado} setImg={img} setPrecio={precio}/>}
      </div>
      // </UserProvider>
    
  )
}

export default App
