import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import ViewCharacter from './components/ViewCharacter';
import Register from './components/Register';
import Login from './components/Login';
import AddCharacter from './components/AddCharacter';
import UpdateUser from './components/UpdateUser';
import UpdateCharacter from './components/UpdateCharacter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/characters/add" element={<AddCharacter/>}/>
          <Route path="/characters" element={<CharacterList/>}/>
          <Route path="/characters/:id" element={<ViewCharacter/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/api/user/:id" element={<UpdateUser/>}/>
          <Route path="/api/character/:id" element={<UpdateCharacter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
