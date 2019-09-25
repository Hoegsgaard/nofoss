import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

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


export default App;
