import axios from 'axios'
import { useEffect, useState } from 'react'
   
const useFetch = (url) =>{

    const [state, setState] = useState()
    const [haserror, setHaserror] = useState(false)

    useEffect(() => {
        axios.get(url)
          .then(res => {
            setState(res.data)
            setHaserror(false)
        })
          .catch(err =>{ 
            console.error(err)
            setHaserror(true)
          })
      }, [url] )

      return [state, haserror]
}

export default useFetch