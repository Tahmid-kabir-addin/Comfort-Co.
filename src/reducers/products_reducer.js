import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    console.log(action);
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false }
  }
  // loading while fetching data
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {...state, productsLoading: true}
  }
  // loading while fetching data
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return { ...state, singleProductLoading: true }
  }
  // handling error
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsError: true, productsLoading: false}
  }
  // handling error
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleProductError: true, singleProductLoading: false }
  }
  // fetch all products success
  if(action.type === GET_PRODUCTS_SUCCESS) {
    const featuredProducts = action.payload.filter(product => product.featured === true)
    return { ...state, productsLoading: false, products: action.payload, featuredProducts: featuredProducts}
  }
  // fetch single products success
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return { ...state, singleProductLoading: false, product: action.payload}
  }
  return state
}

export default products_reducer
