import "./Navbar.css";
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/felipe-silva-9a5950242';
    const whatsappUrl = 'https://wa.me/5511988137647?text=Ol%C3%A1+Felipe%21';
    const instagramUrl = 'https://www.instagram.com/felkjz/';
  
    return (
      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Sobre</h6>
            <p className="text-justify">
              Olá, Sou Felipe esse e um pesqueno projeto meu, onde os objetivos são 
              aprender mais da linguagem React.js utilizando ferramentas como o node
              npm. Gosto de programação considero isso um hobbie, tambem possuo 
              bastante conhecimentos em HTML5, CSS, MySQL, PHP e um pouco de Java e C.
              Espero que goste.          
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Aprendizados</h6>
            <ul className="footer-links">
              <li>HTML</li>
              <li>UI Design e UX Design</li>
              <li>PHP</li>
              <li>CSS</li>
              <li>MySQL</li>
              <li>Adoble Photoshop e Adoble Illustrator</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Redes Sociais</h6>
            <ul className="footer-links">
              <li><SocialIcon style={{ width:'40px', height:'40px', top: '1rem' }} className="icones" url={linkedinUrl} /></li>
              <li><SocialIcon style={{ width:'40px', height:'40px', top: '1.3rem' }} className="icones" network='whatsapp' url={whatsappUrl} /></li>
              <li><SocialIcon style={{ width:'40px', height:'40px', top: '1.6rem' }} className="icones" network='instagram' url={instagramUrl} /></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </footer>
    );
  };
  
  export default Footer;