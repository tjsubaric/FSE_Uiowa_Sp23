import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./assets/UserList";
import AddUser from "./assets/AddUser";
import EditUser from "./assets/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;