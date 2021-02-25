import {ProductType} from "../types/entities";

export type initialStateType = {
  products: Array<ProductType>
}

export const initialState: initialStateType = {
  products: [
    {
      id: 1,
      name: 'bread',
      priority: 2,
      status: 'have'
    },
    {
      id: 2,
      name: 'milk',
      priority: 1,
      status: "ran out"
    },
  ]
}

const productsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'ADD-PRODUCT':
      return {...state, products: [action.product, ...state.products]}
    default:
      return state
  }
}

export default productsReducer;

// Action

export const addProductAC = (product: ProductType) => ({type: 'ADD-PRODUCT', product} as const);

// types

export type AddProductActionType = ReturnType<typeof addProductAC>;

type ActionsType = AddProductActionType;

