import logo from '../.././logo.svg';
import './Header.css';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
  
    return (
      <header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {description} React concepts to learn.
          </p>
        </header>
    )
  }