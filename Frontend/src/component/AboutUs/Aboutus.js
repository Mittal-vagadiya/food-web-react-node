import React from 'react';
import aboutimage from '../../Assets/pictures/About/about-2.jpg';

import WhyCard from './WhyChooseCard';
import OtherCard from './OtherCard';
 export const Aboutus = (props) => {
    return (
        <>
            <div className='About-us bg-white' id="about">
                <div className='continer-fluid about-content'>
                    <div className='heading'>
                        <p>ABOUT US</p>
                        <h4>LEARN MORE <span> ABOUT US</span></h4>
                    </div>
                    <div className='row container about-details d-flex '>
                        <div className='col-md-7 first-part-about '>
                            <div className='image-details'>
                                <div className='book' >Book a Table</div>
                                <div className='mobile' type="button" >+1 5589 55488 55</div>
                            </div>
                        </div>
                        <div className='col-md-5 second-part-about d-flex'>
                            <div className='list text-justify'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <ol>
                                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                </ol>
                                <div className='image-video' >
                                    <img className="image" src={aboutimage} ></img>
                                    <i className="bi bi-play-circle-fill video-btn" onClick={() => props.handlechange(true)}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <section className='why-us'>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-lg-4 col-sm-12'>
                            <div className='why-box'>
                                <WhyCard />
                            </div>
                        </div>
                        <div className='col-lg-8 col-sm-12'>
                            <div className='other-cards'>
                                <div className='three-card d-flex'>
                                       <OtherCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
