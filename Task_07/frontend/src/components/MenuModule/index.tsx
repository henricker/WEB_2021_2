import { Link } from 'react-router-dom'
import './style.css'

type MenuModuleProps = {
  basePath: string
}

export const MenuModule: React.FC<MenuModuleProps> = ({ basePath }: MenuModuleProps) => {
  return (
    <nav className='menuModule'>
      <Link to={basePath}>Listar</Link>
      <Link to={`${basePath}/create`}>Criar</Link>
    </nav>
  )
}