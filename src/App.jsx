import SignUp from './components/form/form';
import LogIn from './components/form/LogIn';
import Home_Dashboard from './components/dashboard/Home_dashboard';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Payment from './components/dashboard/components/Payments';
import LandingPage from './components/Landing page/landing-page';
import UserCard from './components/dashboard/components/my-card-dashboard';
import TermsAndConditions from './components/dashboard/components/terms-conditions-section-dashb';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/termsandconddashb" element={<TermsAndConditions />} />
      <Route path="/usercard" element={<UserCard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/main_dashboard" element={<Home_Dashboard />} />
    </Routes>
  );
}

export default App;
