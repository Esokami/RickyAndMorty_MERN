import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UpdateCharacter = (props) => {
    const {id} = useParams();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [likes, setLikes] = useState("");

    const [characterList, setCharacterList] = useState([]);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/character/' + id)
            .then((res) => {
                console.log(res);
                setImage(res.data.image);
                setName(res.data.name);
                setStatus(res.data.status);
                setSpecies(res.data.species);
                setGender(res.data.gender);
                setLikes(res.data.likes);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

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

        axios.put('http://localhost:8000/api/character/' + id, {
            image,
            name,
            status,
            species,
            gender,
            likes
        })

            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/dashboard");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err);
            })
    }


    return (
        <div className='background-new'>
            <div className='wrapper'>
                <Form onSubmit={(onSubmitHandler)}>
                    <Form.Group>
                        <div>
                            <h4>Required</h4>
                            <div>
                                <Form.Label>Image:</Form.Label>
                                <Form.Select value={image} onChange={(e) => setImage(e.target.value)}>
                                    <option value="none" selected>--Select an image--</option>
                                    {
                                        characterList.map((char, index) => {
                                            return (
                                                <option>{char.image}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label>Character:</Form.Label>
                                <Form.Select value={name} onChange={(e) => setName(e.target.value)}>
                                <option value="none" selected>--Select a Character--</option>
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
                                <Form.Label>Status:</Form.Label>
                                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="none" selected>--Select a Status--</option>
                                    <option>Alive</option>
                                    <option>Dead</option>
                                    <option>Unknown</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label>Species:</Form.Label>
                                <Form.Select value={species} onChange={(e) => setSpecies(e.target.value)}>
                                    <option value="none" selected>--Select Species--</option>
                                    <option>Alien</option>
                                    <option>Human</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label>Gender:</Form.Label>
                                <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="none" selected>--Select Gender--</option>
                                    <option>Female</option>
                                    <option>Male</option>
                                    <option>Unknown</option>
                                </Form.Select>
                            </div>
                            <div>
                                <Form.Label>Likes:</Form.Label>
                                <Form.Control type="number" value={likes} onChange={(e) => setLikes(e.target.value)}></Form.Control>
                            </div>
                        </div>
                    </Form.Group>
                    <Button className='m-2' variant="success" type="submit">Update</Button>
                    <Button className='m-2' variant="warning" onClick={() => navigate("/dashboard")}>Cancel</Button>
                </Form>
            </div>
        </div>
    )
}

export default UpdateCharacter;