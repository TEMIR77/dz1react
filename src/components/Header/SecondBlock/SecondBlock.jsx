import React from 'react'
import './SecondBlock.css'
import Logo1 from '../../../assets/Vector (1).svg'
import Logo2 from '../../../assets/Vector (2).svg'
import Logo3 from '../../../assets/Vector (3).svg'
import Logo4 from '../../../assets/Vector (4).svg'


const SecondBlock = () => {
  return (
    <div className='SecondBlock'>
        <div className='second1'>
            <img src={Logo1} alt="" />
            <h2 className='high'>High Quality</h2>
            <h5 className='craf'>crafted from top materials</h5>
        </div> 
        <div className='second1'>
            <img src={Logo2} alt="" />
            <h2 className='high'>Warrany Protection</h2>
            <h5 className='craf'>Over 2 years</h5>
        </div> 
        <div className='second1'>
            <img src={Logo3} alt="" />
            <h2 className='high'>Free Shipping</h2>
            <h5 className='craf'>Order over 150 $</h5>
        </div> 
        <div className='second1'>
            <img src={Logo4} alt="" />
            <h2 className='high'>24 / 7 Support</h2>
            <h5 className='craf'>Dedicated support</h5>
        </div> 
    </div>
  )
}

export default SecondBlock;