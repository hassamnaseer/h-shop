const initialState = {
  user: {},
  products: {},
  latestProducts: {},
  productDescription: null,
  cart: null
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {products : action.payload}
    case 'GET_LATEST_PRODUCTS':
      return {latestProducts : action.payload}
    case 'GET_USER':
      return {user: action.payload}
    case 'PRODUCT_DESCRIPTION':
      return {productDescription: action.payload}
    case 'GET_CART':
      return {cart: action.payload, productDescription: action.product}
    default:
      return state;
  }
}

export default Reducer;