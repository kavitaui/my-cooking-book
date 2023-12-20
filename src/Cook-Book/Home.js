import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {motion} from "framer-motion";
import { GooglePlay, apple, web } from "../Cooking-images";
const Home = () => {
    return (
        <>
            <div className='col-12 main'>
                <div className='row'>
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className='centered-div'>
                            <h1 className='text-center'>
                                All-in-one<br />
                                recipe manager & planner app</h1>
                            <p className='sub-heading'>The ultimate recipe organiser for easy access to all of your recipes on all
                                of your devices</p> </div>

                    </div>
                    <div className="col-6 row apps">
                        <div className='col-3 apple'>
                            < img src={apple} alt="" ></img>
                        </div>
                        <div className='col-3 GooglePlay' > <img src={GooglePlay} alt=""></img></div>
                        <div className='col-3 web'> <img src={web} alt=""></img></div>
                    </div>

                </div>
                <div className='chowmin'></div>
                <div className='veggie'></div>
                <div className='phone'></div>

                <div className=' col-12 row star '>
                    <div className=' col-6 star-icon '>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                        4.6 rating on Apple App Store & Google Play</div>
                    </div>
                <div className='bottom-nav'></div>
            </div>
             <div className='col-12 main-div'>
            <div className='content'>
               
                    <div className='row '>
                    <div className='col-4  subject'>
                       <div className='col-12 icon-block'>
                       <div className='col-2 image first'></div>
                       </div>
                         <div className='content' >
                        <h4> Download for free</h4>
                        <p  className="para-small">Download the app and try CookBook for free with up to 20 recipes & 5 OCR scans.</p>
</div>
                    </div>
                    <div className='col-4 '>
                    <div className='col-12 icon-block'>
                    <div className='col-2 image second '></div>
                    </div>
                    <div className='content' >
                        <h4>Make it your own</h4>
                        <p  className="para-small">Import from the web, scan physical recipes or create them from scratch, on all your devices.</p></div>
                    </div>
                    <div className='col-4 heading-3'>
                    <div className='col-12 icon-block'>
                    <div className='col-2 image third '></div>
                    </div>
                    <div className='content' >
                        <h4>Plan, shop & cook</h4>
                        < p  className="para-small">Plan your meals, create interactive shopping lists and cook with scaling, conversion & timers.</p></div>
                    </div>
                    </div>


                </div>
            </div>



        </>
    )
}

export default Home;
