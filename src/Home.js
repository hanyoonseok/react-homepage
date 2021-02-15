import HeroSection from './HeroSection'
import Cards from './Cards'
import Footer from './Footer'
import Scroll from './Scroll'
import Slider from './Slider'
import './style.css'
import {
    ScrollingProvider,
    useScrollSection,
    Section,
  } from 'react-scroll-section';

const StaticMenu = () => {
    const homeSection = useScrollSection('home');
    const aboutSection = useScrollSection('about');
   function aa(){
    homeSection.onClick(true);
    homeSection.selected=true;
   }
    return (
      <ul>
        <li onClick={aa}>
          Home
        </li>
        <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
          About
        </li>
      </ul>
    );
};
function Home(){
    return(
        <ScrollingProvider>
            <StaticMenu/>
            <HeroSection />
            <Section id="home"><Cards /></Section>
            <Section id="about"><Footer/></Section>
            <Slider/>
            <Scroll/>
        </ScrollingProvider>
    );
}


export default Home;