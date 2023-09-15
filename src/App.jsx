
import './App.css'
import Header from './components/header/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/products/Products'
import ProductAdd from './components/products/ProductAdd'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Products />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
