import React from 'react'
import {GooglePlay,apple,web} from "../Cooking-images";
const AllInOne = () => {
    return (
        <>
            <div className=' col-12 main'>
                <div className='row'>
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className='centered-div'>
                            <h1 className='text-center'>
                                All-in-one<br/>
                                recipe manager & planner app</h1>
                                <p className='sub-heading'>The ultimate recipe organiser for easy access to all of your recipes on all 
                               of your devices</p> </div>
                               <div className='apps'>
                <div className='  col-md-12 offset-md-2 row  '>
                    <div className='col-3 apple'>
                        < img  src={apple} alt="" ></img>
                    </div>
                    <div className='col-3 GooglePlay' > <img src={GooglePlay} alt=""></img></div>
                    <div className='col-3 web'> <img src={web} alt=""></img></div>
                    </div>
                </div>  
                            
                    </div>
                    <div className='chowmin'></div>
                    <div className='veggie'></div>
                    <div className='phone'></div>
                    
                </div>
               
               

             
                
            </div>









        </>
    )
}

export default AllInOne
