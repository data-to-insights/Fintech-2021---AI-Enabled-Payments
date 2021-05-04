import { Container } from "@material-ui/core";
import "../style/Footer.css";
import mockup from "../image/mockup.png";
const Footer = () => {
  return (
    <footer className="app__footer">
      <Container maxWidth="lg">
        <div className="footer">
          <div className="footer__top">
            <div className="left">
              <h1>UniqID</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                optio sit nam, vitae quidem deleniti neque ducimus. Ad nesciunt
                ipsam, quos vitae accusantium sit. Temporibus, doloremque? Omnis
                non unde nobis?
              </p>
            </div>
            <div className="center">
              <h1>About</h1>
              <h1>Copyright</h1>
              <h1>Team</h1>
              <h1>Privacy Policy</h1>
            </div>
            <div className="right">
              <img src={mockup} alt="Mockup" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
