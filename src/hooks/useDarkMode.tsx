import {useContext} from 'react'
import {DarkModeContext} from '../context/darkMode'

const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if(!context){
    throw new Error("Dark mode provider does not wrap app")
  }
  return context
}

export default useDarkMode