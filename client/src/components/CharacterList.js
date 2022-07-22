import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
// import ReactPaginate from 'react-paginate';

const CharacterList = (props) => {
    const [characters, setCharacters] = useState([]);

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
        <div>
            {characters.map((pokemon, index)=>{
                return (
                <div key={index}>
                    <ul>
                        <li> {pokemon.name}</li>
                        <li><img src={pokemon.image}></img></li>
                    </ul>
                </div>
                )
            })}
        </div>
    )
}

export default CharacterList;