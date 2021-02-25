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
      status: "ran out"
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
    case 'DELETE-PRODUCT':
      return {
        ...state,
        products: state.products.filter(c => c.id !== action.id)
      }
    case 'CHANGE-PRODUCT':
      return {
        ...state,
        products: state.products.map(products => {
          if (products.id !== action.id) {
            return products
          } else {
            return {
              ...products,
              status: action.status
            }
          }
        })
      }
    default:
      return state
  }
}

export default productsReducer;

// Action

export const addProductAC = (product: ProductType) => ({type: 'ADD-PRODUCT', product} as const);
export const deleteProductAC = (id: number) => ({type: 'DELETE-PRODUCT', id} as const);
export const changeProductAC =
  (id: number, status: 'all' | 'ran out' | 'have') => ({type: 'CHANGE-PRODUCT', id, status} as const);

// types

export type AddProductActionType = ReturnType<typeof addProductAC>;
export type DeleteProductActionType = ReturnType<typeof deleteProductAC>;
export type ChangeProductActionType = ReturnType<typeof changeProductAC>;

type ActionsType = AddProductActionType | DeleteProductActionType | ChangeProductActionType;

