import React, {useEffect} from 'react';
import Header from './components/header';
import Body from './components/Body';
import Footer from './components/Footer';
import ScrollToggle from './components/ScrollToggle';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div data-aos="fade-up">
      <Header />
      <Body />
      <Footer/>
      {/* Other components can go here */}
    </div>
  );
};

export default App;
