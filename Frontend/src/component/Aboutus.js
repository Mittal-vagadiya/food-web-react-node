import React from 'react';
import aboutimage from '../Assets/pictures/about-2.jpg';
import Card from 'react-bootstrap/Card';

export const Aboutus = (props) => {
    const svgConverter = (icon) => {
        return icon
    }

    const cardData = [{
        id: 1,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-data" viewBox="0 0 16 16">
        <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>`,
        head: "Corporis voluptates officia eiusmod",
        details: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'
    }, {
        id: 2,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gem" viewBox="0 0 16 16">
        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
      </svg>`,
        head: "Ullamco laboris ladore pan",
        details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
    },
    {
        id: 3,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-inboxes" viewBox="0 0 16 16">
        <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438L14.933 6zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0H1.066z"/>
      </svg>`,
        head: "Labore consequatur incidid dolore",
        details: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'
    }
    ]
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
                                <Card className='card'>
                                    <Card.Body className='card-body'>
                                        <Card.Title className='card-title'>Why Choose Yummy?</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                        </Card.Text>
                                        <button type="button" className="btn" onClick={() => window.scrollTo(0, 0)}> Load More</button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col-lg-8 col-sm-12'>
                            <div className='other-cards'>
                                <div className='three-card d-flex'>
                                       {cardData.map((data) => {
                                        // console.log("retiurfhgtnheroligbneir5", data)
                                        return (
                                            <div className='second-part-cards' key="{data}">
                                                <Card className='three'>
                                                    <Card.Body className="other-card-body">
                                                        <div className='icon-content'>
                                                        <Card.Title className='three-icon'>
                                                            {/* {svgConverter(data.icon) } */}
                                                            <div dangerouslySetInnerHTML={{__html : `${data.icon}`}}></div>
                                                            {/* <img src={data.icon} /> */}
                                                        </Card.Title>
                                                        </div>
                                                        <Card.Text>
                                                            <span className='three-head'>{data.head}</span>
                                                            <span className='three-details'>
                                                              {data.details}
                                                            </span>
                                                        </Card.Text>

                                                    </Card.Body>
                                                </Card>
                                            </div>

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
