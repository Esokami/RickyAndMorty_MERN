import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBarAPI from './SearchBarAPI';
import {Link, useNavigate} from 'react-router-dom';
// import ReactPaginate from 'react-paginate';

const CharacterList = (props) => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                setCharacters(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div class="background-char">
            
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <a className="navbar-brand">RickyAndMorty</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/dashboard">Return To Dashboard</a>
                </li>
                </ul>  
            </div>
            </nav>
            <div class="bar"><SearchBarAPI/></div>
            <div>
                {characters.map((character, index)=>{
                    return (
                <div class= "grids">
                    <div class="wrapper2" key={index}>
                        <img src={character.image} onClick={() => navigate(`/characters/api/${character.id}`)}></img> 
                        <h3>{character.name} </h3>
                        <h5>{character.status} </h5>
                        <h5>Species: {character.species}</h5>
                        <h5>Gender: {character.gender}</h5>
                        <h5>Home: {character.origin.name}</h5>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CharacterList;