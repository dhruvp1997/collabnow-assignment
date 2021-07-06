import React from "react"

function HostsList (hostsList){
    
    return(
        <div className='wrapper'>
        <div className='accordion'>
            {
            hostsList.hostsList.map((hosts,i)=>(
                
                <div key={i} className='item'>
                    <div className='title' >
                        <h2>{hosts.name}</h2>                        
                    </div>
               </div>
            ))}
        </div>
    </div>
    )
}

export default HostsList