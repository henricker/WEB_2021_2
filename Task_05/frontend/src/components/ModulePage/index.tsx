import { MenuModule } from '../../components/MenuModule'
import './style.css'

type ModuleProps = {
  moduleName: string
  basePath: string
}

export const ModulePage: React.FC<ModuleProps> = ({ moduleName, basePath }: ModuleProps) => {
  return (
    <div className='module'>
        <h2 className='moduleName'>{moduleName}</h2>
        <MenuModule basePath={basePath}/>
    </div>
  )  
}