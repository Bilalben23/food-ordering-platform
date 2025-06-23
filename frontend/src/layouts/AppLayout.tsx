import Header from '@/components/Header';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
    return (
        <>
            <Header />
            <main className='container py-10 mx-auto'>
                <Outlet />
            </main>

        </>
    )
}
