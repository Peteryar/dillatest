import React from "react";
import ModeLayout from "../components/ModeLayout";
import "./styles.css";

function Main(){
    return(
        <ModeLayout mode="Main" items={["Entry1", "Entry2", "Entry3"]}/>
    )
}

export default Main;