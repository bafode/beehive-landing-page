import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import TermsAndConditions from './pages/Conditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './components/Contact';

function App() {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home />} />
            </Route>
                <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
    );
}

export default App;
