import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import About from "../containers/About/About";
import Contacts from "../containers/Contacts/Contacts";
import Home from "../containers/Home/Home";
import FullPost from "../containers/FullPost/FullPost";
import CreateAndEditPost from "../containers/CreateAndEditPost/CreateAndEditPost";
import {Container} from "@mui/material";
import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Routes>
          <Route path='/' element={(
            <Container>
              <Home/>
            </Container>
          )}/>
          <Route path='/posts' element={(
            <Container>
              <Home/>
            </Container>
          )}/>
          <Route path='/CreateAndEditPost' element={<CreateAndEditPost/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/posts/:id' element={<FullPost/>}/>
          <Route path='/CreateAndEditPost/:id' element={<CreateAndEditPost/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
