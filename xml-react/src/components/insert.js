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
            <div className="container mt-5">
            <h3>Agregar nueva pregunta</h3>
            <form method="post">
                <input type="text" name="nombre" id="nombre" placeholder="Ingrese el nombre de la pregunta" className="form-control mb-2"/>
                <input type="text" name="pregunta" id="pregunta" placeholder="Ingrese la pregunta" className="form-control mb-2"/>
                <input type="text" name="respuesta" id="respuesta" placeholder="Ingrese la respuesta" className="form-control mb-2"/>
                <input type="text" name="drag1" id="drag1" placeholder="Drag option 1" className="form-control mb-2"/>
                <input type="text" name="drag2" id="drag2" placeholder="Drag option 2" className="form-control mb-2"/>
                <input type="text" name="drag3" id="drag3" placeholder="Drag option 3" className="form-control mb-2"/>
                <input type="text" name="drag4" id="drag4" placeholder="Drag option 4" className="form-control mb-2"/>
                <input type="text" name="tar1" id="tar1" placeholder="Target option 1" className="form-control mb-2"/>
                <input type="text" name="tar2" id="tar2" placeholder="Target option 2" className="form-control mb-2"/>
                <input type="text" name="tar3" id="tar3" placeholder="Target option 3" className="form-control mb-2"/>
                <input type="text" name="tar4" id="tar4" placeholder="Target option 4" className="form-control mb-2"/>
                <div className="d-grid gap-2">
                    <button type="submit">Agregar</button>
                </div>
            </form>
            <Button variant="secondary" onClick={() => window.location.href = "/Crud_React/"}>
                    Regresar
            </Button>
            </div>
        );
    }
}

export default Insert;

