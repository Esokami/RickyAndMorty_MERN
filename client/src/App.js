import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/characters" element={<CharacterList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
