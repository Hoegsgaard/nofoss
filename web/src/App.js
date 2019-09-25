import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import withRouter from "react-router/modules/withRouter";

function NofossLogo() {
    return (
        <img src="%PUBLIC_URL%/nofosslogo.svg" className="Logo" alt="NoFoss Logo"/>
    )
}

function App() {
    return (
        <div>
            <container>
                <div className="App">
                    <NofossLogo/>
                    <Switch>
                        <Route path={"/about/:text"} component={About}/>
                        <Route path={"/about"} render={()=><h1>About</h1>}/>
                        <Route exact path={"/"} render={()=><h1>NoFoss</h1>}/>
                        <Route render={()=><h1>404</h1>}/>
                    </Switch>
                </div>
            </container>
            <container>
                <div>
                    <Button variant="primary" size="lg">
                        Search
                    </Button>
                </div>
            </container>
        </div>
    );
}

const About = withRouter(({history,match})=>{
    console.log(history);
    console.log(match);
    return (
        <div>
            <h1>About {match.params.text}</h1>
            <Button variant="primary" size="lg" onClick={()=>history.push("/")}>
                History
            </Button>
        </div>
    )
});


export default App;
