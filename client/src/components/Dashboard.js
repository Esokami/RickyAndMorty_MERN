import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import {Link, useNavigate} from 'react-router-dom';
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
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard;