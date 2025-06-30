import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './lib/AppRoutes';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';

export default function App() {
  return (
    <Router>
      <Auth0ProviderWithNavigate>
        <AppRoutes />
      </Auth0ProviderWithNavigate>
    </Router>
  )
}
