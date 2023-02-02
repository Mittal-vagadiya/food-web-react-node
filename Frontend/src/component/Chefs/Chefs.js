import React from 'react'
import ChefsCard from './ChefsCard'


export const Chefs = () => {
  
    return (
        <>
            <section id="chefs-section">
                <div className='chefs' id="about">
                    <div className='continer about-content text-center'>
                        <div className='heading'>
                            <p>Chefs</p>
                            <h4>Our<span>  Proffesional </span> Chefs</h4>
                        </div>
                        <div className='container'>
                            <div className='row gy-4'>
                              <ChefsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
