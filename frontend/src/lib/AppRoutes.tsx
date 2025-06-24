import AppLayout from '@/layouts/AppLayout';
import HomePage from '@/pages/HomePage';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />} >
                <Route index element={<HomePage />} />
                <Route path='/user-profile' element={<p>User Profile</p>} />
                <Route path='*' element={<p>Not Found Page</p>} />
            </Route>
        </Routes>
    )
}


export default AppRoutes;