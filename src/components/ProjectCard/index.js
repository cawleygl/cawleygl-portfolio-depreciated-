import React from 'react'
import { Card, Button, ButtonGroup, Container } from 'react-bootstrap';

import "./style.css"

const card = (props) => {
    return (
        <Container fluid>
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.asset} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <ButtonGroup>
                        <Button size="sm" href={props.appLink} variant="danger">Application</Button>
                        <Button size="sm" href={props.repoLink} variant="danger">Repository</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Container>

    );
}

export default card
