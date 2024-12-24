import React from "react";
import './Student.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faQuestionCircle, faComments } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { supabase } from "../createClient"
import Filter from '../assets/filter.png'

const Student=()=>{
     const [student , setStudent] = useState([])
      console.log(student);
      const [person , setPerson] = useState({
        name:'', cohort:'', courses:'', datejoined:'', lastlogin:'', status:''
      })
      const [isModalOpen, setIsModalOpen] = useState(false);
    

      useEffect(()=>{
       fetchStudent();
      },[])
    
      async function fetchStudent(){
        const {data} = await supabase
        .from('student')
        .select('*')
         setStudent(data);
      }

      function handleChange(e){
        setPerson(prevFormData=>{
            return {
                ...prevFormData,
                [e.target.name]:e.target.value
            }
        })
      }

     async function createStudent() {
        await supabase
        .from ('student')
        .insert({ name:person.name, cohort:person.cohort, courses: person.courses, datejoined:person.datejoined, lastlogin:person.lastlogin, status:person.status});
        
      }
      const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "short", year: "numeric" };
        return new Intl.DateTimeFormat("en-GB", options).format(new Date(dateString));
      };
    
      
      const formatDateTime = (dateString) => {
        const options = {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        return new Intl.DateTimeFormat("en-GB", options).format(new Date(dateString));
      };

    return (
      <div className="app-container">
        <header className="header">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search your course" />
          </div>
          <div className="header-icons">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              style={{ marginRight: "50px", width: "22px", height: "22px" }}
            />
            <FontAwesomeIcon
              icon={faComments}
              style={{ marginRight: "50px", width: "22px", height: "22px" }}
            />
            <img
              src={Filter}
              style={{ width: "22px", height: "22px", marginRight: "30px" }}
            />
            <FontAwesomeIcon
              icon={faBell}
              style={{ marginRight: "50px", width: "22px", height: "22px" }}
            />
            <img
              src="data:image/png;base64,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"
              alt="User"
              className="profile-pic"
              style={{ width: "60px", height: "60px" }}
            />
            <span>Adeline H. Dancy</span>
          </div>
        </header>

        <div className="filters">
          <select
            style={{
              width: "140px",
              marginRight: "0px",
              height: "40px",
              backgroundColor: "grey",
              fontSize: "18px",
            }}
          >
            <option>AY 2024-25</option>
          </select>
          <select
            style={{
              width: "120px",
              height: "40px",
              backgroundColor: "grey",
              fontSize: "18px",
            }}
          >
            <option>CBSE 9</option>
          </select>
          <button
            className="add-student-btn"
            style={{
              width: "250px",
              marginRight: "30px",
              height: "40px",
              backgroundColor: "grey",
              fontSize: "18px",
            }}
            onClick={() => setIsModalOpen(true)}
          >
            + Add new Student
          </button>
        </div>

        <table className="students-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Cohort</th>
              <th>Courses</th>
              <th>Date Joined</th>
              <th>Last Login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {student.map((student) => (
              <tr key={student.name}>
                <td>{student.name}</td>
                <td>{student.cohort}</td>
                <td>
                  <img
                    src={'data:image/jpeg;base64,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'}
                    alt="Course Icon"
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "10px",
                    }}
                  />
                  {student.courses}
                </td>
                <td>{formatDate(student.datejoined)}</td>
                <td>{formatDateTime(student.lastlogin)}</td>
                <td>
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      backgroundColor: student.status ? "green" : "red",
                      display: "inline-block",
                    }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Add New Student</h2>
              <form onSubmit={createStudent}>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    placeholder="Please enter your name"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Cohort:
                  <input
                    type="text"
                    name="cohort"
                    placeholder="Please enter your cohort"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Courses:
                  <input
                    type="text"
                    name="courses"
                    placeholder="choose your course"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Date Joined:
                  <input
                    type="date"
                    name="datejoined"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Last Login:
                  <input
                    type="datetime-local"
                    name="lastlogin"
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Status:
                  <input
                    type="bool"
                    name="status"
                    placeholder="True or False"
                    onChange={handleChange}
                  />
                </label>
                <div className="modal-buttons">
                  <button
                    type="submit"
                    style={{
                      width: "120px",
                      backgroundColor: "grey",
                      color: "white",
                    }}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="cancel-btn"
                    style={{ width: "120px" }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
}
export default Student;