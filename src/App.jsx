
import './App.css'
import Rickandmorty from './components/RickandMorty'


function App() {


  return (
    <div className="App">   
    
       <img src="/banner.svg" alt="" />  
       <div className='conteiner'>    
          <Rickandmorty />  
       </div>     
    </div>
  )
}

export default App