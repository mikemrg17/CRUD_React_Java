import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.css"
import Info from "./components/info";
import Edit from "./components/edit";
import Insert from "./components/insert";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/Crud_React/">
                    <Home />
                </Route>
                <Route exact path="/Crud_React/info">
                    <Info />
                </Route>
                <Route exact path="/Crud_React/edit">
                    <Edit />
                </Route>
                <Route exact path="/Crud_React/insert">
                    <Insert />
                </Route>
                <Route path="*" render={() => <h1>Recurso no encontrado</h1>}/>
            </Switch>
        </div>
    );
}
export default App;