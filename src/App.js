import React, {useState, useEffect} from "react";
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';

import './css/global.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
import Home from './pages/Home'
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
        fetch("http://Lrapava.github.io/client/db.json")
        .then(res => res.json())
        .then((result) => { 
			setDatabase(prevData => result); 
		})
		
	}, [])
  
  return (
		<>
			<div id="exceptFooter"> 
        <div className="content">
				  <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route exact path="/client/"            element={<Search database={database}/>}/>
              <Route exact path="/client/about"       element={<About/>}/>
							<Route exact path="/client/home"        element={<Search database={database}/>}/>
							<Route exact path="/client/search"      element={<Search database={database}/>}/>
							<Route exact path="/client/project/:id" element={<ViewProject/>}/>
            </Routes>
				  </BrowserRouter>
        </div>
			</div>
			<Footer />
		</>
	)
}
