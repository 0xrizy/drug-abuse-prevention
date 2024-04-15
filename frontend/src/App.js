import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import ReportForm from "./Pages/ReportForm";
import EmployeeForm from "./Pages/EmployeeForm";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import TotalReports from "./Components/Admin/TotalReports";
import Registeredemployees from "./Components/Admin/Registeredemployees"; 
import HelpDesk from "./Pages/HelpDesk";
import Help from "./Pages/Help";
import Educational from "./Pages/Educational";
import OnlineServices from "./Pages/OnlineServices";
import CollegeSupportForm from "./Pages/CollegeSupportForm";
import StudentSupportDetails from "./Components/Admin/StudentSupportDetails";
import UserLogin from "./Pages/User/UserLogin";
import UserSignup from "./Pages/User/UserSignup";
import UserDashboard from "./Pages/User/UserDashboard";
import UserQuiz from "./Pages/User/UserQuiz";
import UserReports from "./Pages/User/UserReports";

function App() {

  const [isAdminLoggedIn, setAdminLoggedIn] = useState(
    localStorage.getItem("isAdminLoggedIn") === "true"
  );


  const handleAdminLogin = (loggedIn) => {
    setAdminLoggedIn(loggedIn);
    localStorage.setItem("isAdminLoggedIn", loggedIn);
  };

  const isAdminPage = window.location.pathname === '/adminlogin';

  return (
    <Router>
      { !isAdminLoggedIn && !isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reportform" element={<ReportForm />} />
        <Route path="/employeeregister" element={<EmployeeForm />} />
        <Route path="/adminlogin" element={<AdminLogin onLogin={handleAdminLogin} />} />
        <Route path="/totalreports" element={<TotalReports />} />
        <Route path="/registeredemployees" element={<Registeredemployees />} /> {/* Add this line */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/help" element={<Help />} />
        <Route path="/educational" element={<Educational />} />
        <Route path="/onlineServices" element={<OnlineServices />} />
        <Route path="/collegesupportform" element={<CollegeSupportForm />} />
        <Route path="/studentSupportDetails" element={<StudentSupportDetails />} />
        <Route path="/userLogin" element={<UserLogin/>}/>
        <Route path="userSignup" element={<UserSignup/>}/>
        <Route path="userDashboard" element={<UserDashboard/>}/>
        <Route path="userQuiz" element={<UserQuiz/>}/>
        <Route path="userReports" element={<UserReports/>}/>

      </Routes>
      { !isAdminLoggedIn && !isAdminPage && <Footer />}
    </Router>
  );
}

export default App;
