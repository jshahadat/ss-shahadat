import React from "react";
import "../../utils/style.css";
import { Container, Card, Row, Col, CardBody, CardHeader } from "reactstrap";

const HomeGallery = () => {
    return (
        <>
            <br></br>
            <Container fluid={true}>
                <Row style={{ marginTop: 20 }}>
                    <div className="text-center">
                        <h1 className="home-title">
                            What Your <span style={{ color: "#4AB421" }}>Searches</span> Do
                        </h1>
                        <p className="home-para font-normal mt-0">
                            Your searches make our planet pristine, verdant and comfortable just as it is intended to be.
                        </p>
                    </div>
                </Row>

                <Row>
                    <Col>
                        <div className="card-div">
                            <img className="card-image" src="https://i.ibb.co/W2R82Y2/what-our-searches-do-1.jpg" alt="" />

                            <div className="top-left">
                                <div>
                                    <p className=" fw-bold cardParaTitle">Become Climate Active </p>
                                    <p className="card-paragraph">
                                        Be a solution to the disastrous effects of climate change as you
                                        <br /> beautify the environment with your green searches.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="d-flex justify-items-center justify-content-center mx-auto mt-5">
                    <div className="me-4">
                        <img
                            style={{ borderRadius: "10%" }}
                            className="mg-fluid"
                            // style={{ height: "594px", width: "599px" }}
                            src="https://i.ibb.co/FsW0s8X/what-our-searches-do-2.jpg"
                            alt=""
                        />

                        <div className="text-center bg-white gellary-infos">
                            <h6 className="infos-tilte">Feed a Hungry Child</h6>
                            <p className="infos-pra">
                                Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches
                            </p>
                        </div>
                    </div>

                    <div className="ms-4">
                        <img style={{ borderRadius: "10%" }} className="img-fluid" src="https://i.ibb.co/D4RGsn3/what-our-searches-do-3-1.jpg" alt="" />

                        <div className="text-center bg-white gellary-infos">
                            <h6 className="infos-tilte">Give A Sanitary Pad</h6>
                            <p className="infos-pra">
                                Shape a girl into a change maker or an inspiration that the world can not wait to have by making your searches girl-power
                                oriented.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default HomeGallery;
