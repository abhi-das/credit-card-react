

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import AdminContainer from './containers/adminContainer';
import EmployeeContainer from './containers/employeeContainer';
import { CardTypes } from './generated/api/creditCard';
import Checkout from './pages/checkout';
import Landing from './pages/landing';
import './styles/App.scss';

const App = () => {


  // Checkout Props
  const checkoutDefaults = {
    cardTypes: CardTypes.VISA
  }

  return <section className="App">
    <BrowserRouter >
      <Header></Header>
      {/* <Suspense fallback={<p>Loadind...</p>}> */}
        <Routes>
          <Route path="/" element={ <Landing /> }></Route>
          <Route path="admin" element={ <AdminContainer pageTitle='Admin Page' /> }></Route>
          <Route path="employee" element={ <EmployeeContainer pageTitle='Employee Page'/> }></Route>
          <Route path="checkout" element={ <Checkout {...checkoutDefaults} /> }></Route>
        </Routes>
      {/* </Suspense> */}
      <Footer customClasses="fixed-bottom"></Footer>
    </BrowserRouter >
  </section>
}
export default App;
