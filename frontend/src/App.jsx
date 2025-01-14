import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Registration from './Components/Registration/Registration';
import GetInfo from './Components/GetInfo/GetInfo';
import AllUsers from './Components/AllUsers';

function App() {
    return (    
        <Router>
            <div className="App">
                <nav className="bg-gray-800 p-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/registration" className="text-white">Registration</Link>
                        </li>
                        <li>
                            <Link to="/get-info" className="text-white">Get Info</Link>
                        </li>
                        <li>
                            <Link to="/all-users" className="text-white">All Users</Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/get-info" element={<GetInfo />} />
                        <Route path="/all-users" element={<AllUsers />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;