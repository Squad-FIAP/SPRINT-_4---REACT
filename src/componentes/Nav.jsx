import {} from 'react'
import '../scss/estilo.scss'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <>
        <header className='menu'>
            <nav className='nav-menu'>
                <ul>
                    <Link to="/" className="tlink">
                        Home
                    </Link>
                    <Link to="/Procedimentos" className="tlink">
                        Procedimentos
                    </Link>
                    <Link to="/Preparatorios" className="tlink">
                        Preparatorios
                    </Link>
                    <Link to="/Planos" className="tlink">
                        Planos
                    </Link>
                    <Link to="/Contato" className="tlink">
                        Contato
                    </Link>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Nav