import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoggedInHeader from './admin/header/LoggedInHeader'
import ProductEdit from './admin/product/ProductEdit'
import ProductList from './admin/product/ProductList'
import ProductCreate from './admin/product/ProductCreate'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import AdminLogin from './admin/login/AdminLogin'
import LogInHeader from './admin/header/LogInHeader'

function App() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate('/admin/login')
  }
  const isLogggedIn = localStorage.getItem("token") != null;
  return (
    <>
      {isLogggedIn &&  <LoggedInHeader logOut={ logOut }/>}
      {(!isLogggedIn) &&  <LogInHeader/>}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin" element={<ProductList/>} />
          <Route path="/admin/list" element={<ProductList/>} />
          <Route path="/admin/create" element={<ProductCreate/>} />
          <Route path="/admin/edit/:id" element={<ProductEdit/>} />
        </Routes>

    </>
  )
}

export default App
