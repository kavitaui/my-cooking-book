import React from 'react';
import { footer } from '../Cooking-images';


const Footer = () => {
    return (
        <div className='content-footer col-12 row'>
            <div className='combine-padding-global col-12 row'>
                <div className='combine-container-large col-12 row'>
                    <div className='combine-container-first col-5'>
                        <div className='col-12 row img'>
                            <img src ={footer} alt=""></img>
                        </div>
                        <div className='sub-content'>
                        The CookBook App is brought to you by CookBook Co. Pty <br/>
                        Ltd.
                        </div>
                    
                    </div>
                    <div className='combine-container-second  col-3'>
                        <ul>
                            <li>
                                Features
                                <ul>
                                    <li>Get Started</li>
                                    <li>Add & Import</li>
                                    <li>Organise & Search</li>
                                    <li>Plan, Shop, Cook</li>
                                    <li>Web App</li>
                                </ul>
                            </li>
                        </ul>

</div>


                        <div className='combine-container-third col-2'>
                            <ul> <li>More <ul><li>FAQ</li>
                                <li>Pricing</li>
                                <li>App Comparisons</li>
                                <li>Bulk Importer</li>
                                <li>Preview Video</li></ul></li></ul>
                                
                        </div>

                    <div className='combine-container-fourth col-2'>
                        <ul>  <li>CookBook Co.<ul>
                            <li>About</li>
                            <li>Contact Us</li>
                            <li>Roadmap</li>
                            <li>Ideas</li></ul></li></ul>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;
