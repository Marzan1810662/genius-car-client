import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>}>
        </Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService />
          </RequireAuth>}>
        </Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageServices />
          </RequireAuth>}>
        </Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Order />
          </RequireAuth>}>
        </Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
