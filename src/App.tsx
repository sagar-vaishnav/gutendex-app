import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:genre" element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
