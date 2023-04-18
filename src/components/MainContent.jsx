import 'animate.css';
import Locationinfo from './Locationinfo'
import ResidentCard from './ResidentCard'

const MainContent = ({location}) => {
  return (
    <>
    <Locationinfo location={location}/>
        <div className='resident-container'>
          {
            location?.residents.map(url =>(
              <ResidentCard
              key={url}
              url={url}
              />
          ))
        }
        </div>
    </>
  )
}

export default MainContent