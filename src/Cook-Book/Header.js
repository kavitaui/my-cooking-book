import React from 'react'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.css';
import { cooking } from '../Cooking-images';
const Header = () => {
    return (
        <>
            <div className='navbar'>
                <div className=' col-12 block-navbar  '>
                    <div className=' col-6 nav-menu '>
                        {/* <div className='col-12 row menu'> */}
                        {/* shortcut ul>(li>a)*5 */}
                        <div className='col-4'>
                            <img src={cooking} alt="" style={{
                                width: "175px", height: "64px", maxheight: "156%"
                            }}></img>
                        </div>

                        <div className='col-2 '> <ul>
                            <li>HOME
                            <ul><li>HOME</li>
                                <li>GET STARTED</li></ul></li>
                            </ul></div>
                        <div className='col-2'>
                            <ul>
                                <li>FEATURE
                                    <ul>
                                        <li>ADD & IMPORT</li>
                                        <li>ORGANISE & SEARCH</li>
                                        <li>PLAN,SHOP,COOK</li>
                                        <li>WEB APP</li>
                                        <li>VIDEO</li>
                                    </ul>

                                </li>

                            </ul></div>
                        <div className='col-2'><ul><li>PRICING</li></ul></div>
                        <div className='col-2'><ul><li>MORE
                            <ul><li>APP COMPARISIONS</li>
                            <li>FAQ</li>
                            <li>ROADMAP</li>
                            <li>IDEAS</li>
                            <li>BULK IMPORTER</li>
                            <li>CONTACT US</li>
                            </ul></li></ul></div>

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
