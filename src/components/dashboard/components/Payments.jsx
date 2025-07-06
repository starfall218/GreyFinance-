import { useState } from "react";
import Header from "./othersectionsHeader";
import "./payments.css";
import Sidebar from "./Sidebar";


const Payment = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="main-dashboard-box flex">
         <Sidebar isOpen={sidebarOpen}/>
      <div className="right-board-box">
        <Header name='Payment' toggleSidebar={()=>{
        setSidebarOpen(prev => !prev)
      }}/>
      <div className="payment-container">
      {/* Bills, Airtime & Gift Cards Section */}
      <div className="payment-section-container">
        <h2>Bills, Airtime & Gift Cards</h2>
        <div className="card-grid">
          <div className="card blue">
            <img
              src="https://app.grey.co/assets/airtime-BpXByl_V.svg"
              alt="Airtime"
              className="card-icon"
            />
            <h3>Buy Airtime</h3>
            <p>
              Stay connected with your family and friends with instant top-ups
            </p>
          </div>
          <div className="card purple">
            <img
              src="https://app.grey.co/assets/internet-C9ZcEmQP.svg"
              alt="Airtime"
              className="card-icon"
            />
            <h3>Buy Data</h3>
            <p>
              Enjoy uninterrupted internet access with easy and convenient
              mobile data top-ups
            </p>
          </div>
          <div className="card orange">
            <img
              src="https://app.grey.co/assets/bill-CiVzgNHd.svg"
              alt="Airtime"
              className="card-icon"
            />
            <h3>Pay Bills</h3>
            <p>
              Pay for your internet, cable subscription and other utility bills
              all in one place
            </p>
          </div>
          <div className="card green">
            <img
              src="https://app.grey.co/assets/gift-card-DR_t8GeG.svg"
              alt="Airtime"
              className="card-icon"
            />
            <h3>Gift Cards</h3>
            <p>Buy gift cards for yourself or your loved ones</p>
          </div>
        </div>
      </div>

      {/* Send & Receive Section */}
      <div className="payment-section-container">
        <h2>Send & Receive</h2>
        <div className="card-grid">
          <div className="card lightgreen">
            <img
              src="https://app.grey.co/assets/send-_l_QrXuZ.svg"
              alt="Airtime"
              className="card-icon"
            />
            <h3>Send Money</h3>
            <p>Send money to 80+ countries instantly</p>
          </div>
          <div className="card lightblue">
            <img
              src="https://app.grey.co/assets/receipt-Cnm8j2gl.svg"
              alt="Airtime"
              className="card-icon"
            />
            <h3>Invoices</h3>
            <p>Create and send an invoice to get paid for work done</p>
          </div>

          {/*Da Placeholder cards for alignment */}
          <div className="card placeholder"></div>
          <div className="card placeholder"></div>
        </div>
      </div>

      <button className="chat-button">💬</button>
    </div>
      </div>
    </div>
  );
};

export default Payment;
