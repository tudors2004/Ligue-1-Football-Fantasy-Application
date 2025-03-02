import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllData from "./components/AllData";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Position from "./components/Position";
import Nation from "./components/Nation";
import Layout from "./components/Layout";
import Search from "./components/Search";
import TeamData from "./components/TeamData";
import Leaderboards from "./components/Leaderboard";


function App() {
    useEffect(() => {
        document.title = 'Ligue 1 Football Fantasy App';
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="teams" element={<Teams />} />
                    <Route path="nation" element={<Nation />} />
                    <Route path="position" element={<Position />} />
                    <Route path="search" element={<Search />} />
                    <Route path="player-data" element={<TeamData />} />
                    <Route path="data" element={<AllData />} />
                    <Route path="leaderboards" element={<Leaderboards />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;