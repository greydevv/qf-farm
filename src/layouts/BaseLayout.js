import { Navbar } from 'components/Navbar';
import Footer from 'components/Footer'

export default function BaseLayout({ children }) {
        // <div className='min-h-screen max-w-screen w-full bg-qf-white grid grid-rows-[5rem_minmax(0,_1fr)_auto]'>
    return (
        <div className='min-h-screen max-w-screen w-full bg-qf-white grid grid-rows-[auto_minmax(0,_1fr)_auto]'>
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
