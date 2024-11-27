import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddCustomer from './users/AddCustomer';
import ViewCustomer from './users/ViewCustomer';
import EditCustomer from './users/EditCustomer';
import { Service } from './pages/Service';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="/addcustomer" element={<AddCustomer/>}></Route>
          <Route exact path="/editcustomer/:id" element={<EditCustomer/>}></Route>
          <Route exact path="/viewcustomer/:id" element={<ViewCustomer/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/services" element={<Service/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          
         </Routes> 
      </Router>
    </div>
  );
}

export default App;
