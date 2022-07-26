import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import ViewCharacter from './components/ViewCharacter';
import Register from './components/Register';
import Login from './components/Login';
import AddCharacter from './components/AddCharacter';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
