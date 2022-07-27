import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
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
        <div class="background-char">
<<<<<<< Updated upstream
            <div class="bar"><SearchBar/></div>
=======
            <div class="bar"><SearchBarAPI/></div>
            <div className='link'><Link to="/dashboard">Return to Dashboard</Link></div>
>>>>>>> Stashed changes
            <div>
                {characters.map((character, index)=>{
                    return (
                <div class= "grids">
                    <div class="wrapper2" key={index}>
                        <img src={character.image}></img> 
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