import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions"

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) =>{
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount
    })   
  }
}

export const withDrawMoney = (amount: number) => {
  return (dispatch: Dispatch) =>{
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount
    })   
  }
}

export const bankRupt = () => {
  return (dispatch: Dispatch) =>{
    dispatch({
      type: ActionType.BANKRUPT,
    })
  }
}  
