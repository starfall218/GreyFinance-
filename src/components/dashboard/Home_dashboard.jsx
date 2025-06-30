import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ReferralCard from './components/ReferralCard';
import ChatWidget from './components/ChatWidget';


function Home_Dashboard() {
  return (
    <div className="container">
      <Header />
      <div className="main-layout">
        <Sidebar />
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