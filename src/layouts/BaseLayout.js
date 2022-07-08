import { Navbar } from 'components/Navbar';
import Footer from 'components/Footer'

export default function BaseLayout({ children }) {
    return (
        <div style={ {minHeight: '100vh', maxWidth: '100vw' } } className='w-full bg-qf-white grid grid-rows-[auto_minmax(0,_1fr)_auto]'>
            <Navbar/>
            <div className='row-start-2'>
                { children }
            </div>
            <Footer/>
        </div>
    );
}
