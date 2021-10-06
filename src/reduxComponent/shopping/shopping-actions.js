import * as actionTypes from './shopping-types'

export const addToCart =(itemID)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{id:itemID}
    }
}


export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id: itemID },
  };
};



export const addQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: { id: itemID , qty:value},
  };
};


// export const increaseQty = (itemID) => {
//   return {
//     type: actionTypes.ADJUST_QTY,
//     payload: { id: itemID, },
//   };
// };

// export const decreaseQty = (itemID) => {
//   return {
//     type: actionTypes.ADJUST_QTY,
//     payload: { id: itemID },
//   };
// };

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
