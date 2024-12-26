import './index.scss';
import SearchAppBar from '../Bar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return(
        <div className = "App">
            <SearchAppBar />
            <div className = "page">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout