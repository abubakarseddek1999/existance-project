import React, { useState } from 'react';
import { FormInput, VerticalForm } from '../../../components';
import { Row, Col, Card, Button, InputGroup, Form } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface UserData {
    username: string;
    email: string;
    salary: number;
    role: string;
    JoinDate: number;
}
interface CreateFormProps {
    btn?: string; // Make btn prop optional by adding "?"
}


const PayrollForm: React.FC<CreateFormProps> = ({ btn }) => {
    const schemaResolver = yupResolver(
        yup.object().shape({
            username: yup.string().required("Please enter Username"),
            email: yup.string().required("Please enter Email address"),
            password: yup.string().required("Please enter Password"),
            confirmpassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords don't match")
                .required("This value is required."),
            checkbox: yup.bool().oneOf([true]),
        })
    );
    const [validated, setValidated] = useState<boolean>(false);
    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (

        <div className="form-container">
            <Card>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group
                            className="position-relative mb-3"
                            controlId="validationTooltip01"
                        >
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            className="position-relative mb-3"
                            controlId="validationTooltip02"
                        >
                            <Form.Label>Unit Calculation</Form.Label>
                            <div className="form-check form-switch  form-switch-lg">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                   
                            </div>
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            className="position-relative mb-3"
                            controlId="validationCustonTooltipme"
                        >
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                                <Form.Control.Feedback type="invalid" tooltip>
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group
                            className="position-relative mb-3"
                            controlId="validationTooltip03"
                        >
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" placeholder="Salary" required />
                            <Form.Control.Feedback type="invalid" tooltip>
                                Please provide a valid Salary
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            className="position-relative mb-3"
                            controlId="validationTooltip04"
                        >
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid" tooltip>
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex justify-content-between'>
                            {/* Your existing form inputs */}

                            {/* Bootstrap radio buttons */}
                            <Form.Group controlId="flexRadioDefault1">
                                <Form.Check
                                    type="radio"
                                    label="no assignee"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                            </Form.Group>
                            <Form.Group controlId="flexRadioDefault2">
                                <Form.Check
                                    type="radio"
                                    label="all employees"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                />
                            </Form.Group>
                            <Form.Group controlId="flexRadioDefault2">
                                <Form.Check
                                    type="radio"
                                    label="select Employee"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    checked
                                />
                            </Form.Group>

                        </Form>

                        <Button type="submit">Submit form</Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
};

export default PayrollForm;