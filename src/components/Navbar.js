import img_logo from "../img/logo.png"
import { Link } from "react-scroll"

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
          <img className="p-2" src={img_logo} style={{width:"10rem",borderRadius:"50%"}} alt="https://www.google.ca/search?sxsrf=AB5stBgPANRurseMLEB3u8ZdH8JcaNiEJQ:1690706864854&q=logo&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjngeXwhbaAAxW6rYkEHYG9CfkQ0pQJegQIBxAB&biw=2560&bih=1283&dpr=1#imgrc=QtfTwk0fvs1jxM"/>
            {/* <a className="navbar-brand" href="#">HLY Spices</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="product-group"
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    offset={-10}
                    duration={1000} className="nav-link btn btn-lg btn-outline-danger">Nos produits </Link>
                    &nbsp;

                <Link to="contact-form"
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    offset={-10}
                    duration={500} className="nav-link btn btn-lg btn-outline-danger">Contact </Link>
                
                <p className="display-5 ms-5" style={{fontFamily:"Trangerine,cursive",opacity:"0.5"}}><em>La passion du gout!</em></p>
              </div>
            </div>
          </div>
        </nav>
    )
}