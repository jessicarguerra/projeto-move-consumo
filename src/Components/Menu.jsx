import frameMenu from "../Assets/frame-menu.svg"
import "../Styles/Components/menu.css"


const Menu = ()=>{
    return(
        <> 
            <div className="menu">
                <img src={frameMenu} alt="" className="frame-menu"/>
                <div className="pages-menu">
                    <a href="" id="home-menu">
                        <h2>Home</h2>
                    </a>
                    <a href="" >
                        <h2> Cadastro</h2>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Menu