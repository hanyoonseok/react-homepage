import HeroSection from './HeroSection'
import Cards from './Cards'
import Footer from './Footer'
import Scroll from './Scroll'
import './style.css'
import {
    ScrollingProvider,
    useScrollSection,
    Section,
  } from 'react-scroll-section';
  const StaticMenu = () => {
    const homeSection = useScrollSection('home');
    const aboutSection = useScrollSection('about');
   
    return (
      <ul>
        <li onClick={homeSection.onClick} selected={homeSection.selected}>
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
            <Scroll/>
        </ScrollingProvider>
    );
}
// function Home(){
//     return(
//         <>
//             <HeroSection />
//             <Cards />
//             <Footer/>
//             <Scroll/>
//         </>
//     );
// }

export default Home;