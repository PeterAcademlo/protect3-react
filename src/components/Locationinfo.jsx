import 'animate.css';

const Locationinfo = ({ location }) => {
  return (
    <article className="location">
        <h2  className="location__name">{location?.name}</h2>
        <ul  className="location__list">
            <li  className="location__label">
              <span  className="location__item">TYPE:</span>{location?.type}</li>
            <li  className="location__label">
              <span  className="location__item">DIMENSION:</span>{location?.dimension}</li>
            <li  className="location__label">
              <span  className="location__item">POPULATION:</span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default Locationinfo