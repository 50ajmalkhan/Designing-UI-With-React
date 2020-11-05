import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
const detail = () => {
    return (
        <div class="details">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 details-img">
                        <img src="images/laptop2.jpg" style={{ height: "350px", width: "103%" }} />
                    </div>

                    <div class="col-sm-6 ">
                        <div class="row">
                            <div class="col-sm-3">
                            </div>
                            <div class="col-sm-6 details-data">
                                <span>The Creator</span> <h5>Hey there, I'm Hana</h5><h6>T You’ll not only end up with a website that oozes authenticity, you’ll also gain the confidence to own your site design, effortlessly making customizations and updates to rock your online presence and grow your biz.</h6>
                            </div></div>
                    </div>
                </div>
            </div>
        </div>
        // <div class="details">

        //     <Container width="800px">

        //         <Row>
        //             <div className="details-img">
        //                 <Col md={6}>

        //                     <img src="images/laptop2.jpg" style={{ height: "350px" }} />

        //                 </Col>
        //             </div>

        //             <Col md={6} >
        //                 <h5> You’ll not only end up with a website that oozes authenticity, you’ll also gain the confidence to own your site design, effortlessly making customizations and updates to rock your online presence and grow your biz.</h5>
        //             </Col>
        //         </Row>

        //     </Container>
        // </div>
    );

};
export default detail;