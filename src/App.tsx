import React, {Fragment} from 'react';
import './App.css';
import Header from './components/home/Header';
import Hero from "./components/home/Hero";
import Experience from "./components/home/Experience";

function App() {
    return <Fragment>
        <Header />
        <Hero />
        <Experience />
    </Fragment>
        ;
}

export default App;
