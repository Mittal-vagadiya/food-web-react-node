import React from 'react'
import './ContactUs.scss';
export const ContactUs = () => {
    const selecttext = () => {

    }
    return (
        <>
            <div id="contact-us" className='container'>
                <div className='heading text-center p-3'>
                    <p>Contact</p>
                    <h4>NEED HELP ?<span>  CONTACT US</span></h4>
                </div>
                <div className="container map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3111317047346!2d72.7639470144598!3d21.179795785916724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04da5097fee93%3A0x7a537badac7de3e3!2sDe&#39;%20Villa%20Garden%20Restro%20Lounge!5e0!3m2!1sen!2sin!4v1666546565436!5m2!1sen!2sin"
                        width="600"
                        height="600"
                        style={{ border: "0" }}
                        loading="lazy"
                    ></iframe>
                 
                </div>
                <div className='row gy-4' style={{padding:"20px 15px 20px 15px"}}>
                        <div className='col-md-6'>
                            <div className='info '>
                                <div className='d-flex'>
                                    <div className='icons'>
                                        <i className="bi bi-map"></i>
                                    </div>
                                    <span className='details'>
                                        <h3>Adress</h3>
                                        <p>L.P Savani Sports Complex Adajan, Hazira Rd, Bhatha, Surat, Gujarat 394510
                                        </p>
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='info '>
                                <div className='d-flex'>
                                    <div className='icons'>
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                    <span className='details'>
                                        <h3>Email</h3>
                                        <p onClick={() => window.location = 'mailto:contact@example.com'}>contact@emample.com</p>
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='info '>
                                <div className='d-flex'>
                                    <div className='icons'>
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <span className='details'>
                                        <h3>Call Us</h3>
                                        <p onClick={() => { selecttext() }} id="number">+1 5589 55488 55</p>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='info '>
                                <div className='d-flex'>
                                    <div className='icons'>
                                        <i className="bi bi-share"></i>
                                    </div>
                                    <span className='details'>
                                        <h3>Opening Hours</h3>
                                        <p><b>Mon-Sat:</b>11AM - 23PM;<b>Sunday:</b>Closed</p>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
