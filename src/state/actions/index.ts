interface DepositAction {
  type: 'deposit',
  payload: number,
}

interface WithDrawAction {
  type: 'withdraw',
  payload: number,
}

interface BankRupAction {
  type: 'bankrupt',
}

export type Action = DepositAction | WithDrawAction | BankRupAction;
