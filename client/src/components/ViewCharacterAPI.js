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
            <div className='link'><Link to="/characters">Return to API Characters</Link></div>
            <div className='link'><Link to="/dashboard">Return to Dashboard</Link></div>
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