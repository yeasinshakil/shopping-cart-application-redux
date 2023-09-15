
import './App.css'
import Header from './components/header/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Products />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>

        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
