import '../scss/estilo.scss'
import Enfermeira from '../assets/enfermeira.svg'

function Planos() {
    return (
        <>
            <div className="container">
                <div className="tab" onClick="toggleContent('content-1')">Plano de Saúde para idosos</div>
                <div className="content" id="content-1">
                <ul>
                    <li>Cobertura Especializada</li>
                    <li>Acessibilidade e Suporte</li>
                    <li>Custo-Benefício</li>
                </ul>
                <ul>
                    <li>Prevent Senior</li>
                </ul>
                </div>
                <div className="tab" onClick="toggleContent('content-2')">Plano de Saúde para crianças</div>
                <div className="content" id="content-2">
                    <ul>
                        <li>Cobertura Pediátrica</li>
                        <li>Especialidades Inclusas</li>
                        <li>Rede Credenciada</li>
                    </ul>
                    <ul>
                        <li>Amil</li>
                    </ul>
                </div>
                <div className="tab" onClick="toggleContent('content-3')">Plano de Saúde para gestantes</div>
                <div className="content" id="content-3">
                <ul>
                    <li>Cobertura de Pré-natal</li>
                    <li>Parto e Pós-parto</li>
                    <li>Carência</li>
                </ul>
                <ul>
                    <li>Plano de saúde Alice</li>
                </ul>
                </div>
                <div className="tab" onClick="toggleContent('content-4')">Plano de Saúde para familia</div>
                <div className="content" id="content-4">
                <ul>
                    <li>Cobertura Familiar</li>
                    <li>Flexibilidade</li>
                    <li>Benefícios Adicionais</li>
                </ul>
                <ul>
                    <li>Sami Saúde</li>
                </ul>
                </div>
                <div className="tab" onClick="toggleContent('content-5')">Planos de Saúde Individuais</div>
                <div className="content" id="content-5">
                <ul>
                    <li>Personalização</li>
                    <li>Coparticipação</li>
                </ul>
                <ul>
                    <li>Plano de saúde individual NotreLife - Notre Dame</li>
                </ul>
                </div>
            
                <div className="tab" onClick="toggleContent('content-6')">Planos de Saúde para pessoas PCD</div>
                <div className="content" id="content-6">
                <ul>
                    <li>Cobertura Especializada</li>
                    <li>Acessibilidade</li>
                    <li>Reajustes</li>
                </ul>
                <ul>
                    <li>SulAmérica Saúde</li>
                </ul>
            </div>
            <div>
                <img src={Enfermeira} alt="Enfermeira" id="nurse-image" style="margin-top: 50px;"/>
                <div id="tooltip"></div>
            </div>
            </div>
        </>
    )
}

export default Planos