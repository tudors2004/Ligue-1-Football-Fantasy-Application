import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoL1 from '../../images/ligue12025.webp';
import './index.scss';
import mainImage from '../../images/main.jpg';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return(
        <>
            <div className = "container home-page"
                 style={{
                backgroundImage: `url(${mainImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <div className="text-zone">
                    <h1>
                        <img src={LogoL1} alt = "Ligue 1 Football Fantasy" />
                        <br />
                        Welcome to / Bienvenue sur
                        <br />
                        Ligue 1 FootballFantasy App
                    </h1>
                    <h2>Your ultimate Ligue 1 experience. Fantasy league, players stats, live scores, and more!</h2>
                    <Link to="/teams" className="flat-button">START</Link>
                </div>
            </div>
            <Loader type="pacman" active/>
        </>
    )
}

export default Home
