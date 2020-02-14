import React from 'react';
import { Jumbotron, Col, Row } from 'reactstrap'

class Jumbotro extends React.Component {
    render() {
        return (
            <Jumbotron class="jumbotron">
                <Row>
                    <Col sm="6">
                        <h3>I am Jerry Ifeanyi and I build Awesome Web Applications</h3>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}

export default Jumbotro