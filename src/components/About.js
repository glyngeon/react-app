import UserContext from "../utils/userContext";
import UserClass from "./UserClass";
// import User from "./User";
import React from "react";

class About extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="about-container">
                <div>
                loggedInUser: 
                
                <UserContext.Consumer>
                    {({loggedInUser})=> (
                        <h1>{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                </div>
                <h1>About Page</h1>
                {/* <User name={"Gaurav (Function)"}  location={"Bangalore (funcation)"} /> */}
                
                <UserClass name={"Gaurav (Class) "} location={"Bangalore (Class)"} />
            </div>
        )
    }
}

export default About;