import "../Styles/Components/equipe.css"
import eder from "../Assets/eder.jpg"
import nath from "../Assets/nath.jpg"
import leticia from "../Assets/leticia.jpg"
import ruby from "../Assets/ruby.jpg"
import jessica from "../Assets/jessica.jpg"
import lucas from "../Assets/lucas.jpg"
import logoBranca from "../Assets/logo-branca.svg"

const Equipe = ()=>{
    return(
        <>
            <div className="team"> 
                <div className="team-logo">
                    <img src={logoBranca} alt=""/>
                    <h1 className="title-team">NOSSA EQUIPE</h1>
                </div>
                <div className="cards-team">
                    <div className="card">
                        <img src={eder} alt="a" className="img-team"/>
                        <h2 className="name-team">Eder Lira Leão</h2>
                        <h4>Professor no Departamento de CCO</h4>
                        <h4>Economista e Sociólogo</h4>
                        <p className="funçao-team">
                            Idealizador do projeto, responsável por coordenar as mentorias, criar conexões, comunicação com os palestrantes e etc.
                        </p>
                    </div>
                    <div className="card">
                        <img src={nath} alt="a" className="img-team"/>
                        <h2 className="name-team">Nathália Cavalcanti</h2>
                        <h4>Estudante de Ciências do Consumo</h4>
                        <h4>Tecnica em ALimentos</h4>
                        <p className="funçao-team">
                            Responsável pela produção e criação de material visual para publicação nas redes sociais e atualização de feed e perfil do Instagram. Realização e acompanhamento de mentorias e desenvolvimento e análise de pesquisa de mercado e tendências.
                        </p>
                    </div>
                    <div className="card">
                        <img src={leticia} alt="a" className="img-team"/>
                        <h2 className="name-team">Maria Letícia</h2>
                        <h4>Estudante de Ciências do Consumo</h4>
                        <h4>UX Designer em formação</h4>
                        <p className="funçao-team">
                            Responsável pela produção de textos, formulários e outros conteúdos. Realização e acompanhamento de mentorias com os empreendimentos, UX Designer em formação. Gestão de redes sociais. Desenvolvimento e análise de pesquisa de mercado e tendências.
                        </p>
                    </div>
                    <div className="card">
                        <img src={ruby} alt="a" className="img-team"/>
                        <h2 className="name-team">Rubyane Borba</h2>
                        <h4>Estudante de Ciências do Consumo</h4>
                        <h4>Designer de Interiores</h4>
                        <p className="funçao-team">
                            Responsável pela elaboração das propostas visuais relacionadas aos negócios e ao projeto, curadoria de conteúdo informativo e desenvolvimento de metodologias aplicadas ao projeto junto aos demais membros da equipe. Elaboração de conteúdos.
                        </p>
                    </div>
                    <div className="card">
                        <img src={jessica} alt="a" className="img-team"/>
                        <h2 className="name-team">Jéssica Rayanne</h2>
                        <h4>Estudante de Ciências do Consumo</h4>
                        <h4>Desenvolvedora Front-End</h4>
                        <p className="funçao-team">
                            Responsável pela pesquisa de dados para o desenvolvimento de conteúdo nas redes sociais, interação com os empreendedores, participação juntamente com os demais integrantes na ideação e aplicação das mentorias.
                        </p>
                    </div>
                    <div className="card">
                        <img src={lucas} alt="a" className="img-team"/>
                        <h2 className="name-team">Lucas Rayan Guerra</h2>
                        <h4>Técnico em Desenvolvimento de Sistemas</h4>
                        <h4> Desenvolvedor Full-Stack</h4>
                        <p className="funçao-team">
                            Responsavél pela parte operacional/ti do projeto.
                        </p>
                    </div>
                </div>
            </div>    
        
        </>
    )
}

export default Equipe