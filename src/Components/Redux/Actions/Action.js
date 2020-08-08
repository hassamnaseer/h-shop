import firebase from 'firebase/app';

export const storage = firebase.storage().ref();
const db = firebase.firestore();

export const getProductsAsync = (products) => {
  return {
    type: 'GET_PRODUCTS',
    payload: products
  };
};

export const getProducts = () => {
  let documents;
  return async (dispatch) => {
    documents = await db.collection("test").orderBy('Timestamp', 'desc').get();
    dispatch(getProductsAsync({...documents.docs}))
  }
}

export const getLatestProductsAsync = (latestProducts) => {
  return {
    type: 'GET_LATEST_PRODUCTS',
    payload: latestProducts
  };
};

export const getLatestProducts = () => {
  let documents1;
  return async (dispatch) => {
    documents1 = await db.collection("test").orderBy('Timestamp', 'desc').limit(4).get();
    dispatch(getLatestProductsAsync({...documents1.docs}))
  }
}

export const getProductDescription = (product) => {
  return {
    type: 'PRODUCT_DESCRIPTION',
    payload: product
  }
}

export const getCartAsync = (cart, product) => {
  return {
    type: 'GET_CART',
    payload: cart,
    product: product
  };
};

export const getCart = (product) => {
  let documents1;
  return async (dispatch1) => {
    documents1 = await db.collection("cart").get();
    dispatch1(getCartAsync({...documents1.docs}, product))
  }
}