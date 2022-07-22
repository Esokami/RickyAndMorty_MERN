import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import ViewCharacter from './components/ViewCharacter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/characters" element={<CharacterList/>}/>
          <Route path="/characters/:id" element={<ViewCharacter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
