import React, { Component } from "react";
import "./App.css";
import store from "./store";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import BookingPage from "./components/Booking/bookingPage";
import ServicePage from "./components/Services/ServicePage";
import Login from "./components/User/Login";
import Logout from "./components/User/Logout";
import Admin from "./components/Admin/Admin";
import Profile from "./components/User/Profile";
import AddStaff from "./components/Admin/AddStaff";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Landing/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/logout" element={<Logout/>}/>
                        <Route exact path="/admin" element={<Admin/>}/>
                        <Route exact path="/addstaff" element={<AddStaff/>}/>
                        <Route exact path="/profile" element={<Profile/>}/>
                        <Route exact path="/contactus" element={<ContactUs/>}/>
                        <Route exact path="/aboutus" element={<AboutUs/>}/>
                        <Route exact path="/booking" element={<BookingPage/>} />
                        <Route exact path="/service" element={<ServicePage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}
export default App;
