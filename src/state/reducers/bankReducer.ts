const initialState = 0;


interface DepositAction {
  type: 'desposit',
  payload: number,
}

interface WithDrawAction {
  type: 'withdraw',
  payload: number,
}

interface BankRupAction {
  type: 'bankrupt',
}

type Action = DepositAction | WithDrawAction | BankRupAction;

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case 'desposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    case "bankrupt":
      return 0;
    default:
      return state;  
  }
}

export default reducer;