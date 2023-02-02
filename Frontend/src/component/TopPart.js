import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/general.scss';
import picture from '../Assets/pictures/Food/foodpic1.png';
export const TopPart = (props) => {
    return (
        <>
            <div className='top-part' id="top-part">
                <div className='container d-flex'>
                    <div className='row justify-content-space-between both-side'>
                        <div className='col-md-6 left-side container'>
                            <div className='content'>
                                <h1>
                                    ENJOY YOUR HEALTHY <br></br>DELICIOUS FOOD
                                </h1>
                                <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
                                <div className='two-btn'>
                                <Link to="booktable" smooth={true}>
                                    <button type="button" className="btn btn-danger">Book A Table</button>
                                   </Link>
                                    <button type="button" className="btn" onClick={() => props.handlechange(true)}>
                                        <i className="bi bi-play-circle"></i>
                                        Watch A Video
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 right-side'>
                            <div className='container'>
                                <img src={picture}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
