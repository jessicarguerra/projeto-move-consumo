import iconHeader from "../Assets/header.png"
import Menu from "../Components/Menu"
import Equipe from "../Components/Equipe"
import Footer from "../Components/Footer"
import "../Styles/Pages/home.css"
import frameProject from "../Assets/frame-projeto.svg"
import logoBranca from "../Assets/logo-branca.svg"
import logoAzul from "../Assets/logo-azul.svg"
import painelAtelier from "../Assets/atelier.png"
import painelJessc from "../Assets/jess-c.png"
import painelBibia from "../Assets/bibia.png"


const Home = ()=>{
    return(
        <>
            <Menu/>
            <div>
                <div className="header">
                    <img src={iconHeader} alt="" className="icon-header"/>
                </div>
                <div className="project">
                    
                    <div className="project-name">
                        <img src={logoBranca} alt=""/>
                        <div>
                            <h1 className="title-project">MOVE</h1>
                            <h1>CONSUMO</h1>
                        </div>
                    </div>
                    <p className="p1-project">
                    O Move Consumo é um espaço de colaboração e aprendizado para apoiar e incentivar os estudantes da UFRPE na promoção do seu negócio e desenvolvimento de habilidades e conhecimentos que ajudem no seu percurso profissional.
                    </p>
                     <p className="p1-project">
                    O Move Consumo é direcionado para atender os estudantes da UFRPE, mas também todos
                    os interessados que queiram consumir dos empreendimentos ou aprender com as informações que compartilharemos.
                    </p>
                    <div className="açoes">
                        <img src={frameProject} alt="" className="img-project"/>
                        <ol className="p2-project"> Nossas ações
                            <li className="">Ajudar a promover o negócio online na nossa rede e outras mídias online.</li>
                            <li className="">Indicar informações e ideias que estimulem o aprendizado para todos os estudantes, que tenham negócios ou não.</li>
                            <li className="p">Criar conteúdos e promover formações que atendam as necessidades e contribuam com o aprendizado dos estudantes. </li>
                        </ol>
                    </div>
                </div>

                <div className="people">
                    <div className="people-name">
                        <img src={logoAzul} alt=""/>
                        <h1 className="title-people">PESSOAS QUE MOVEM</h1>
                    </div>
                    
                    <div className="people1">
                        <img src={painelAtelier} alt="" className="painel"/>
                        <div  className="painel-texto">
                            <h2>Atelier Unicórnio</h2>
                            <br/><br/>
                            <p>A loja online criada pela estudante Karina Figueiredo trabalha com acessórios, confecção de ecobags, almofadas e camisas personalizadas pintadas à mão. As peças são feitas exclusivamente sob encomenda, não contando com pronta entrega, e o pagamento poder ser feito por depósito bancário ou cartão de crédito/débito.</p>
                            <br/>
                            <p>As entregas podem ser feitas pessoalmente em algumas localidades e terminais integrados, como a UFRPE, ou através dos Correios para outros estados. </p>
                        </div>
                    </div>
                    
                    <div className="people1">
                        <div  className="painel-texto">
                            <h2>Jess Cosméticos</h2>
                            <br/><br/>
                            <p>A loja surgiu durante a pandemia, com os salões de beleza fechados, a empreendedora buscou alternativas que pudessem lhe dar um resultado de salão em casa e com um bom custo-benefício. Deu tão certo e recebeu tantos elogios que decidiu ajudar outras pessoas a conseguirem esse resultado.</p>
                            <br/>
                            <p>Atualmente, a Jess Cosméticos vende diversos produtos para cabelo como shampoo, condicionador, máscara de hidratação, spray antifrizz e outros cosméticos.</p>

                        </div>
                        <img src={painelJessc} alt="" className="painel"/>
                    </div>

                    <div className="people1">
                        <img src={painelBibia} alt="" className="painel"/>
                        <div className="painel-texto">
                            <h2>Bibia Brigaderia</h2>
                            <br/><br/>
                            <p>É uma loja virtual de doces, na qual a graduanda em Ciência do Consumo, Beatriz Matias, começou com a venda de brigadeiros na escola, aos 10 anos de idade. Hoje, além dos brigadeiros, a brigaderia trabalha com bolos, brownies, balas de brigadeiro e outros produtos.</p>
                            <br/>
                            <p>“Trabalho com alta qualidade e preço justo, alcançando a todos os públicos e ao paladar deles. Tudo feito com muito amor e paixão pelo que faço.” </p>
                        </div>
                    </div>

                </div>
            </div>
            <Equipe/>
            <Footer/>

        </>
    )
}

export default Home