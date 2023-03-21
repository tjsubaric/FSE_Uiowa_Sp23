import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./assets/UserList";
import AddUser from "./assets/AddUser";
import EditUser from "./assets/EditUser";
import Login from "./sharedPages/Login";
import Patient from "./components/PatientMenu";
import Doctor from "./components/DoctorMenu";
import Register from "./patientPages/Register";
import { createBrowserHistory as history } from "history";
import Dashboard from "./components/dashboard";
import Appointments from "./patientPages/Appointments";
import Messages from "./patientPages/Messages";
import Find_a_Doc from "./patientPages/Find_a_Doc";
import Lab_Results from "./patientPages/Lab_Results";
import Medical_Records from "./patientPages/Medical_Records";
import Prescriptions from "./patientPages/Prescriptions";
import Billing from "./patientPages/Billing";
import My_Schedule from "./drPages/My_Schedule";
import My_Patients from "./drPages/My_Patients";
import Chats from "./drPages/Chats";

function App() {
  return (
    <BrowserRouter history = {history}>
      <Dashboard />
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/appointments" element={<Appointments/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/labresults" element={<Lab_Results/>} />
        <Route path="/medrecords" element={<Medical_Records/>} />
        <Route path="/prescriptions" element={<Prescriptions/>} />
        <Route path="/billing" element={<Billing/>} />
        <Route path="/findadoc" element={<Find_a_Doc/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/patient" element={<Patient/>} />
        <Route path="/doctor" element={<Doctor/>} />
        <Route path="/myschedule" element={<My_Schedule/>} />
        <Route path="/mypatients" element={<My_Patients/>} />
        <Route path="/chats" element={<Chats/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;