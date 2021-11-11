import { Link } from 'react-router-dom'
import './style.css'

export const Header = () => {
    return (
      <header>
        <img src="https://academico.quixada.ufc.br/sippa/images/sippa_logo.png" alt="sippa-logo" width={150}/>
        <nav className='menu'>
          <Link to='/estudantes'>Estudantes</Link>
          <Link to='/disciplinas'>Disciplinas</Link>
          <Link to='/professores'>Professores</Link>
        </nav>
      </header>
    )
}