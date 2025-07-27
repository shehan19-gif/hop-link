import './Hero.css';
import rabbit from '../assets/rabbit-chain.svg';

const Hero = () => {
  return (
    <div id="hero">
        <div className="hero-details">
            <h2>More than just shorter links</h2>
            <p>Build your brand's recognition.</p>
            <div><a href="#shorten-sec">Get Started</a></div>
        </div>
        <div className="hero-img">
            <img src={rabbit} alt="illustration of a rabbit" />
        </div>
    </div>
  )
}

export default Hero;