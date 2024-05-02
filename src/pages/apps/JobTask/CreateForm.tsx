import React from 'react';
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

const CreateForm: React.FC<CreateFormProps> = ({ btn }) => {
    /*
    form validation schema
    */
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


    return (
        <div className="form-container">
            <Card>
                <Card.Body>
                    <VerticalForm<UserData>
                        onSubmit={() => { }}
                        resolver={schemaResolver}
                        defaultValues={{ username: "test" }}
                    >
                        <FormInput
                            label={"Name"}
                            type="text"
                            name="username"
                            placeholder="Enter your name"
                            containerClass={"mb-3"}
                        />
                        <FormInput
                            label={"Email address"}
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            containerClass={"mb-3"}
                        />
                        <FormInput
                            label={"salary"}
                            type="number"
                            name="salary"
                            placeholder="salary"
                            containerClass={"mb-3"}
                        />
                        <FormInput
                            label={"Role"}
                            type="text"
                            name="role"
                            placeholder="role"
                            containerClass={"mb-3"}
                        />
                        <FormInput
                            label={"JoinDate"}
                            type="date"
                            name="date"
                            containerClass={"mb-3"}
                        />

                        <div className="text-md-end mb-0">
                            <Button variant="primary" className="me-1" type="submit">
                                {btn}
                            </Button>
                            <Button variant="secondary" type="reset">
                                Cancel
                            </Button>
                        </div>
                    </VerticalForm>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CreateForm;