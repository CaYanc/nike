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


  return (
    
      <UserProvider>
        <div className='app'>
        <div className='content_meutop'>
          <MenuTop/>
        </div>
        <Slider/>
        <MenuMitad/>

        <div className='content_productos'>
          <Products nombre='Air Max 97' precio='20.99' img={img1} setEstado={setEstado} setImg={setImg}/>
          <Products nombre='React Presto' precio='29.00' img={img2} setEstado={setEstado}  setImg={setImg}/>
          <Products nombre='Air Max 200 SE' precio='60.44' img={img3} setEstado={setEstado}  setImg={setImg}/>
          <Products nombre='React Presto' precio='124.00' img={img1} setEstado={setEstado}  setImg={setImg}/>
        </div>
        {estado && <Popup setEstado={setEstado} setImg={img}/>}
      </div>
      // </UserProvider>
    
  )
}

export default App
