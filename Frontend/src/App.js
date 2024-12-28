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
import NationData from "./components/NationData";
import PositionData from "./components/PositionData";

function App() {
    useEffect(() => {
        document.title = 'Ligue 1 Football Fantasy App';
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="data" element={<AllData />} />
                    <Route path="teams" element={<Teams />} />
                    <Route path="nation" element={<Nation />} />
                    <Route path="position" element={<Position />} />
                    <Route path="nation-data" element={<NationData />} />
                    <Route path="position-data" element={<PositionData />} />
                    <Route path="search" element={<Search />} />
                    <Route path="player-data" element={<TeamData />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;