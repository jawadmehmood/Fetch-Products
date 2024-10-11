import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Bcard.css';

function Bcard({ title, description, src }) {
    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="card-img-top" variant="top" src={src} alt={title} />
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text className="card-text">{description}</Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Bcard;
