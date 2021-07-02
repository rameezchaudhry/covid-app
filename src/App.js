import logo from './logo.svg';
import './App.css';
import axios from "axios"
import reducer from "./store/reducer"
import store from "./store"
import {Provider} from "react-redux"
import Get from "./component/get"


function App() {
  

  return(
    <div className="App">
     <Provider store={store}>
       <Get />
     </Provider>

    </div>
  );
}

export default App;
