import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import {Link, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import ReactPaginate from 'react-paginate';

const Dashboard = (props) => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/character')
            .then((res) => {
                setCharacters(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const deleteCharacter = (characterId) => {
        axios.delete('http://localhost:8000/api/character/' + characterId, {
            withCredentials: true,
        })
            .then((res) => {
                const newCharacterList = characters.filter((character, index) => character._id !== characterId);
                setCharacters(newCharacterList);
            })
            .catch((err) => {
                console.log(err);
            })
    }



    return (
        <div className="background-dash">
            <div className="bar"><SearchBar/></div>
            <div className='link'>
            <Link to="/characters">View Characters from API</Link>
            </div>
            <div className='link'>
            <Link to="/characters/add">Create a character</Link>
            </div>
            <div>
                {characters.map((character, index)=>{
                    return (
                        <div className= "grids">
                            <div className="wrapper2" key={index}>
                                <img src={character.image} onClick={() => navigate(`/characters/${character._id}`)}></img> 
                                <h3>{character.name} </h3>
                                <h5>{character.status} </h5>
                                <h5>Species: {character.species}</h5>
                                <h5>Gender: {character.gender}</h5>
                                <h5>Likes: {character.likes}</h5>
                                <Button variant="danger" onClick={() => {deleteCharacter(character._id)}}>Delete</Button>
                                <button className="btn btn-warning" onClick={() => navigate(`/updateCharacter/${character._id}`)}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard;