import React, {useState, useEffect} from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './css/global.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
// import Home from './pages/Home'
import Search from './pages/Search'
import ViewProject from './pages/ViewProject'

const LOCAL_STORAGE_KEY = "mermisi.database";

export default function App() {

	const [database, setDatabase] = useState([])

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storedData) setDatabase(storedData);
	}, [])

	useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(database))
    }, [database])

	useEffect(() => {
        fetch(`${window.location.origin}${process.env.PUBLIC_URL}/db.json`)
        .then(res => res.json())
        .then((result) => { 
			setDatabase(prevData => result); 
		})
		
	}, [])
  
  return (
		<>
			<div id="exceptFooter"> 
        <div className="content">
				  <BrowserRouter basename = {process.env.PUBLIC_URL}>
            <Navbar/>
            <Routes>
              <Route exact path="/"            element={<Search database={database}/>}/>
              <Route exact path="/about"       element={<About/>}/>
							<Route exact path="/home"        element={<Search database={database}/>}/>
							<Route exact path="/search"      element={<Search database={database}/>}/>
							<Route exact path="/project/:id" element={<ViewProject/>}/>
            </Routes>
				  </BrowserRouter>
        </div>
			</div>
			<Footer />
		</>
	)
}
