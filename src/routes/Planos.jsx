import { useState } from 'react';
import '../scss/estilo.scss'
import Enfermeira from '../assets/enfermeira.svg'

function Planos() {
    const [activeTab, setActiveTab] = useState(null);
    const [tooltip, setTooltip] = useState({ display: false, x: 0, y: 0 });

    const toggleContent = (id) => {
        if (activeTab === id) {
            setActiveTab(null);
        } else {
            setActiveTab(id);
        }
    }

    const handleImageClick = (event) => {
        setTooltip({
            display: !tooltip.display,
            x: event.pageX,
            y: event.pageY
        });
    }

    return (
        <>
            <div className="container">
               <div className="tab" onClick={() => toggleContent('content-1')}>Plano de Saúde para idosos</div>
                <div className="content" style={{ display: activeTab === 'content-1' ? 'block' : 'none' }} id="content-1">
                <ul>
                    <li>Cobertura Especializada</li>
                    <li>Acessibilidade e Suporte</li>
                    <li>Custo-Benefício</li>
                </ul>
                <ul>
                    <li>Prevent Senior</li>
                </ul>
                </div>
                <div className="tab" onClick={() => toggleContent('content-2')}>Plano de Saúde para idosos</div>
                <div className="content" style={{ display: activeTab === 'content-2' ? 'block' : 'none' }} id="content-2">
                    <ul>
                        <li>Cobertura Pediátrica</li>
                        <li>Especialidades Inclusas</li>
                        <li>Rede Credenciada</li>
                    </ul>
                    <ul>
                        <li>Amil</li>
                    </ul>
                </div>
                <div className="tab" onClick={() => toggleContent('content-3')}>Plano de Saúde para idosos</div>
                <div className="content" style={{ display: activeTab === 'content-3' ? 'block' : 'none' }} id="content-3">
                <ul>
                    <li>Cobertura de Pré-natal</li>
                    <li>Parto e Pós-parto</li>
                    <li>Carência</li>
                </ul>
                <ul>
                    <li>Plano de saúde Alice</li>
                </ul>
                </div>
                <div className="tab" onClick={() => toggleContent('content-4')}>Plano de Saúde para idosos</div>
                <div className="content" style={{ display: activeTab === 'content-4' ? 'block' : 'none' }} id="content-4">
                <ul>
                    <li>Cobertura Familiar</li>
                    <li>Flexibilidade</li>
                    <li>Benefícios Adicionais</li>
                </ul>
                <ul>
                    <li>Sami Saúde</li>
                </ul>
                </div>
                <div className="tab" onClick={() => toggleContent('content-5')}>Plano de Saúde para idosos</div>
                <div className="content" style={{ display: activeTab === 'content-5' ? 'block' : 'none' }} id="content-5">
                <ul>
                    <li>Personalização</li>
                    <li>Coparticipação</li>
                </ul>
                <ul>
                    <li>Plano de saúde individual NotreLife - Notre Dame</li>
                </ul>
                </div>
                <div className="tab" onClick={() => toggleContent('content-6')}>Plano de Saúde para idosos</div>
                <div className="content" style={{ display: activeTab === 'content-6' ? 'block' : 'none' }} id="content-6">
                <ul>
                    <li>Cobertura Especializada</li>
                    <li>Acessibilidade</li>
                    <li>Reajustes</li>
                </ul>
                <ul>
                    <li>SulAmérica Saúde</li>
                </ul>
            </div>
                <img src={Enfermeira} alt="Enfermeira" id="nurse-image" onClick={handleImageClick}/>
                <div id="tooltip" style={{ display: tooltip.display ? 'block' : 'none', top: tooltip.y, left: tooltip.x }}>
                    <strong>Plano de saúde: por que você precisa de um?</strong><br/>
                    Um plano de saúde é essencial para garantir acesso a cuidados médicos de qualidade, cobrindo consultas, exames, procedimentos e emergências, proporcionando segurança financeira diante de despesas médicas inesperadas. Além disso, oferece uma rede de profissionais e hospitais credenciados, reduzindo o tempo de espera por atendimento e possibilitando uma melhor gestão da saúde a longo prazo.<br/>
                    Aproveite e conheça melhor sobre como funciona um bom plano de saúde e confira dicas de saúde atualizadas, afinal, ter saúde é o que realmente interessa e se você se ama, se cuida com um bom plano, não é mesmo? Cuide bem de você e de quem você ama!
                </div>
            </div>
        </>
    )
}

export default Planos