import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';

const ViewCharacterAPI = (props) => {
    const [character, setCharacter] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/' + id)
            .then((res) => {
                console.log(res.data);
                setCharacter(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <div>
                <h2>{character.name}</h2>
            </div>
            <div>
                <ul style={{listStyleType: "none"}}>
                        <li> 
                            <img src={character.image}></img> <br/>
                            {character.status} <br/>
                            {character.species} <br/>
                            {character.gender} <br/>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default ViewCharacterAPI;