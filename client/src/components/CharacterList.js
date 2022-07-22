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
        <div>
            <SearchBar/>
            <div>
                {characters.map((character, index)=>{
                    return (
                    <div key={index}>
                        <ul style={{listStyleType: "none"}}>
                            <li> 
                                {character.name} <br/>
                                <img src={character.image}></img> <br/>
                                {character.status} <br/>
                                {character.species} <br/>
                                {character.gender} <br/>
                                {character.origin.name}
                                </li>
                        </ul>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CharacterList;