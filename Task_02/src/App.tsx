import Arena from './components/questao04/Arena'
import World from './components/questao03/World'
import Hero from './components/questao01/Hero';
import { enemyCeara, enemyPath, enemySasuke, heroFortaleza, heroNaruto, heroPath } from './components/questao02/constants';
import Enemy from './components/questao01/Enemy';

function App() {
  return (
    <div className="App">
      <World>
        <Arena arena='Tokio Dome - Underground Arena'>
          <Hero name='Baki' image={ heroPath }/>
          <Enemy name='Yujiro' image={ enemyPath }/>
        </Arena>
        <Arena arena='Aldeia da folha'>
          <Hero name='Naruto' image={ heroNaruto }/>
          <Enemy name='Sasuke' image={ enemySasuke }/>
        </Arena>
        <Arena arena='Castelao'>
          <Hero name='Fortaleza' image={ heroFortaleza }/>
          <Enemy name='Ceará' image={ enemyCeara }/>
        </Arena>
      </World>  
    </div>
  );
}

export default App;
