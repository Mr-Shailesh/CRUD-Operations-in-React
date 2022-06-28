import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import { Routes, Route } from "react-router-dom";
import AddUser from "./Pages/AddUser";
import EditUser from "./users/EditUser";
import ViewUsers from "./users/ViewUsers";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-users" element={<AddUser />} />
        <Route path="/add-users/edit/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<ViewUsers />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
