import logoFooter from ".././Assets/logo-branca.svg"
import "../Styles/Components/footer.css"
import facebookIcon from ".././Assets/facebook.svg"
import linkedinIcon from ".././Assets/linkedin.svg"
import instagramIcon from ".././Assets/instagram.svg"

const Footer = ()=>{
    return(
        <>
                <div className="footer1">
                    <div  className="logo-footer">
                        <img src={logoFooter} alt="logo move consumo"/>
                        <div id="name-footer">
                                <h2 className="name-f">Move</h2>
                                <h2 className="name-f">Consumo</h2>                        
                        </div>
                    </div>
                    <div >
                        <ul className="links-footer">
                            <li>
                                <a href="" target="blank">Contato</a>
                            </li>
                            <li>
                                <a href="">Cadastro</a>
                            </li>
                            <li>
                                <a href="http://www.ufrpe.br/" target="blank">UFRPE</a>
                            </li>
                        </ul>
                    </div>
                    <div className="redes-icons">
                        <ul>
                            <li>
                                <a href="http:/www.facebook.com/moveconsumoufrpe" target="blank">
                                    <img src={facebookIcon} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.instagram.com/moveconsumo" target="blank">
                                    <img src={instagramIcon} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="http:/www.linkedin.com/company/moveconsumo" target="blank">
                                    <img src={linkedinIcon} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>      
                <div className="footer-copyright">
                <p>Desenvolvido por Jéssica Rayanne Guerra. COPYRIGHT 2020</p>
                </div>        
        </>
    )
}

export default Footer