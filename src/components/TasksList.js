import React,{useState} from "react";
import {BiCaretDown,BiCaretRight} from "react-icons/bi"
import {Button,ProgressBar} from "react-bootstrap";
import AddTask from "./AddTask"


function TasksList (taskList) {
    const [toggleTaskList, setToggleTaskList] = useState(null);
    const [toggleAddTaskForm, setToggleAddTaskForm] = useState(false);
    const toggle = (i) => {
        if(toggleTaskList === i){
            return setToggleTaskList(null)
        }
        setToggleTaskList(i);
    }
    
    return(
                <>
                <div className={toggleAddTaskForm? 'itemAddTask':'itemTask'} style={{height:78.24,alignItems:'center'}}>
                        <Button style={{width:420,marginTop:6}} onClick={()=> setToggleAddTaskForm(!toggleAddTaskForm)}><h5>Add Task</h5></Button>
                </div>
                {
                toggleAddTaskForm &&
                <AddTask />
                }
                {taskList.taskList.map((task,i)=>(
                    <div key={i} className='itemTask'>
                        <div className='titleTask' >
                            <h5>{task.title}</h5>
                            <Button onClick={()=>toggle(i)}>
                                {toggleTaskList===i?<BiCaretDown/>:<BiCaretRight/>}
                            </Button>
                        </div>
                        <div className={toggleTaskList===i?'content show':'content'} style={{marginTop:10}}>
                        <div style={{display: "flex",justifyContent: "space-between"}}>
                            <h6>Start Date:&nbsp;
                            {task.startdate}</h6>
                            <h6>End Date:&nbsp;
                            {task.enddate}</h6>
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

