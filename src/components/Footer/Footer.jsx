import './Footer.css';const Footer = () => {
  const year = new Date();

  return (
    <div className='footer'>
      <p>
        Copyright © {year.getFullYear()} , Dhanushkumar - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
