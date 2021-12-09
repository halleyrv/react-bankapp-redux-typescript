import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withDrawMoney, bankRupt} = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="App">
     <h1>{amount}</h1>
     <button onClick={()=> depositMoney(100)}>Deposit</button>
     <button onClick={()=> withDrawMoney(500)}>WithDraw</button>
     <button onClick={()=> bankRupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
