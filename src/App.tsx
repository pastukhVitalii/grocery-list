import React, {useCallback} from 'react';
import './App.css';
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {AppStateType} from "./redux/store";
import {useDispatch, useSelector} from "react-redux";
import {ProductType} from "./types/entities";
import {Product} from "./components/Product/Product";
import {Button} from '@material-ui/core';

function App() {

  const products = useSelector<AppStateType, Array<ProductType>>(state => state.products.products);

  const dispatch = useDispatch();
  const addProduct = useCallback((title: string) => {
    alert('add')
  }, [])

  const changeStatus = useCallback((status: boolean) => {
    alert(status)
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
        return <Product key={p.id} product={p} changeProductStatus={changeStatus}/>
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
