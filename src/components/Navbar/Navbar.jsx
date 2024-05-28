import './Navbar.css';import logo from '../../assets/logo.png';
import ArrowIcon from '../../assets/arrow_icon.png';
import {useContext} from 'react';
import {CoinContext} from '../../context/coinContext';
const Navbar = () => {
  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({name: 'usd', symbol: '$'});
        break;
      case 'eur':
        setCurrency({name: 'eur', symbol: '€'});
        break;
      case 'inr':
        setCurrency({name: 'inr', symbol: '₹'});
        break;

      default:
        setCurrency({name: 'usd', symbol: '$'});
        break;
    }
  };

  return (
    <div className='navbar'>
      <img
        src={logo}
        alt='Logo pic'
        className='logo'
      />

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value='inr'>INR</option>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
        </select>
        <button>
          Sign Up{' '}
          <img
            src={ArrowIcon}
            alt=''
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
