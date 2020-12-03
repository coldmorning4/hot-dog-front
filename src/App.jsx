import {Link, BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/Main";
import './App.css';
import React from "react";



function App() {


    return (

        <section className="App">
            <div className='app'>

                <main>

                    <div>
                        <Router>
                            <Link to="/"></Link>
                            <Route exact path="/" component={Main} />
                        </Router>
                    </div>
                </main>
            </div>
        </section>
    );
};


export default App

