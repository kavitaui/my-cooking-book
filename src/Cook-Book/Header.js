import React from 'react'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import { cooking } from '../Cooking-images';
import {navItems} from "../LearnDropDownMenu/Components/NavItems";
import Navbar from '../LearnDropDownMenu/Components/Navbar';
const Header = () => {
    return (
        <>
            <div className='navbar1'>
                <div className=' col-12 block-navbar1  '>
                    <div className=' col-10 nav-menu  '>

                        {/* <div className='col-12 row menu'> */}
                        {/* shortcut ul>(li>a)*5 */}
                        {/* <div className='col-4'> */}
                        <div className='col-4'>
                            <img src={cooking} alt="" style={{
                                width: "175px", height: "64px", maxheight: "156%"
                            }}></img></div>
                            <div className='col-8 nav'> <Navbar /></div>
                        </div>

                       

                  

                    <div className='col-2  started button-nav'>
                        <div className='started' >GET STARTED </div>
                    </div>
                </div>









                <div className='wave-navbar '>

                    <div className='w-nav-overlay'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
