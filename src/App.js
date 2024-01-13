import {useState,useEffect,useContext} from "react"
import NorthwindDataContext from './northwindDataContext'
import NorthwindDataAPI from './api'
import CustomerTable from './components/customerTable'
import logo from './logo.svg';
import './App.css';

function App() {

  const [customers,setCustomers] = useState([])

  useEffect(()=>{
                   async function getNorthwindData(){ 
                        try{
                              const c_results = await NorthwindDataAPI.getAllCustomers()
                              setCustomers(c_results.data.Customers)
                        }catch(e){
                          return console.log(e)
                        }
                  }
             getNorthwindData()     
  },[])
  return (
    <NorthwindDataContext.Provider value={{customers}}>
    <div className="App">
      <header className="App-header">
        <CustomerTable />
        </header>
    </div>
    </NorthwindDataContext.Provider>
  );
}

export default App;
