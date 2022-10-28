import { FooterLink } from "../../styles/Footer.style";

const Footer = () => (
  <>
       <p className="text-center">
      Copyright © {(new Date().getFullYear())} Plant.
      </p>
    <FooterLink to="/">
      <p>Gift Center</p>
    </FooterLink>
    <FooterLink to="/">
      <p>FAQ</p>
    </FooterLink>
    <FooterLink to="/">
      <p>Terms of Use</p>
    </FooterLink>
    <FooterLink to="/">
      <p>Privacy Policy</p>
    </FooterLink>
    <FooterLink to="/">
      <p>Buying Guides</p>
    </FooterLink>
    <FooterLink to="/AboutUs">
      <p>About Us</p>
    </FooterLink>
  </>
)

export default Footer;