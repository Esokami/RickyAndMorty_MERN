import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FcSearch } from "react-icons/fc";

const SearchBar = (props) => {
    const [characters, setCharacters] = useState([]);
    const [filterData, setFilterData] = useState([]);


    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                setCharacters(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        const newFilter = characters.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        });

        if (searchWord === "") {
            setFilterData([]);
        }
        else {
            setFilterData(newFilter);
        }
    }

    return (
        <div>
            <FcSearch/> <input class="bardetails" type="text"  placeholder='Search' onChange={(handleFilter)}></input>
                <div>
                    {
                        filterData.length !== 0 && (
                            <div>
                            {
                                filterData.slice(0, 15).map((character, index) => {
                                    return <Link to={`/characters/${character.id}`} target="_blank" style={{textDecoration: 'none'}}>
                                        <p>{character.name}</p>
                                    </Link>
                                })
                            }
                            </div>
                        )
                    }
                </div>
        </div>
    )
}

export default SearchBar;