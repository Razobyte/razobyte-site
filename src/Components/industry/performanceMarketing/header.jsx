import React from 'react'
import {Row,Col} from 'react-bootstrap'
import logo from '../../../../public/Image/COMPANY LOGO -razobyte-01 (1).png'
import {MdOutlineWifiCalling3} from 'react-icons/md';
import {Button} from 'react-bootstrap';
import '../../Navbar2/Navbar/Navbar.css'


export default function Header({openmodel}) {
  return (
   <>
   <Row className='w-screen px-0 flex justify-center items-center py-sm-4 py-3'>
    <div className='max-w-7xl flex justify-between mx-auto px-sm-5 px-4'>
        <div>
            <img src={logo} alt="logo" className=' md:h-5 h-auto md:w-auto w-36' />
       </div>
       <div className='flex justify-between gap-9'>
       <div className='md:flex hidden'>
       <a href="tel:+8448158188"
      className='text-decoration-none'>
        <button className="flex items-center bg-[#3b7fbf]
         text-[#fff] font-medium sm:text-xl  text-xs px-6 py-sm-2 py-1 rounded-lg shadow-md hover:text-[#e0f0ff]">
          <MdOutlineWifiCalling3 className="sm:mr-2 mr-1" />
          Call Now
        </button>
      </a>
       </div>
       <div>
       <Button 
                onClick={openmodel}
                className="btnmain px-sm-5 px-2 "
              >
                Get a Free Session
              </Button>
       </div>
       </div>
    </div>

   </Row>
   </>
  )
}
