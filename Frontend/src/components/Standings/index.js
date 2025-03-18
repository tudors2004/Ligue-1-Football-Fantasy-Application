// import React, { useState, useEffect } from "react";
// import axios from "axios";
//
// const Ligue1Standings = () => {
//     const [standings, setStandings] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         axios.get("http://localhost:8080/api/standings")
//             .then(response => {
//                 const data = response.data.response[0].league.standings[0];
//                 setStandings(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);
//
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;
//
//     return (
//         <div>
//             Classement Ligue 1
//         </div>
//     );
// };
//
// export default Ligue1Standings;
