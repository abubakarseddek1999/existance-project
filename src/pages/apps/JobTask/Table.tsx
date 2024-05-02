import PageTitle from '../../../components/PageTitle';
import { Row, Col, Card, Button, Modal, Dropdown } from "react-bootstrap";
import Table from "../../../components/Table";

//dummy data
import { records as data } from "./data";
import { useNavigate } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import CreateForm from './CreateForm';

interface CellProps {
    value: number; // Assuming the salary is a number type
}


const sizePerPageList = [
    {
        text: "5",
        value: 5,
    },
    {
        text: "10",
        value: 10,
    },
    {
        text: "25",
        value: 25,
    },
    {
        text: "All",
        value: data.length,
    },
];

const Tables = () => {
    const [showModal, setShowModal] = useState(false);
    const [btnValue, setBtnValue] = useState(""); // State to hold btn value


    const handleModalToggle = (btn: SetStateAction<string>) => {
        setShowModal(!showModal);
        setBtnValue(btn); // Set btn value based on the parameter

    };

    const [selectedRole, setSelectedRole] = useState(""); // State to hold selected role

    // const handleRoleSelect = (role: string) => {
    //     setSelectedRole(role);
    // };

    const columns = [
        {
            Header: "ID",
            accessor: "id",
            sort: true,
        },
        {
            Header: "Name",
            accessor: "name",
            sort: true,
        },
        {
            Header: "Email",
            accessor: "email",
            sort: true,
        },
        {
            Header: "Join Date",
            accessor: "date",
            sort: false,
        },
        {
            Header: "Role",
            accessor: "role",
            sort: true,
            Cell: ({ value }: CellProps) => (
                // <Button variant="info" className="waves-effect waves-light">{value}</Button>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-role">
                        {selectedRole || value}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: '400px' }}> {/* Adjust the width as per your requirement */}
                        <Dropdown.Item >Software Developer</Dropdown.Item>
                        <Dropdown.Item >Software Tester</Dropdown.Item>
                        <Dropdown.Item >UI/UX Designer</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>


            ),
        },
        {
            Header: "Salary",
            accessor: "salary",
            sort: false,
            Cell: ({ value }: CellProps) => ( // Specify the type of value
                <span>$ {value}</span> // Render salary with dollar sign
            ),
        },
        {
            Header: "Payslip",
            accessor: "payslip",
            sort: false,
            Cell: () => (
                <Button variant="primary" className="waves-effect waves-light">Payslip</Button>
            ),
        },
        {
            Header: "Action",
            accessor: "action",
            Cell: () => (

                <Button variant="light" className="waves-effect waves-light" onClick={() => handleModalToggle("update")}>Edit</Button>

            ),
        },
    ];


    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: "dashboard", path: "/dashboard/ecommerce" },
                ]}
                title={"employee salary Information table"}
            />


            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h4 className="header-title">Employee Salary</h4>
                                    <p className="text-muted fs-14 mb-4">A Table allowing search</p>
                                </div>

                                <Button variant="primary" className="waves-effect waves-light float-right mb-5" onClick={() => handleModalToggle("Create")}> + Add Salary</Button>
                            </div>

                            <Table
                                columns={columns}
                                data={data}
                                pageSize={10}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleModalToggle} centered>
                <div className="modal-dialog-scrollable" style={{ maxWidth: '100vw' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee Salary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Add your form or content for editing here */}
                        <CreateForm btn={btnValue}></CreateForm>
                    </Modal.Body>
                </div>
            </Modal>


        </>
    );
};

export default Tables;
