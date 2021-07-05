import React,{useState} from "react";
import TasksList from './TasksList';
import {Button, Row, Col, Container,Card} from "react-bootstrap";
import db from "../db.json";

function AttendeesList () {
     const [toggleForm, setToggleForm] = useState(false);
    
    return(
        <Container style={{marginTop:50}}>
            {
                db.attendees.map(attendees=>(
                    <div style={{width:600}}>
                    
                        <Card variant="primary">
                        <Card.Header>
                                <Row>
                                    <Col>{attendees.name}</Col>
                                    <Col>
                                    {/* onClick={()=> onDeleteAppointment(appointment.id)} */}
                                        <Button id={attendees.id} onClick={()=>setToggleForm(!toggleForm)}>
                                        Tasks
                                        </Button>
                                    </Col>
                                </Row>
                        </Card.Header>
                        { toggleForm && 
                        <Card.Body>
                            <TasksList  />
                            <Button as="div" style={{width:525}}>Add New Task</Button>
                        </Card.Body>
                        }
                        </Card>
                   
                    </div>
                ))
            }
            
        </Container>
        
    )}

export default AttendeesList