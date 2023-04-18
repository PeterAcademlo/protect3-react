import { useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFecth'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'
import 'animate.css';


const App = () => {

  const [inputvalue, setInputvalue] = useState(getRandomLocation())

  const url =`https://rickandmortyapi.com/api/location/${inputvalue}`
  const [location, haserror] = useFetch(url)

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    //evnet.target.id(que le pones en el input).value//
    setInputvalue(inputLocation.current.value)
  }

  return (
    <div className="App">
      <img className='app__img' src="./src/img/img2.jpg" alt=""/>
        <h1 className="animate__fadeInDown">APP-RICK-MORTY</h1>
        <form className='app__form' onSubmit={handleSubmit}>
          <input className='app__input' ref={inputLocation} type="text" placeholder='Type here your search' required/>
          <button className='app__btn'>Search</button>
        </form>
        {
          haserror
          ?<h2 className='animate__zoomInRight'>hey! you must provide an id from 1 to 126</h2>
        :<MainContent location={location}/>
        }
        <div className='space__img2'>
          <img className='app__img2' src="./src/img/img2.jpg" alt=""/>
        </div>
    </div>
  )
}

export default App
