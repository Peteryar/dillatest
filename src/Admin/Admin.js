import ModeLayout from "../components/ModeLayout";

function Admin (){
    return(
        <ModeLayout mode="Admin" items={["AdminEntry1", "AdminEntry2", "AdminEntry3"]}/>
    )
}

export default Admin;