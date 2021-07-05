import React, { useState } from "react";

import db from "../db.json"

const ShowAndHide = () => {
    // const professions = db.attendees.id;
    const professions = [1,2,3,4,5];
    const [myProfession, setMyProfession] = useState("");

    return (
        <>


            <div  style={{width:100,height:100,backgroundColor:'red'}}>
                <div  style={{width:100,height:20,marginBottom:3,justifyItems:'center'}}>
                    <h2>Select the profession you like the most</h2>
                    <br />
                    <div style={{backgroundColor:'green'}}  >
                        {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                style={{backgroundColor:'lightgreen',border:2,borderColor:'black'}}
                                onClick={() => setMyProfession(profession)}
                            >
                                
                            </button>
                        ))}
                    </div>
                </div>

                <div  style={{width:100,height:20,marginBottom:3,justifyItems:'center'}}>
                    <p>{myProfession}</p>

                    <p>
                        {myProfession === "1" && (
                            <h1>{db.attendees.id}</h1>
                        )}
                        {myProfession === "2" && (
                            <h2>{db.attendees.name}</h2>
                        )}
                        {myProfession === "3" && (
                            <h3>{db.attendees.id}</h3>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
};


export default ShowAndHide;