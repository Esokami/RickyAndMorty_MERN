import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';

const ViewCharacter = (props) => {
    const [character, setCharacter] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/character/' + id)
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
        <div className='background-apichar'>
            <div className='link'><Link to="/dashboard">Return to Dashboard</Link></div>
            <div className='wrapper4'>    
            <img src={character.image}></img> 
                        <h3>{character.name} </h3>
                        <h5>{character.status} </h5>
                        <h5>Species: {character.species}</h5>
                        <h5>Gender: {character.gender}</h5>
            </div>
        </div>
        </div>
    )
}

export default ViewCharacter;