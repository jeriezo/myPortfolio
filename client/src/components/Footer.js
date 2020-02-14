import React from 'react';
import { Row, Col } from 'reactstrap'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <footer>
                    <div className="fa-3x footerFonts">
                        <span>
                            <h5>Let's Get Social:</h5>
                            <Row>
                                <Col md="2" lg="2" sm="2">
                                    <a href="https://github.com/jeriezo"><i className="fa fa-github"></i></a>
                                </Col>
                                <Col md="2" lg="2" sm="2">
                                    <a href="https://twitter.com/jerrywebman"><i className="fa fa-twitter"></i></a>
                                </Col>
                                <Col md="4" lg="4" sm="4">
                                    <a href="https://www.linkedin.com/in/jerry-ifeanyi-63a07a12a/"><i className="fa fa-linkedin"></i></a>
                                </Col>
                                <Col md="2" lg="2" sm="2">
                                    <a href="https://instagram.com/jerry_webman"><i className="fa fa-instagram"></i></a>
                                </Col>
                                <Col md="2" lg="2" sm="2">
                                    <a href="mailto: jerrycifeanyi@gmail.com"><i className="fa fa-envelope"></i></a>
                                </Col>
                            </Row>
                        </span>
                    </div>
                    <div>
                        <h5 className="jerrywebman" >© JerryWebman All rights reserved.</h5>
                    </div>
                </footer>
            </div >
        );
    }
}
export default Footer