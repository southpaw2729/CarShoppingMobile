import { combineReducers } from "redux";


const initialState = {
  loading: false,
  data: null,
  error: null,
  price: null,
  model: null
}

const CarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CARS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "CARS_SUCCESS":
      return {
        ...state,
        data: action.response,
        loading: false,
      };

    case "CARS_FAILURE":
      return {
        ...state,
        error: action.error,
        loading: false,
      };


    default:
      return state;
  }
}

const CarDetailsReducer = (state = initialState, action) => {
  switch (action.type) {

    case "CAR_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "CAR_DETAILS_SUCCESS":
      return {
        ...state,
        data: action.response,
        loading: false,
      };

    case "CAR_DETAILS_FAILURE":
      return {
        ...state,
        error: action.error,
        loading: false,
      };


    default:
      return state;
  }
}

const CarPriceReducer = (state = initialState, action) => {
  switch (action.type) {

    case "CAR_PRICE":
      return {
        ...state,
        price: action.price,
        model: action.model
      };


    default:
      return state;
  }
}


export const combinedReducers = combineReducers({
  Cars: CarReducer,
  Car: CarDetailsReducer,
  CarPrice: CarPriceReducer
}) 