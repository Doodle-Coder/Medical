
import React from 'react';
import '../assets/css/style.css';

function Signin(){
    return(
            <>
            <div className='container'>
                <div className="myCard">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="myleftCtn">
                                <form className='myForm text-center'>
                                    <header>
                                        LOG IN
                                    </header>
                        
                                    <div className='form-group'>
                                        <i className='fas fa-envelope'></i>
                                        <input className='myInput' type="text" placeholder="Email" id="email" required />
                    
                                    </div>
                                    <div className='form-group'>
                                        <i className='fas fa-lock'></i>
                                        <input className='myInput' type="password" placeholder="password" id="password" required />
                            
                                    </div>
    
                                        <input type='submit' className='butt' value="Login"/>
                                        <input type='submit' className='butt' value="Forgot Password?"/>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6" >
                            <div className="myRightCtn">
                            <div className="box">
                                <header>Hello World</header>
                                <p>Lorem30 dvdsvds dvdsvsdv dsvdsvds dv dsv
                                    vdsvdsvdsvdsvds  dvdsvvdsvds
                                    cdsvdsvdsvv
                                </p>
                                <input type="button" className="butt_out" value="Learn More" />
                            </div>

                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>


            </>
    )
}

export default Signin;