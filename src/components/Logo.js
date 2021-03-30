import React from "react";

function Logo (){
    return(
        <div>
             <p style={style}>Logo</p>
        </div>
    )
}
//few styles to using them in an object container to save few keystrokes, 
//else would have use a separate stylesheet file.
const style ={
    padding:"20px 50px",
    backgroundColor:"gray"
}
export default Logo;