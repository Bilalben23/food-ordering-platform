import AppLayout from '@/layouts/AppLayout';
import AuthCallbackPage from '@/pages/AuthCallbackPage';
import HomePage from '@/pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />} >
                <Route index element={<HomePage />} />
            </Route>
            <Route path='/auth-callback' element={<AuthCallbackPage />} />
            <Route path='/user-profile' element={<p>User Profile</p>} />
            <Route path='*' element={<p>Page Not Found</p>} />
        </Routes>
    )
}


export default AppRoutes;