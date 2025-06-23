import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './lib/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
