import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ReferralCard from './components/ReferralCard';
import ChatWidget from './components/ChatWidget';
import './extra-dashboard.css'
import { useState } from 'react';

function Home_Dashboard() { 
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    
    <div className="dash-cont w-12/12 flex">
      <Sidebar isOpen={sidebarOpen}/>
      <div className="main-layout flex-col">
      <Header toggleSidebar={()=>{
        setSidebarOpen(prev => !prev)
      }} />
        <main className="content">
          <MainContent />
        </main>
      </div>
      <ReferralCard />
      <ChatWidget />
    </div>
  );
}

export default Home_Dashboard;