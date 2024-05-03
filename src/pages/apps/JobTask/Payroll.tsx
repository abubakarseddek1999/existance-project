import React, { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Modal, Nav, Row, Tab, Table } from "react-bootstrap";
import FeatherIcons from '../../icons/Feather';
import CreateForm from './CreateForm';
import PayrollForm from './PayrollForm';

interface TabContentType {
    id: number;
    title: string;
    icon?: string;
    text: string;
    text2: string;
    name: string;
    btn: string;
    salary: string;
}


const tabContents: TabContentType[] = [
    {
        id: 1,
        title: "Additions",
        btn: "Add Additions",
        name: "Joho due",
        salary: "120",
        icon: "uil-home-alt",
        text: `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor.Aenean massa.Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim.`,
        text2: `Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.`,
    },
    {
        id: 2,
        title: "Overtime",
        name: "Abu bakar",
        salary: "420",
        btn: "Add Overtime",
        icon: "uil-user",
        text: `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                  Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
                  dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                  ac, enim.`,
        text2: `Vakal text here dolor sit amet, consectetuer adipiscing
                  elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim.`,
    },
    {
        id: 3,
        title: "Deductions",
        name: "Vedanth",
        salary: "520",
        btn: "Add Deductions",
        icon: "uil-envelope",
        text: `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean
                  commodo ligula eget dolor.Aenean massa.Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  Nulla consequat massa quis enim.`,
        text2: `Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.`,
    },
];





const Payroll = () => {
    const [activeTab, setActiveTab] = useState("Additions"); // State to hold active tab title
    const [showModal, setShowModal] = useState(false);
    const [btnValue, setBtnValue] = useState(""); // State to hold btn value


    const handleModalToggle = (btn: SetStateAction<string>) => {
        setShowModal(!showModal);
        setBtnValue(btn); // Set btn value based on the parameter

    };

    return (
        <>
            <div >
                <div style={{ color: "black" }}>
                    <p className='fs-1 fw-bold '>Payroll</p>
                    <p><Link to={"/dashboard/ecommerce"}>Dashboard</Link> / PaySlip</p>
                </div>

            </div>
            <Card>
                <Card.Body>
                    <h5 className="header-title mb-3 mt-0">Nav Tabs</h5>
                 
                    <Tab.Container defaultActiveKey="Additions">
                        <Nav as="ul" variant="tabs">
                            {(tabContents || []).map((tab, index) => {
                                return (
                                    <Nav.Item as="li" key={index}>
                                        <Nav.Link eventKey={tab.title} onClick={() => setActiveTab(tab.title)}>
                                            <span className="d-block d-sm-none">
                                                <i className={tab.icon}></i>
                                            </span>
                                            <span className="d-none d-sm-block">{tab.title}</span>
                                        </Nav.Link>
                                    </Nav.Item>

                                );
                            })}
                        </Nav>
                        <Tab.Content className="p-3 text-muted">
                            {(tabContents || []).map((tab, index) => {
                                return (
                                    <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index}>
                                        <Card>
                                            <Card.Body>
                                                <div className="d-flex justify-content-between">
                                                    <h4 className="header-title mt-0 mb-1">Striped Rows</h4>

                                                    <div>

                                                        <button type="button" className="btn btn-primary" onClick={() => handleModalToggle("Create")} >+ {tab.btn}</button>

                                                    </div>
                                                </div>

                                                <div className="table-responsive">

                                                    <Table className="mb-0" striped>
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Default</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <th scope="row">{tab?.name}</th>
                                                                <td>{tab?.icon}</td>
                                                                <td>$ {tab.salary}</td>
                                                                <td>
                                                                    <i className="bi bi-three-dots-vertical"></i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">{tab?.name}</th>
                                                                <td>{tab?.icon}</td>
                                                                <td> $ {tab.salary}</td>
                                                                <td>
                                                                    <i className="bi bi-three-dots-vertical"></i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">{tab?.name}</th>
                                                                <td>{tab?.icon}</td>
                                                                <td>$ {tab.salary}</td>
                                                                <td>
                                                                    <i className="bi bi-three-dots-vertical"></i>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">{tab?.name}</th>
                                                                <td>{tab?.icon}</td>
                                                                <td>$ {tab.salary}</td>
                                                                <td>
                                                                    <i className="bi bi-three-dots-vertical"></i>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                );
                            })}
                        </Tab.Content>
                    </Tab.Container>
                   
                </Card.Body>
            </Card >

            <Modal show={showModal} onHide={handleModalToggle} centered>
                <div className="modal-dialog-scrollable" style={{ maxWidth: '100vw' }}>
                    <Modal.Header closeButton>
                        <Modal.Title> Add {activeTab}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Add your form or content for editing here */}
                        <PayrollForm btn={btnValue}></PayrollForm>
                    </Modal.Body>
                </div>
            </Modal>

        </>
    );
};

export default Payroll;