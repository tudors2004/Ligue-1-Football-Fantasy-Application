import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoL1 from '../../images/ligue12025.webp';
import './index.scss';
import mainImage from '../../images/main.jpg';

const Home = () => {
    const [text, setText] = useState('Welcome to');
    const [subText, setSubText] = useState('Your ultimate Ligue 1 experience. Fantasy league, players stats, live scores, and more!');
    const [fadeClass, setFadeClass] = useState('fade-in');

    useEffect(() => {
        const switchText = () => {
            setFadeClass('fade-out');
            setTimeout(() => {
                setText((prevText) => (prevText === 'Welcome to' ? 'Bienvenue sur' : 'Welcome to'));
                setSubText((prevSubText) =>
                    prevSubText ===
                    'Your ultimate Ligue 1 experience. Fantasy league, players stats, live scores, and more!'
                        ? 'Votre meilleure expérience de la Ligue 1.Fantasy League, statistiques des joueurs, scores en direct et plus encore !'
                        : 'Your ultimate Ligue 1 experience. Fantasy league, players stats, live scores, and more!'
                );
                setFadeClass('fade-in');
            }, 1000);
        };

        const intervalId = setInterval(switchText, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="container home-page"
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
                        <img src={LogoL1} alt="Ligue 1 Football Fantasy" />
                        <br />
                        <span className={fadeClass}>{text}</span>
                        <br />
                        Ligue 1 FootballFantasy App
                    </h1>
                    <h2 className={fadeClass}>{subText}</h2>
                    <Link to="/teams" className="flat-button">START</Link>
                </div>
            </div>
            <Loader type="pacman" active />
        </>
    );
}

export default Home;