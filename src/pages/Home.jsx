import {useDispatch, useSelector} from "react-redux"
import { KeyDetails, CoursesIncluded } from '../components'
import {useEffect} from "react"
import {get_collection} from "../store/modules/collection"
import './css/home-page.scss'

function Home () {
  const { fetching } = useSelector((state) => state.collection)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_collection())
  }, [])

  return (
    <main className='home-page'>
      {fetching && <span>DATA IS LOADING</span>}

      <KeyDetails />

      {/*<CoursesIncluded />*/}
    </main>
  )
}

export default Home
