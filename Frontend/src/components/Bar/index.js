import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import PeopleIcon from '@mui/icons-material/People';
import FlagIcon from '@mui/icons-material/Flag';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import LogoSubtitle from '../../images/logo text.png';
import './index.scss';

const HoverableLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffea06',
    fontSize: '16px',
    fontWeight: 'bold',
    position: 'relative',
    textDecoration: 'none',
    height: '40px',
    width: '40px',
    '& .hover-text': {
        opacity: 0,
        visibility: 'hidden',
        position: 'absolute',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
    },
    '&:hover .hover-text': {
        opacity: 1,
        visibility: 'visible',
    },
    '& .icon': {
        opacity: 1,
        transition: 'opacity 0.3s ease',
    },
    '&:hover .icon': {
        opacity: 0,
    },
}));

export default function SearchAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#5c0508' }}>
                <Toolbar>
                    <Link to="/" className="logo">
                        <img src={LogoSubtitle} alt="Ligue 1 Football Fantasy App" className="sub-logo-img" />
                    </Link>
                    <Box className="nav-links" sx={{ display: 'flex', justifyContent: 'space-evenly', flexGrow: 1 }}>
                        <HoverableLink to="/teams">
                            <PeopleIcon className="icon" style={{ fontSize: 28 }} />
                            <span className="hover-text">Teams</span>
                        </HoverableLink>
                        <HoverableLink to="/nation">
                            <FlagIcon className="icon" style={{ fontSize: 28 }} />
                            <span className="hover-text">Nations</span>
                        </HoverableLink>
                        <HoverableLink to="/position">
                            <SportsSoccerIcon className="icon" style={{ fontSize: 28 }} />
                            <span className="hover-text">Positions</span>
                        </HoverableLink>
                        <HoverableLink to="/search">
                            <SearchIcon className="icon" style={{ fontSize: 28 }} />
                            <span className="hover-text">Search</span>
                        </HoverableLink>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}