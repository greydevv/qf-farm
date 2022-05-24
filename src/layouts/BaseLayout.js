import { Navbar } from 'components/Navbar';
import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
    return (
        <div className='main'>
            <Navbar />
            <Outlet />
        </div>
    );
}
