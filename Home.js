import React from "react";
import Nav from "./Nav";
import lambo from "../images/lambo.jpg";
function Home(props) 
{
    return(
        <div>
            <Nav/>
            <div>
                <img alt="ddd" src={lambo}/>
                <h1>{props.username}</h1>
            </div>
        </div>
    );
}
export default Home;