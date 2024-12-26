import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.scss";

const TeamData = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [playerData, setPlayerData] = useState([]);
    const [playersToShow, setPlayersToShow] = useState(10);


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const teamValue = params.get('team');
        const nationValue = params.get('nation');
        const positionValue = params.get('position');
        const nameValue = params.get('name');

        if (teamValue) {
            axios.get(`http://localhost:8080/api/players?team=${encodeURIComponent(teamValue)}`)
                .then(response => {
                    setPlayerData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        } else if (nationValue){
            axios.get(`http://localhost:8080/api/players?nation=${encodeURIComponent(nationValue)}`)
                .then(response => {
                    setPlayerData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        } else if (positionValue){
            axios.get(`http://localhost:8080/api/players?position=${encodeURIComponent(positionValue)}`)
                .then(response => {
                    setPlayerData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        } else if (nameValue){
            axios.get(`http://localhost:8080/api/players?name=${encodeURIComponent(nameValue)}`)
                .then(response => {
                    setPlayerData(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }
        else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }


    return (
        <div className={`fade-in ${loading ? 'loading' : ''}`}>
            <div className="table-container">
                <h1 className = "page-title">
                    Player Data
                </h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Nationality</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>Matches Played</th>
                        <th>Starts</th>
                        <th>Minutes Played</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>G.A</th>
                        <th>Penalties Kicked</th>
                        <th>Yellow Cards</th>
                        <th>Red Cards</th>
                        <th>Expected Goals (xG)</th>
                        <th>Expected Assists (xAG)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {playerData.slice(0, playersToShow).map(player => (
                        <tr key={`${player.name}-${player.team}`}>
                            <td>{player.name}</td>
                            <td>{player.team}</td>
                            <td>{player.nation}</td>
                            <td>{player.position}</td>
                            <td>{player.age}</td>
                            <td>{player.mp}</td>
                            <td>{player.starts}</td>
                            <td>{player.mins}</td>
                            <td>{player.goals}</td>
                            <td>{player.assists}</td>
                            <td>{player.ga}</td>
                            <td>{player.pk}</td>
                            <td>{player.ycrd}</td>
                            <td>{player.rcrd}</td>
                            <td>{player.xg}</td>
                            <td>{player.xa}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {playersToShow < playerData.length && (
                    <button onClick={() => setPlayersToShow(playersToShow + 10)} style={{ marginTop: '10px', marginBottom: '10px' }} className={`show-more-button ${loading ? 'loading' : ''}`}>
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
};

export default TeamData;