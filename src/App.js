import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import TermCondition from "./pages/TermCondition";
import TermsAndConditions from './pages/Conditions';

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
            <Route path="term-condition" element={<TermCondition />} />
            <Route path="conditions" element={<TermsAndConditions />} />
        </Routes>
    );
}

export default App;
