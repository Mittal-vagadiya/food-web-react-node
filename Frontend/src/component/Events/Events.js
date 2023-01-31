import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Events.scss'
import Image1 from '../../Assets/pictures/Events/Events-1.jpg';
import Image2 from '../../Assets/pictures/Events/Events-2.jpg';
import Image3 from '../../Assets/pictures/Events/Events-3.jpg';
export const Events = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const EventData = [
    {
      id: 0,
      image: Image1,
      occation: "Birthday Parties",
      price: "$499",
      details: "lorem20"
    },
    {
      id: 1,
      image: Image2,
      occation: "Coustom Parties",
      price: "$99",
      details: "lorem20"
    }, {
      id: 2,
      image: Image3,
      occation: "Private Parties",
      price: "$499",
      details: "lorem20"
    }
  ]
  return (
    <div id="events">
      <div className='text-center container-fluid'>
        <div className='heading'>
          <p>Events</p>
          <h4>SHARE <span>YOUR MOMENTS</span> IN OUR RESTAURENT</h4>
        </div>
        <div className='container-fluid' style={{ height: "600px" }}>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {EventData?.map((item) => {
              console.log("item", item)
              return (
                <>
                  <div className='image'  >
                    <img src={item.image} alt="------" height="800" width="100%" style={{opacity:"0.9"}}/>
                  </div>
                  <section className="card-details">
                    <div className='content'>
                    <div className='heading'>
                      {item.id}
                    </div>
                    <div className='data'>
                      {item.occation}
                    </div>
                    <div className='price'>
                      {item.price}
                    </div>
                    <div className='details'>
                      {item.details}
                    </div>
                  </div>

                  </section>
                </>)
            })}
            {/* <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div> */}
            {/* <EventItem /> */}
          </Carousel>

        </div>
      </div>
    </div >
  )
}
