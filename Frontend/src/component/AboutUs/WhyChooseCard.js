import React from 'react'
import Card from 'react-bootstrap/Card';

const WhyChooseCard = () => {
    return (
        <>
            <Card className='card'>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>Why Choose Yummy?</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                    </Card.Text>
                    <button type="button" className="btn" onClick={() => window.scrollTo(0, 0)}> Load More</button>
                </Card.Body>
            </Card>
        </>
    )
}

export default WhyChooseCard