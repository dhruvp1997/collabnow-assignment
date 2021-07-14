import React,{useState} from "react";
import {Button,ProgressBar} from "react-bootstrap";
import AddTask from "./AddTask"
import {useLocation} from 'react-router-dom';

function TasksList ({selfInfo,flag}) {
    let location = useLocation();
    const [toggleAddTaskForm, setToggleAddTaskForm] = useState(false);

    const taskList = selfInfo.tasks;
    const attendeeId = selfInfo.id;
    return(
                <>
                <div className={location.pathname ===`/${flag}/${attendeeId}`?'content show':location.pathname === `/host`?'content show':'content'
            } style={{marginTop:10}}>
                <div className={toggleAddTaskForm? 'itemAddTask':'itemTask'} style={{height:78.24,alignItems:'center'}}>
                        <Button style={{width:420,marginTop:6}} onClick={()=> setToggleAddTaskForm(!toggleAddTaskForm)}><h5>Add Task</h5></Button>
                </div>
                {
                toggleAddTaskForm &&
                <AddTask />
                }
                </div>
                {taskList.map((task,i)=>(
                    <div key={i} className='itemTask'>
                        <div className='titleTask' >
                            <h5>{task.title}</h5>
                            
                        </div>
                        <div className='content show' style={{marginTop:10}}>
                        <div style={{display: "flex",justifyContent: "space-between"}}>
                            <h6>Start Date:&nbsp;
                            {task.startDate}</h6>
                            <h6>End Date:&nbsp;
                            {task.endDate}</h6>
                        </div>
                        <div style={{display: "flex",justifyContent: "space-between"}}>
                            <ProgressBar style={{width:150,height:30}} now={task.progress} label={`${task.progress}%`} />
                            { 
                                (task.priority === "High")
                                ?<div className='priority' style={{backgroundColor:"#e34444"}}>
                                    <label>{task.priority}</label>
                                </div>
                                :(task.priority !== "Low")
                                ?<div style={{backgroundColor:"#e38e44",color:"white",width:150}}>
                                    <label>{task.priority}</label>
                                </div>
                                :<div style={{backgroundColor:"#44e369",color:"white",width:150}}>
                                    <label>{task.priority}</label>
                                </div>
                            }
                        </div>
                        </div>
                    </div>
                ))}
            </>
)
}

export default TasksList

