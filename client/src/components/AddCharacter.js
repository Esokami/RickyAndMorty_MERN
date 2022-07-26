import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddCharacter = (props) => {
    const {characters, setCharacters} = props;
    const [card, setCard] = useState("");
    const [likes, setLikes] = useState("");

    const [characterList, setCharacterList] = useState([]);
    const [filterData, setFilterData] = useState([]);

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    //Getting Characters from API
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((res) => {
                setCharacterList(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/character', {
            card,
            likes
        })

            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/dashboard");
                setCharacters([...characters, res.data]);
            })
            .catch((err) => {
                console.log(err);
                setErrors(err);
            })
    }


    return (
        <Container>
            <div>
                <Form onSubmit={(onSubmitHandler)}>
                    <Form.Group>
                        <div>
                            <h4>Required</h4>
                            <div>
                                <Form.Label>Character:</Form.Label>
                                <Form.Select id="card" value={card} onChange={(e) => setCard(e.target.value)}>
                                    {
                                        characterList.map((char, index) => {
                                            return (
                                                <option>{char.name}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label>Likes:</Form.Label>
                                <Form.Control type="number" onChange={(e) => setLikes(e.target.value)}></Form.Control>
                            </div>
                        </div>
                    </Form.Group>
                    <Button className='m-2' variant="success" type="submit">Create</Button>
                    <Button className='m-2' variant="warning" onClick={() => navigate("/dashboard")}>Cancel</Button>
                </Form>
            </div>
        </Container>
    )
}

export default AddCharacter;