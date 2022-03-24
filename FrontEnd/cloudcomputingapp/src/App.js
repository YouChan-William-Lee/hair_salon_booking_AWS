import React, { Component } from "react";
import "./App.css";
import store from "./store";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import BookingPage from "./components/Booking/bookingPage";
import ServicePage from "./components/Services/ServicePage";

class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <Router>
                  <div className="App">
                      <Header />
                      <Routes>
                          <Route exact path="/" element={<Landing />} />
                          <Route exact path="/contactus" element={<ContactUs />} />
                          <Route exact path="/aboutus" element={<AboutUs />} />
                          <Route exact path="/booking" element={<BookingPage />} />
                          <Route exact path="/service" element={<ServicePage />} />
                      </Routes>
                      <Footer />
                  </div>
              </Router>
          </Provider>
      );
  }
}
export default App;
