import { FC } from 'react'
import './style.css'

const World: FC = (props) => {
  return (
    <div className="container">
      <h1>World</h1>
      <div className="world">
        {props.children}
      </div>
    </div>
  )
}

export default World