import './App.css';
import AdvancedStatistics from './components/AdvancedStatistics';
import Hero from './components/Hero';
import UrlShortSection from './components/UrlShortSection';
import BoostLinks from './components/BoostLinks';
import Footer from './components/Footer';
import NavLogo from './components/NavLogo';

function App() {
  
  return (
   <div id="container">
      <NavLogo />
      <Hero />
      <UrlShortSection />
      <AdvancedStatistics />
      <BoostLinks />
      <Footer />
   </div>
  )
}

export default App;