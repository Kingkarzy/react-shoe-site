import '../App.css';
import {Button} from './Button';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
        <video src="/videos/vid-1.mp4" autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <p> What are you waiting for?</p>
        <div className='header-btns'>
            <Button className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
                Get Started
            </Button>
            <Button className='btns' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
                Watch Trailer <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default Header