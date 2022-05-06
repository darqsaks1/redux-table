import React from "react";
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export const ProductCard = ({ item }: any) => {

    console.log(item)


    return (
        <div className='productsContainer' style={{ marginTop: '100px' }}>
            <Card  >
                <Card.Img variant="bottom" src={item.image} style={{ width: '6rem', marginLeft: '100px' }} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        Category:  {item.category}
                    </Card.Text>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                        Price: {item.price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

