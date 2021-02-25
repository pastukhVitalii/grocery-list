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

const productsReducer = (state: initialStateType = initialState, action: any): initialStateType => {
  switch (action.type) {
    default:
      return state
  }
}

export default productsReducer;

// Action




