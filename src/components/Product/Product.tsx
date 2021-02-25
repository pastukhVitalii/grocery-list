import React, {ChangeEvent, useCallback} from 'react'
import {Checkbox, IconButton} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import {ProductType} from "../../types/entities";

type PropsType = {
  product: ProductType
  changeProductStatus: (id: number, status: 'all' | 'ran out' | 'have') => void
  deleteProduct: (id: number) => void
}
export const Product = React.memo((props: PropsType) => {

  const onClickHandler = useCallback(() => {
    props.deleteProduct(props.product.id)
  }, [props]);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let newIsDoneValue = e.currentTarget.checked
    props.changeProductStatus(props.product.id, newIsDoneValue ? 'have' : 'ran out')
  }, [props]);

  return <div>
    <span>{`Priority ${props.product.priority} `}</span>
    <b>{props.product.name}</b>
    <IconButton onClick={onClickHandler}>
      <Delete/>
    </IconButton>
    <Checkbox
      color="primary"
      value={props.product.status}
      onChange={onChangeHandler}
    />
    <span>{props.product.status}</span>
  </div>
})
