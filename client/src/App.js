import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Jumbotron } from 'reactstrap';



import Home from './components/Home';
import Error from './components/Error';
import Contact from './components/Contact';
import AppNavbar from './components/AppNavbar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Jumbotro from './components/Jumbotro';
import '../node_modules/font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Jumbotro />
      <Container>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route component={Error} />
          </Switch>
          <Contact />
        </Container>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
