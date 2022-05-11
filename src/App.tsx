import React from "react";
import {Routes, Route} from "react-router"
import "./App.scss";
import EditPasswordForm from "./Components/Forms/EditPassword-form/EditPasswordForm";
import ForgotPasswordForm from "./Components/Forms/ForgotPassword-form/ForgotPasswordForm";
import LoginForm from "./Components/Forms/Login-form/LoginForm";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import LoginPage from "./Pages/Login/LoginPage";

const App: React.FC = () => {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}>
          <Route path="login" element={<LoginForm/>}/>
          <Route path="forgot-password" element={<ForgotPasswordForm/>} />
          <Route path="edit-password" element={<EditPasswordForm/>}/>
        </Route>
        <Route path="/dashboard" element={<DashboardPage/>}>
          
        </Route>
      </Routes>
      
    </div>
  );
};

export default App;
