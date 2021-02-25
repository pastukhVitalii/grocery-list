import React, {useCallback} from 'react';
import './App.css';
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {AppStateType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {ProductType} from "./types/entities";
import {Product} from "./components/Product/Product";
import {Button} from '@material-ui/core';
import {addProductAC, deleteProductAC} from "./redux/productsReducer";

function App() {

  const products = useSelector<AppStateType, Array<ProductType>>(state => state.products.products);

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
  }, [dispatch, id])

  const changeStatus = useCallback((status: boolean) => {
    alert(status);
  }, [])

  const changeFilter = useCallback((status: 'all' | 'ran out' | 'have') => {
    alert(status);
  }, [])
  const onAllClickHandler = useCallback(() => {
    changeFilter('all')
  }, [changeFilter])
  const onRunOutClickHandler = useCallback(() => {
    changeFilter('ran out')
  }, [changeFilter])
  const onHaveClickHandler = useCallback(() => {
    changeFilter('have')
  }, [changeFilter])

  return (
    <div className="App">
      <AddItemForm addItem={addProduct}/>
      {products.map(p => {
        return <Product key={p.id} product={p} changeProductStatus={changeStatus} deleteProduct={deleteProduct}/>
      })}
      <div style={{paddingTop: '10px'}}>
        <Button onClick={onAllClickHandler}
                color={'default'}
        >All
        </Button>
        <Button onClick={onRunOutClickHandler}
                color={'primary'}>Run out
        </Button>
        <Button onClick={onHaveClickHandler}
                color={'secondary'}>Have
        </Button>
      </div>
    </div>
  );
}

export default App;
