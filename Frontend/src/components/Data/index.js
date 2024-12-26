import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.scss"

const Data = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const teamValue = params.get('team');

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
        } else {
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
        <div className = "table-container">
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
                    <th>Penalties Scored</th>
                    <th>Yellow Cards</th>
                    <th>Red Cards</th>
                    <th>Expected Goals (xG)</th>
                    <th>Expected Assists (xAG)</th>
                </tr>
                </thead>
                <tbody>
                {playerData.map(player => (
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
        </div>
    );

};

export default Data;