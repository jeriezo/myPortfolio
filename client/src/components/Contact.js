import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container

} from 'reactstrap';

import axios from 'axios'

class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            fullname: "",
            subject: "",
            email: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { fullname, email, subject, message } = this.state

        const form = await axios.post('/api/form', {
            fullname, email, subject, message
        })
        console(fullname);
    }
    render() {
        return (
            <div >
                <Container>

                    <h3 className="headers">CONTACT US</h3>
                    <hr className="headersLine"></hr>

                    <h4 className="contextBody contactText">Tell me the services you require. I will reply in less than 24 hours or just email: <strong>jerrycifeanyi@gmail.com</strong></h4>


                    <Form onSubmit={this.handleSubmit} className="contactform">
                        <FormGroup>
                            <Label for="fullname"><h3>FullName</h3></Label>
                            <Input
                                type="text"
                                name="fullname"
                                placeholder="Enter Your FullName"
                                className='mb-3'
                                onChange={this.handleChange}
                            />

                            <Label for="email"><h3>Email</h3></Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                className='mb-3'
                                onChange={this.handleChange}

                            />

                            <Label for="subject"><h3>Subject</h3></Label>
                            <Input
                                type="text"
                                name="subject"
                                placeholder="Enter Your Subject"
                                className='mb-3'
                                onChange={this.handleChange}

                            />
                            <Label for="message"><h3>Message</h3></Label>
                            <Input
                                type="textarea"
                                name="message"
                                placeholder="Enter Your Message Here"
                                className='mb-3'
                                onChange={this.handleChange}

                            />
                            <Button
                                style={{ marginTop: '2rem' }} block>Submit Message</Button>
                        </FormGroup>

                    </Form>
                </Container>
            </div >
        );
    }
}

export default Contact

