import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {AppStateType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {ProductType} from "./types/entities";
import {Product} from "./components/Product/Product";
import {Button} from '@material-ui/core';
import {addProductAC, changeProductAC, deleteProductAC} from "./redux/productsReducer";

function App() {

  const products = useSelector<AppStateType, Array<ProductType>>(state => state.products.products);

  const [filterP, setFilterP] = useState<'all' | 'ran out' | 'have'>('all');

  let filteredProducts = products.filter(p => {
    if (filterP === "all") {
      return products
    } else {
      return p.status === filterP
    }
  });

  let id = 100;
  const dispatch = useDispatch();

  const addProduct = useCallback((title: string) => {
    let newProduct: ProductType = {
      id: id + 1,
      name: title,
      status: "ran out",
      priority: 1
    }
    dispatch(addProductAC(newProduct))
  }, [dispatch, id])

  const deleteProduct = useCallback((id: number) => {
    dispatch(deleteProductAC(id))
  }, [dispatch])

  const changeStatus = useCallback((id: number, status: 'all' | 'ran out' | 'have') => {
    dispatch(changeProductAC(id, status))
  }, [dispatch])

  const onAllClickHandler = useCallback(() => {
    setFilterP('all')
  }, [])
  const onRanOutClickHandler = useCallback(() => {
    setFilterP('ran out')
  }, [])
  const onHaveClickHandler = useCallback(() => {
    setFilterP('have')
  }, [])

  console.log(filteredProducts)
  return (
    <div className="App">
      <AddItemForm addItem={addProduct}/>
      {filteredProducts.map(p => {
        return <Product key={p.id} product={p} changeProductStatus={changeStatus} deleteProduct={deleteProduct}/>
      })}
      <div style={{paddingTop: '10px'}}>
        <Button onClick={onAllClickHandler}
                color={'default'}
                variant={filterP === 'all' ? 'outlined' : 'text'}
        >All
        </Button>
        <Button onClick={onRanOutClickHandler}
                color={'primary'}
                variant={filterP === 'ran out' ? 'outlined' : 'text'}
        >Run out
        </Button>
        <Button onClick={onHaveClickHandler}
                color={'secondary'}
                variant={filterP === 'have' ? 'outlined' : 'text'}
        >Have
        </Button>
      </div>
    </div>
  );
}

export default App;
