import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CarouselSlider from './Carousel';

import { Aboutus } from './Aboutus';
import { Navbar } from './Navbar';
import { TopPart } from './TopPart';
import { BookTable } from './BookTable';
import { Chefs } from './Chefs/Chefs';
import { Footer } from './Footer/Footer';
import { ContactUs } from './Contactus/ContactUs';
import { Events } from './Events/Events';
const Home = () => {

  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false)
  }

  const handlechange  = (dd)  => {
    setModal(dd)
  }
  
  return (
    <div className='main-content'>
        <Navbar />
        <TopPart handlechange={handlechange} />
        <Aboutus handlechange={handlechange} />
         <BookTable />
        <Events/> 
        <Chefs/>
        <ContactUs/>
        <Footer/>
        <Modal show={modal}
          onHide={handleClose}
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <CarouselSlider />
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default Home;