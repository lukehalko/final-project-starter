import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {Button, Container, Row, Col} from "react-bootstrap";

function App(): JSX.Element {
    const [counter,setCounter] = useState<number>(0);
    const [displayCounter,setDisplayCounter] = useState<boolean>(true);
    return (
        <Container>
            <div className="App">
                <Row>
                    <p>Welcome to the app</p>

                    <Col>
                        <Button onClick={() => {
                            let theCounter = counter;
                            setCounter(++theCounter);
                        }}>Incrementer</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => {
                            let theCounter = counter;
                            setCounter(--theCounter);
                        }}>Decremeneter</Button>
                    </Col>
                    <Button onClick={() =>{
                        setCounter(0);
                    }}>ZERO!!!</Button>
                    <Col>
                        <Button onClick={() => {
                            setDisplayCounter(!displayCounter);
                        }}>Delete counter</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default App;
