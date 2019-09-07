import { FETCH, PRODUCT, CHOSENACCESSORIES, ADDON } from './types'

const defaultState = {
    products: [],
    bikeSelected: "",
    accessories: "",
    addons: ""
}

function reducer(prevState = defaultState, action){
    switch(action.type){
      case FETCH:
        return {...prevState, products: action.payload}
      case PRODUCT:
        return {...prevState, bikeSelected: action.payload}
      case CHOSENACCESSORIES:
        return {...prevState, accessories: action.payload}
      case ADDON:
        return {...prevState, addons: action.payload}
      default:
        return prevState
    }
}

export default reducer