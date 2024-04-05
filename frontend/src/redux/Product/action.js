import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    CREATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_SUCCESS,
  } from './actionType';
  
  const getToken = () => localStorage.getItem('token');
  
  console.log(getToken())
  
  
  export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch({ type: FETCH_PRODUCTS_REQUEST });
      try {
        const response = await fetch('https://arba-backend-3585.vercel.app/product', {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
      }
    };
  };
  
 
  export const createProduct = (productData) => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://arba-backend-3585.vercel.app/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify(productData),
        });
        if (!response.ok) {
          throw new Error('Failed to create');
        }
        const data = await response.json();
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
      }
    };
  };
  
  
  export const updateProduct = (productId, productData) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://arba-backend-3585.vercel.app/${productId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify(productData),
        });
        if (!response.ok) {
          throw new Error('updating Failed');
        }
        const data = await response.json();
        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
      }
    };
  };
  
  
  export const deleteProduct = (productId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`https://arba-backend-3585.vercel.app/${productId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        if (!response.ok) {
          throw new Error(' delete Failed');
        }
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
      } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
      }
    };
  };