import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Context} from "../../../core/Context";

const Header = ({children}) => {
    const {connect, walletState, setWalletState} = useContext(Context);
    return (
        <>
            <Navbar expand="lg" style={{backgroundColor: "#8d54a1"}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {walletState === "" && <Nav.Link
                                onClick={() => {
                                    connect();
                                }}
                                style={{fontSize: "20px", color: "white"}}
                            >
                                Авторизация
                            </Nav.Link>}
                            {walletState !== "" && <Nav.Link
                                onClick={() => {
                                    setWalletState("");
                                }}
                                style={{fontSize: "20px", color: "white"}}
                            >
                                Выйти
                            </Nav.Link>}
                            <Nav.Link style={{fontSize: "20px", color: "white"}}>Личный кабинет</Nav.Link>
                            <Nav.Link style={{fontSize: "20px", color: "white"}}>Торговая площадка</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </>
    );
};

export default Header;
