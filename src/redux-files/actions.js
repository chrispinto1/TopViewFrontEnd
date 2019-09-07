import {FETCH, PRODUCT, CHOSENACCESSORIES, ADDON } from './types'

function fetchProducts(setProducts){
    return function(dispatch){
      fetch("https://topview-api.herokuapp.com/products")
      .then(resp => resp.json())
      .then(products => {
        dispatch({type: FETCH, payload: products.products})
        if(setProducts){
          setProducts()
        }
      })
    }
}

function chosenAccessories(name){
  localStorage.accessory = name;
  return ({type: CHOSENACCESSORIES, payload: name})
}

function bikeSelected(bike){
  localStorage.bike = bike;
  return ({type: PRODUCT, payload: bike})
}

function addonSelected(name){
  return ({type: ADDON, payload: name})
}

export {
    fetchProducts,
    bikeSelected,
    chosenAccessories,
    addonSelected
}