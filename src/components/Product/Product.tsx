import React, {ChangeEvent, useCallback} from 'react'
import {Checkbox, IconButton} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import {ProductType} from "../../types/entities";

type PropsType = {
  product: ProductType
  changeProductStatus: (status: boolean) => void
}
export const Product = React.memo((props: PropsType) => {

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    let newIsDoneValue = e.currentTarget.checked
    props.changeProductStatus(newIsDoneValue)
  }, [props.changeProductStatus]);

  return <div>
    <span>{`Priority ${props.product.priority} `}</span>
    <b>{props.product.name}</b>
    <IconButton>
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
