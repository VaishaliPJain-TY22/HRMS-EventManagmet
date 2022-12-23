// import logo from './logo.svg';
import "./App.css";
import Calendar from "./components/Calendar";
import EventsCalander from "./components/EventsCalander";
import YearMonthPicker from "./components/YearMonthPicker";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <EventsCalander />
      {/* <Calendar/>
    <YearMonthPicker/> */}

      <ToastContainer
        sx={{ width: "10px" }}
        className="toast"
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
