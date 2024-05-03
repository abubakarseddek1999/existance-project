import React from "react";
import { Row, Col, Card } from "react-bootstrap";


// images
import logoDark from "../../../assets/images/brands/paySlip.png";
import { Link } from "react-router-dom";

const PaySlip = () => {
    return (
        <>
            <div className='d-flex justify-content-between' >
                <div >
                    <p className='fs-1 fw-bold'>PaySlip</p>
                    <p><Link to={"/dashboard/ecommerce"}>Dashboard</Link> / PaySlip</p>
                </div>
                <div className='d-flex align-items-start mt-2 justify-content-between'>
                    <div className='btn btn-secondary' style={{ marginLeft: "2px" }}>
                        CSV
                    </div>
                    <div className='btn btn-secondary ' style={{ marginLeft: "2px" }}>
                        PDF
                    </div>
                    <div className='btn btn-secondary ' style={{ marginLeft: "2px" }}>
                        Print
                        <i className="bi bi-printer m-1"></i>
                    </div>
                </div>
            </div>

            <Card>
                <Card.Body>
                    <p className="fs-1 fw-bold text-center mb-5 text-md-xs text-dark">PAYSLIP FOR THE MONTH OF MAY 2024</p>


                    <div className="d-flex align-items-start mt-2 justify-content-between ">
                        <div className="d-flex flex-column">
                            <div style={{ marginBottom: '10px' }}>
                                <img src={logoDark} alt="" height="100" />
                            </div>

                            <div style={{ marginBottom: '20px', lineHeight: "10px",color:"black" }}>
                                <p>Dreamguy's Technologies</p>
                                <p>3864 Quiet Valley Lane,</p>
                                <p>Sherman Oaks, CA, 91403</p>

                            </div>

                            <div style={{ marginBottom: '10px', lineHeight: "10px",color:"black" }}>
                                <p className="fs-0.5 fw-bold text-dark">John Doe</p>
                                <p>Web Designer</p>
                                <p>Employee ID: FT-0009</p>
                                <p>Joining Date: 1 Jan 2023</p>

                            </div>

                        </div>

                        <div className="text-dark" style={{ marginBottom: '10px', lineHeight: "10px" }}>
                            <p className="fs-0.8 fw-bold" >PAYSLIP #49029</p>
                            <p>Salary Month: March, 2019</p>

                        </div>

                    </div>

                    <div className="d-md-flex align-items-start mt-2 justify-content-between text-dark">
                        <div className="container">
                            <p className="fw-bold fs-0.5 text-dark">Earning</p>
                            <table className="table table-bordered border-2 border-dark">
                                <thead >
                                    <tr>
                                        <th>Item</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody className=" fw-bold text-dark">
                                    <tr>
                                        <td>Basic Salary</td>
                                        <td>$6500</td>
                                    </tr>
                                    <tr>
                                        <td>House Rent Allowance (H.R.A.)</td>
                                        <td>$55</td>
                                    </tr>
                                    <tr>
                                        <td>Conveyance</td>
                                        <td>$55</td>
                                    </tr>
                                    <tr>
                                        <td>Other Allowance</td>
                                        <td>$55</td>
                                    </tr>
                                    <tr>
                                        <td>Total Earnings</td>
                                        <td>$6600</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="container">
                        <p className="fw-bold fs-0.5 text-dark">Deductions</p>
                            <table className="table table-bordered border-2 border-dark">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody className=" fw-bold text-dark">
                                    <tr>
                                        <td>Basic Salary</td>
                                        <td>$6500</td>
                                    </tr>
                                    <tr>
                                        <td>House Rent Allowance (H.R.A.)</td>
                                        <td>$55</td>
                                    </tr>
                                    <tr>
                                        <td>Conveyance</td>
                                        <td>$55</td>
                                    </tr>
                                    <tr>
                                        <td>Other Allowance</td>
                                        <td>$55</td>
                                    </tr>
                                    <tr>
                                        <td>Total Earnings</td>
                                        <td>$6600</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="fs-0.5 fw-bold text-dark">Net Salary: $59698 (Fifty nine thousand six hundred and ninety eight only.)</p>


                </Card.Body>
            </Card>


        </>
    );
};

export default PaySlip;