import './Footer.css';const Footer = () => {
  const year = new Date();

  return (
    <div className='footer'>
      <p>
        Copyright © {year.getFullYear()} , Sanjay Kumar - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
