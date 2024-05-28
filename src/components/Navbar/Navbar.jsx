import './Navbar.css';
import logo from '../../assets/logo.png';
import ArrowIcon from '../../assets/arrow_icon.png';
const Navbar = () => {
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
        <select>
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
