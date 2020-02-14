import React from 'react';
import SliderCarousel from './SliderCarousel';
import { Row, Col, Card, CardTitle, CardText, Button } from 'reactstrap';

class Portfolio extends React.Component {
    render() {
        return (
            <div>

                <h3 className="headers">MY CLIENT PORTFOLIO</h3>
                <hr className="headersLine"></hr>

                <SliderCarousel />
                <Row>
                    <Col sm="6">
                        <Card body color="">
                            <CardTitle className="contextTitle">Special Title Treatment</CardTitle>
                            <CardText className="contextBody">With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button outline color="success">Visit Website here</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle className="contextTitle">Special Title Treatment</CardTitle>
                            <CardText className="contextBody">With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button outline color="success">Visit Website here</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle className="contextTitle">Special Title Treatment</CardTitle>
                            <CardText className="contextBody">With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button outline color="success">Visit Website here</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle className="contextTitle">Special Title Treatment</CardTitle>
                            <CardText className="contextBody">With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button outline color="success">Visit Website here</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Portfolio