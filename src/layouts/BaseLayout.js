import { Navbar } from 'components/Navbar';
import Footer from 'components/Footer'
import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
        {/* <div className='min-h-screen relative'> */}
    return (
        <div className='min-h-screen max-w-screen w-full bg-qf-white grid grid-rows-[auto_minmax(0,_1fr)]'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
