import React,{useState} from "react";
import TasksList from './TasksList';
import {Button, Row, Col, Container,Card} from "react-bootstrap";
import attendeesList from "../attendees.json";

function tooglefunc() {
    
    return setToggleForm(!toggleForm)}



function AttendeesList () {
    let [toggleForm, setToggleForm] = useState(false);
    
    return(
        <Container style={{marginTop:50}}>
            {
                attendeesList.map(attendees=>(
                    <div style={{width:300}}>
                    
                        <Card variant="primary">
                        <Card.Header>
                                <Row>
                                    <Col>{attendees.name}</Col>
                                    <Col>
                                    {/* onClick={()=> onDeleteAppointment(appointment.id)} */}
                                        <Button id={attendees.id} onClick={tooglefunc}>
                                        Tasks
                                        </Button>
                                    </Col>
                                </Row>
                        </Card.Header>
                        { toggleForm && 
                        <Card.Body>
                            <TasksList />
                        </Card.Body>
                        }
                        </Card>
                   
                    </div>
                ))
            }
            
        </Container>
        
    )}

export default AttendeesList