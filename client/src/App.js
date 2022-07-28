import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import ViewCharacter from './components/ViewCharacter';
import Register from './components/Register';
import Login from './components/Login';
import AddCharacter from './components/AddCharacter';
import UpdateUser from './components/UpdateUser';
import Dashboard from './components/Dashboard';
import ViewCharacterAPI from './components/ViewCharacterAPI';
import UpdateCharacter from './components/UpdateCharacter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/characters/add" element={<AddCharacter/>}/>
          <Route path="/characters/:id" element={<ViewCharacter/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/updateUser" element={<UpdateUser/>}/>
          <Route path="/updateCharacter/:id" element={<UpdateCharacter/>}/>
          <Route path="/characters" element={<CharacterList/>}/>
          <Route path="/characters/api/:id" element={<ViewCharacterAPI/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
