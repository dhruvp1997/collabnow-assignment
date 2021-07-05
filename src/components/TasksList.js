import React,{useState} from "react";
import {BiCaretDown} from "react-icons/bi"
import {Button, Row, Col, Container,Card} from "react-bootstrap";
 import db from "../db.json";

function TasksList () {
    const [toggleForm, setToggleForm] = useState(false);
    return(
        <Container>
            {
                db.tasks.map(tasks=>(
                    <div style={{width:525}}>
                    
                        <Card variant="primary">
                        <Card.Header>
                                <Row>
                                    <Col>{tasks.title}</Col>
                                    <Col>
                                    {/* onClick={()=> onDeleteAppointment(appointment.id)} */}
                                        <Button id={tasks.id} onClick={()=>setToggleForm(!toggleForm)}>
                                        <BiCaretDown />
                                        </Button>
                                    </Col>
                                </Row>
                        </Card.Header>
                        { toggleForm && 
                        <Card.Body>
                            <Row><Col><label>Start Date:</label>
                            &nbsp;{tasks.startdate}</Col>
                            <Col>
                            <label>End Date:</label>&nbsp;{tasks.enddate}</Col></Row>
                            <Row>
                            <Col><label>Progress:</label>
                            <label>&nbsp;{tasks.progress}%</label></Col>
                            <Col>{ (tasks.priority === "High")
                            ?<Container as="div" style={{backgroundColor:"darkred",color:"white"}}><h5>{tasks.priority}</h5></Container>
                            :(tasks.priority !== "Low")
                            ?<Container as="div" style={{backgroundColor:"darkorange",color:"white"}}><h5>{tasks.priority}</h5></Container>
                            :<Container as="div" style={{backgroundColor:"darkgreen",color:"white"}}><h5>{tasks.priority}</h5></Container>}
                            </Col>
                            </Row>
                        </Card.Body>
                        }
                        </Card>
                   
                    </div>
                ))
            }
            
        </Container>
)
}

export default TasksList