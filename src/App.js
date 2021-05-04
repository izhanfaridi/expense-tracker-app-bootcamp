import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransactions } from './components/AddTransactions'
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransactions></AddTransactions>
      </div>
    </GlobalProvider>
  );
}

export default App;
