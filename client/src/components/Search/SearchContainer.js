import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import FormControl from './FormControl.js';
import './Search.css';

function SearchContainer(props) {
   
        return (
            <Jumbotron fluid className="search-cont">
            <Container>
                <FormControl 
                handleInputChange = {props.handleInputChange}
                handleFormSubmit = {props.handleFormSubmit}
                />
            </Container>
            </Jumbotron>
        )
}

export default SearchContainer;