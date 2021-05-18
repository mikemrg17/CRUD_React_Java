import React from "react";
import { Button, Container, Form} from "react-bootstrap";


class Insert extends React.Component {

    state = {
        pregunta: "",
        respuesta: "",
        drags: [],
        targets: []
    }

    render() {
        return(
            <div>
            <h3>Agregar nueva pregunta</h3>
            <Form method="post" action="http://localhost:8080/Crud_React/InsertarPregunta">
                <input type="text" name="nombre" id="nombre" placeholder="Ingrese el nombre de la pregunta">Nombre de la pregunta:</input>
                <input type="text" name="pregunta" id="pregunta" placeholder="Ingrese la pregunta">Pregunta:</input>
                <input type="text" name="respuesta" id="respuesta" placeholder="Ingrese la respuesta">Respuesta:</input>
                <input type="text" name="drag1" id="drag1" placeholder="Drag option 1">Drag option 1:</input>
                <input type="text" name="drag2" id="drag2" placeholder="Drag option 2">Drag option 2:</input>
                <input type="text" name="drag3" id="drag3" placeholder="Drag option 3">Drag option 3:</input>
                <input type="text" name="drag4" id="drag4" placeholder="Drag option 4">Drag option 4:</input>
                <input type="text" name="tar1" id="tar1" placeholder="Target option 1">Target option 1:</input>
                <input type="text" name="tar2" id="tar2" placeholder="Target option 2">Target option 2:</input>
                <input type="text" name="tar3" id="tar3" placeholder="Target option 3">Target option 3:</input>
                <input type="text" name="tar4" id="tar4" placeholder="Target option 4">Target option 4:</input>
                <input type="submit" value="registrar"></input>
            </Form>
            <Button variant="secondary" onClick={() => window.location.href = "/Crud_React/"}>
                    Regresar
            </Button>
            </div>
        );
    }
}

export default Insert;

