import './App.css';
import { Fragment } from 'react';
import LoginForm from './LoginForm';
import MainContent from './MainContent';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Container from './ContainerRouter';
import SideNav from './SideNav';
import ListBimar from './listBimar';
import SabtBimar from './sabtBimar';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function App() {
  return (

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Container />} />
      <Route path="LoginForm" element={<LoginForm />} />
      <Route path="MainContent" element={<MainContent />} />
      <Route path="ListBimar" element={<ListBimar />} />
      <Route path="SabtBimar" element={<SabtBimar />} />
      {/* <Route path="blogs" element={<Blogs />} /> */}
</Routes>
</BrowserRouter>
 

 
 
  );
}

export default App;
