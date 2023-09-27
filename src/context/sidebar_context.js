import { createContext, useContext, useEffect, useReducer } from "react"
import sidebar_reducer from "../reducers/sidebar_reducer"
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../actions'
import axios from 'axios'
import { products_url } from '../utils/constants'

export const sidebarContext = createContext()

export const useSidebarContext = () => useContext(sidebarContext)

const initialState = {
  isSidebarOpen: false,
}
const SidebarContext = ({ children }) => {
  const [state, dispatch] = useReducer(sidebar_reducer, initialState)

  const openSidebar = () => dispatch({ type: SIDEBAR_OPEN })
  const closeSidebar = () => dispatch({ type: SIDEBAR_CLOSE })

  const fetchProducts = async(url) => {
    const response = await axios.get(url)
    console.log(response);
  }

  useEffect(() => {
    fetchProducts(products_url)
  }, [])


  return <sidebarContext.Provider value={{...state, openSidebar, closeSidebar}}>
    {children}
  </sidebarContext.Provider>
}
export default SidebarContext