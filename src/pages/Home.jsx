import React, { useEffect, useState } from 'react';
import Hero from "../components/Hero";
import About from '../components/About';
import Contact from '../components/Contact';
import Loading from "react-fullscreen-loading";
import Comprendre from '../components/Comprendre';
import Pricing from '../components/Princing';



export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
     
    useEffect(() => {
       const timer = setTimeout(() => {
         setIsLoading(false);
       }, 3000);
       return () => clearTimeout(timer);
     }, []);


    if (isLoading) {
        return (
            <Loading
                loading={isLoading}
                background="rgb(94 23 235 / 75%)"
                loaderColor="rgb(255 175 53)"
            />
        );
    }

    return (<>
        <Hero/>
        <About />
        <Comprendre />
        <Pricing/>
        <Contact/>
    </>);
}
