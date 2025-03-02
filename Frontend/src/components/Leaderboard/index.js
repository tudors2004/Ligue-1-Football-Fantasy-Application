import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import "./index.scss";
import leaderboardData from "../../data/leaderboards.json";

const Leaderboards = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredLeaderboards, setFilteredLeaderboards] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        const filtered = leaderboardData.leaderboards.filter(leaderboard =>
            leaderboard.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredLeaderboards(filtered);
    }, [searchQuery]);

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const renderLeaderboard = (leaderboards) => {
        return (
            <div className="images-container">
                {leaderboards.map((leaderboard, idx) => (
                    <div key={idx} className="image-box">
                        <img src={leaderboard.cover} alt="leaderboards" className="teams-image" />
                        <div className="content">
                            <p className="title">{leaderboard.title}</p>
                            <Link className="btn" to={`/data?leaderboard=${encodeURIComponent(leaderboard.search)}`}>
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    };
    return (
        <>
            <div className="container leaderboard-page">
                <h1 className="leaderboard-title">
                    Leaderboards
                </h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for leaderboards../Rechercher des classements.."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>{renderLeaderboard(filteredLeaderboards)}</div>
            </div>
            <Loader type="pacman" active />
        </>
    );
}


export default Leaderboards;
