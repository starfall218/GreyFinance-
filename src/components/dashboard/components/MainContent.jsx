import VerificationCard from "./VerificationCard"
import BalancesSection from "./BalancesSection"
import QuickActions from "./QuickActions"
import './index.css'
function MainContent() {
  return (
    <div>
      <VerificationCard />
      <BalancesSection />
      <QuickActions />
    </div>
  )
}

export default MainContent
