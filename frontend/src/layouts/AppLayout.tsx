import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
    return (
        <>
            <Header />
            <Hero />
            <main className='container py-10 mx-auto'>
                <Outlet />
            </main>

        </>
    )
}
