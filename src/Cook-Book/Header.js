import React from 'react'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import {cooking}  from '../Cooking-images';
const Header = () => {
    return (
        <>
            <div className='navbar'>
                <div className=' col-12 block-navbar '>
                    <div className=' col-6 nav-menu '>
                        <div className='col-12 row menu'>
                            {/* shortcut ul>(li>a)*5 */}
                            <div className='col-4'>
                               <img src={cooking} alt=""  style ={{width:"175px",height:"64px",maxheight:"156%"
  }}></img></div>
                           
                            <div className='col-2 '> HOME</div>
                            <div className='col-2'>FEATURE</div>
                            <div className='col-2'>PRICING</div>
                            <div className='col-2'>MORE</div>
                            
                        </div>
                    </div>
                    <div className='col-4'></div>
                    <div className='col-2 button-nav'>
                        GET STARTED
                    </div></div>
            </div>
        </>
    )
}

export default Header
