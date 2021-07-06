import React from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"




var StartDate = new Date();
var dd = String (StartDate.getDate()).padStart(2,'0');
var mm = String (StartDate.getMonth()+1).padStart(2,'0');
var yyyy = StartDate.getFullYear();
StartDate = yyyy+"-"+mm+"-"+dd;
var EndDate = new Date();
EndDate.setDate(EndDate.getDate() + parseInt(5));
dd = String (EndDate.getDate()).padStart(2,'0');
mm = String (EndDate.getMonth()+1).padStart(2,'0');
yyyy = EndDate.getFullYear();
EndDate = yyyy+"-"+mm+"-"+dd;
function AddTask() {
    
    return(
            <>
            <Form className="itemTask">
                <Form.Row>
                    <Col xs={3} >
                        <Form.Label >Task title</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control  type="text" placeholder="Enter a task title" />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={3} >
                        <Form.Label>Start date</Form.Label>
                    </Col>
                    <Col>
                    <Form.Control type="date" defaultValue={StartDate} />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={3}>
                        <Form.Label>End date</Form.Label>
                    </Col> 
                    <Col>    
                        <Form.Control type="date" defaultValue={EndDate} />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={3} >
                        <Form.Label>Priority</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom >
                            <option value="Low">Low</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row style={{marginTop:20}}>
                    <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="danger" type="reset">
                            Cancel
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
            </>
    )
}

export default AddTask