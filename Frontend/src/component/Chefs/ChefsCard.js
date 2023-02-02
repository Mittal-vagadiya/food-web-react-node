import React from 'react';
import Card from 'react-bootstrap/Card';

const ChefsCard = () => {
    const chefDetails = [
        {
            id: 0,
            image: require('../../Assets/pictures/Chefs/chefs-1.jpg'),
            chefName: "Walter White",
            job: "Master Chef",
            details: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
        },
        {
            id: 1,
            image: require('../../Assets/pictures/Chefs/chefs-2.jpg'),
            chefName: "Sarah Jhonson",
            job: "Patissier",
            details: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente."
        },
        {
            id: 2,
            image: require('../../Assets/pictures/Chefs/chefs-3.jpg'),
            chefName: "William Anderson",
            job: "Cook",
            details: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi."
        }
    ]
    return (
        <>
            {chefDetails.map((data) => {
                return (
                    <div className='col-md-6 col-lg-4 d-flex'>
                        <Card className='card' key={data.id}>
                            <div className='member-image'>
                                <img className="card-img-top" src={data.image} alt="Card image cap"></img>
                            </div>
                            <Card.Body className='card-body member-info'>
                                <h4 className='chef-name'>
                                    {data.chefName}
                                </h4>
                                <span className='occupation'>
                                    {data.job}
                                </span>
                                <p className='chef-description'>
                                    {data.details}
                                </p>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </>
    )
}

export default ChefsCard