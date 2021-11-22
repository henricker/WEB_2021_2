import { Link } from 'react-router-dom'
import './style.css'

import SippaLogo from '../../assets/sippa.png'

export const Header = () => {
    return (
      <header>
        <img src={SippaLogo} alt="sippa-logo" width={150}/>
        <nav className='menu'>
          <Link to='/students'>Estudantes</Link>
          <Link to='/courses'>Disciplinas</Link>
          <Link to='/teachers'>Professores</Link>
        </nav>
      </header>
    )
}