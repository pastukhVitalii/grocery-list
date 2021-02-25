import {ProductType} from "../types/entities";

export type initialStateType = {
  products: Array<ProductType>
}

export const initialState: initialStateType = {
  products: [
    {
      id: 1,
      name: 'bread',
      priority: '2',
      status: "ran out"
    },
    {
      id: 2,
      name: 'milk',
      priority: '1',
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
    case 'CHANGE-PRODUCT-STATUS':
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
    case 'CHANGE-PRODUCT-PRIORITY':
      debugger
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id !== action.id) {
            return product
          } else {
            return {
              ...product,
              priority: action.priority
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
  (id: number, status: 'all' | 'ran out' | 'have') => ({type: 'CHANGE-PRODUCT-STATUS', id, status} as const);
export const changePriorityProductAC =
  (id: number, priority: string) => ({type: 'CHANGE-PRODUCT-PRIORITY', id, priority} as const);
// types

export type AddProductActionType = ReturnType<typeof addProductAC>;
export type DeleteProductActionType = ReturnType<typeof deleteProductAC>;
export type ChangeStatusProductActionType = ReturnType<typeof changeProductAC>;
export type ChangePriorityProductActionType = ReturnType<typeof changePriorityProductAC>;

type ActionsType =
  AddProductActionType
  | DeleteProductActionType
  | ChangeStatusProductActionType
  | ChangePriorityProductActionType;

