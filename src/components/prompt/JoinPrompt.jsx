import "./joinprompt.css"
import JumpPrompt from "../../image/jumpPrompt.png"

import React from "react";

import Button from "antd/lib/button"


export default function JoinPrompt(){
  
  
  const join =(event)=>{
    console.log("Join in the group jump")
}
  
    return (
        <div>
            <img className="JumpPrompt" src={JumpPrompt} alt="JumpPrompt" />
              <p className="buttons">
                <Button type="primary" onClick={join}>Yes</Button>
              </p>    
            
        </div>  
          );
        
}

/*
export default function Prompt() {
    return (
        <img className="JumpPrompt" src={JumpPrompt} alt="JumpPrompt" />

    )
}
*/