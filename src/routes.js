import Home from './Pages/Home';
import Offers from './Pages/Offers'
import { Routes, Route } from 'react-router-dom'
import { ClientProvider } from './Context/ClientContext';

function MainRoutes() {
    return (
        <ClientProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ofertas" element={<Offers />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </ClientProvider>
    );
}

export default MainRoutes;