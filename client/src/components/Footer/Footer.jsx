import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <p className="footer-copyright">Copyright © 2021</p>
        <img
          className="small-logo"
          src={require('../../assets/images/C-logo-300x300-removebg-preview.png').default}
          alt="overc logo" />
      </div>
    </footer>
  )
}

export default Footer;