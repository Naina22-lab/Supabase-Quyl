import { useState, useEffect } from "react";
import React from "react";
import { supabase } from "./createClient";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Student from "./Component/Student";
import Dashboard from "./Component/Dashboard";
import Chapter from "./Component/Chatpter";
import Help from "./Component/Help";
import Reports from "./Component/Reports";
import Settings from "./Component/Settings";

const App =()=>{

  const [student , setStudent] = useState([])
  console.log(student);


  useEffect(()=>{
   fetchStudent();
  },[])

  async function fetchStudent(){
    const {data} = await supabase
    .from('student')
    .select('*')
     setStudent(data);
    //  console.log(data)
  }
  
  return(
    <Router>
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Student/>} />
          <Route path="/chapter" element={<Chapter/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  </Router>
  )

}

export default App;