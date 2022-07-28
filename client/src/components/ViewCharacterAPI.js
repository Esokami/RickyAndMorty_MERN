import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';

const ViewCharacterAPI = (props) => {
    const [character, setCharacter] = useState([]);
    const [origin, setOrigin] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/' + id)
            .then((res) => {
                console.log(res.data);
                setCharacter(res.data);
                setOrigin(res.data.origin);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className='background-apichar'>
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
                <li className="nav-item">
                    <a className="nav-link" href="/characters">Return To API Characters</a>
                </li>
                </ul>  
            </div>
            </nav>
            <div className='wrapper4'>    
            <img src={character.image}></img> 
                        <h3>{character.name} </h3>
                        <h5>{character.status} </h5>
                        <h5>Species: {character.species}</h5>
                        <h5>Gender: {character.gender}</h5>
                        <h5>{origin.name}</h5>
            </div>
        </div>
    )
}

export default ViewCharacterAPI;