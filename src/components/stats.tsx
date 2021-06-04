import React from 'react';
import { Nav } from 'react-bootstrap';
import variables from '../interfaces/interfaces';



function Stats(props: variables) {
    return (
        <div className="d-flex">

            <Nav className="justify-content-left">
                <Nav.Item>
                    <Nav.Link href="/home">Linkedin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">PREMIUM: TAK</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">TOKENY: 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>Bilety:
                    <Nav className="justify-content-left">
                        <Nav.Item>
                            <Nav.Link eventKey="tickets1">{props.firstTicket}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tickets2">0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tickets3">0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="tickets4">0</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    
                </Nav.Item>
                <Nav.Item>
                            <Nav.Link eventKey="budget">{props.budget}</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/home">WYLOGUJ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">ARGON</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Stats;