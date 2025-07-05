import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ReferralCard from './components/ReferralCard';
import ChatWidget from './components/ChatWidget';
import './extra-dashboard.css'

function Home_Dashboard() {
  return (
    
    <div className="dash-cont w-12/12 flex">
      <Sidebar/>
      <div className="main-layout flex-col">
      <Header />
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