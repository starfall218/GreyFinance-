import './sidebar.css'
import { Link, Links } from 'react-router-dom';

function Sidebar(props) {
  const menuItems = [
    {
      fileLink: '/main_dashboard',
       icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M6.01331 1.89336L2.41998 4.69336C1.81998 5.16003 1.33331 6.15336 1.33331 6.90669V11.8467C1.33331 13.3934 2.59331 14.66 4.13998 14.66H11.86C13.4066 14.66 14.6666 13.3934 14.6666 11.8534V7.00003C14.6666 6.19336 14.1266 5.16003 13.4666 4.70003L9.34665 1.81336C8.41331 1.16003 6.91331 1.19336 6.01331 1.89336Z" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 11.9933V9.99329" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), label: "Home", active: props.isActive ? true : false },
  
      //  PLace Account link here
    {fileLink: '',
       icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="active_icon"><path d="M9.89984 2.63385V5.16719H8.89984V2.63385C8.89984 2.45385 8.73984 2.36719 8.63317 2.36719C8.59984 2.36719 8.5665 2.37385 8.53317 2.38719L3.2465 4.38052C2.89317 4.51385 2.6665 4.84719 2.6665 5.22719V5.67385C2.05984 6.12719 1.6665 6.85385 1.6665 7.67385V5.22719C1.6665 4.43385 2.15317 3.72719 2.89317 3.44719L8.1865 1.44719C8.33317 1.39385 8.4865 1.36719 8.63317 1.36719C9.29984 1.36719 9.89984 1.90719 9.89984 2.63385Z" fill="#2467E3"></path><path d="M14.3331 9.66732V10.334C14.3331 10.514 14.1931 10.6607 14.0065 10.6673H13.0331C12.6798 10.6673 12.3598 10.4073 12.3331 10.0607C12.3131 9.85398 12.3931 9.66065 12.5265 9.52732C12.6465 9.40065 12.8131 9.33398 12.9931 9.33398H13.9998C14.1931 9.34065 14.3331 9.48732 14.3331 9.66732Z" fill="#2467E3"></path><path d="M12.9865 8.63268H13.6665C14.0332 8.63268 14.3332 8.33268 14.3332 7.96602V7.67268C14.3332 6.29268 13.2065 5.16602 11.8265 5.16602H4.17317C3.6065 5.16602 3.0865 5.35268 2.6665 5.67268C2.05984 6.12602 1.6665 6.85268 1.6665 7.67268V12.1593C1.6665 13.5393 2.79317 14.666 4.17317 14.666H11.8265C13.2065 14.666 14.3332 13.5393 14.3332 12.1593V12.0327C14.3332 11.666 14.0332 11.366 13.6665 11.366H13.0865C12.4465 11.366 11.8332 10.9727 11.6665 10.3527C11.5265 9.84602 11.6932 9.35935 12.0265 9.03268C12.2732 8.77935 12.6132 8.63268 12.9865 8.63268ZM9.33317 8.49935H4.6665C4.39317 8.49935 4.1665 8.27268 4.1665 7.99935C4.1665 7.72602 4.39317 7.49935 4.6665 7.49935H9.33317C9.6065 7.49935 9.83317 7.72602 9.83317 7.99935C9.83317 8.27268 9.6065 8.49935 9.33317 8.49935Z" fill="#2467E3"></path></svg>), label: "Accounts", active: props.isActive ? true : false},
  
      //  PAYMENTS SECTION
    {
      fileLink: '/payment',
       icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M8.67367 1.94687L12.607 3.69354C13.7403 4.19354 13.7403 5.02021 12.607 5.52021L8.67367 7.26687C8.22701 7.46687 7.49367 7.46687 7.04701 7.26687L3.11367 5.52021C1.98034 5.02021 1.98034 4.19354 3.11367 3.69354L7.04701 1.94687C7.49367 1.74688 8.22701 1.74688 8.67367 1.94687Z" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 7.33398C2 7.89398 2.42 8.54065 2.93333 8.76732L7.46 10.7807C7.80667 10.934 8.2 10.934 8.54 10.7807L13.0667 8.76732C13.58 8.54065 14 7.89398 14 7.33398" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 10.666C2 11.286 2.36667 11.846 2.93333 12.0993L7.46 14.1127C7.80667 14.266 8.2 14.266 8.54 14.1127L13.0667 12.0993C13.6333 11.846 14 11.286 14 10.666" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), label: "Payments", active: props.isActive ? true : false },
  
  
      //  Transactions
    {
      fileLink: '',
       icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M8.67367 1.94687L12.607 3.69354C13.7403 4.19354 13.7403 5.02021 12.607 5.52021L8.67367 7.26687C8.22701 7.46687 7.49367 7.46687 7.04701 7.26687L3.11367 5.52021C1.98034 5.02021 1.98034 4.19354 3.11367 3.69354L7.04701 1.94687C7.49367 1.74688 8.22701 1.74688 8.67367 1.94687Z" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 7.33398C2 7.89398 2.42 8.54065 2.93333 8.76732L7.46 10.7807C7.80667 10.934 8.2 10.934 8.54 10.7807L13.0667 8.76732C13.58 8.54065 14 7.89398 14 7.33398" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 10.666C2 11.286 2.36667 11.846 2.93333 12.0993L7.46 14.1127C7.80667 14.266 8.2 14.266 8.54 14.1127L13.0667 12.0993C13.6333 11.846 14 11.286 14 10.666" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), label: "Transactions", active: props.isActive},
  
      //  Cards 
    {fileLink: '',
       icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M1.33301 5.66992H14.6663" stroke="#A3ADC2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 11.0039H5.33333" stroke="#A3ADC2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 11.0039H9.66667" stroke="#A3ADC2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.29301 2.33594H11.6997C14.073 2.33594 14.6663 2.9226 14.6663 5.2626V10.7359C14.6663 13.0759 14.073 13.6626 11.7063 13.6626H4.29301C1.92634 13.6693 1.33301 13.0826 1.33301 10.7426V5.2626C1.33301 2.9226 1.92634 2.33594 4.29301 2.33594Z" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), label: "Cards", active: props.isActive },
  
  // Reports and Statements
    { 
      fileLink: '',
      icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M14.667 4.00065V5.61398C14.667 6.66732 14.0003 7.33398 12.947 7.33398H10.667V2.67398C10.667 1.93398 11.2737 1.33398 12.0137 1.33398C12.7403 1.34065 13.407 1.63398 13.887 2.11398C14.367 2.60065 14.667 3.26732 14.667 4.00065Z" stroke="#A3ADC2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.33301 4.66732V14.0007C1.33301 14.554 1.95966 14.8673 2.39966 14.534L3.53967 13.6807C3.80634 13.4807 4.17968 13.5073 4.41968 13.7473L5.52633 14.8607C5.78633 15.1207 6.21302 15.1207 6.47302 14.8607L7.59302 13.7407C7.82635 13.5073 8.19968 13.4807 8.45968 13.6807L9.59969 14.534C10.0397 14.8607 10.6663 14.5473 10.6663 14.0007V2.66732C10.6663 1.93398 11.2663 1.33398 11.9997 1.33398H4.66634H3.99967C1.99967 1.33398 1.33301 2.52732 1.33301 4.00065V4.66732Z" stroke="#A3ADC2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 6H8" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.5 8.66602H7.5" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), label: "Reports & Statements", active: props.isActive},
  
      // Community
    { 
      fileLink: '',
      icon: (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M6.10668 7.24683C6.04001 7.24016 5.96001 7.24016 5.88668 7.24683C4.30001 7.1935 3.04001 5.8935 3.04001 4.2935C3.04001 2.66016 4.36001 1.3335 6.00001 1.3335C7.63334 1.3335 8.96001 2.66016 8.96001 4.2935C8.95334 5.8935 7.69334 7.1935 6.10668 7.24683Z" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.94 2.6665C12.2333 2.6665 13.2733 3.71317 13.2733 4.99984C13.2733 6.25984 12.2733 7.2865 11.0267 7.33317C10.9733 7.3265 10.9133 7.3265 10.8533 7.33317" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.77332 9.7065C1.15999 10.7865 1.15999 12.5465 2.77332 13.6198C4.60666 14.8465 7.61332 14.8465 9.44666 13.6198C11.06 12.5398 11.06 10.7798 9.44666 9.7065C7.61999 8.4865 4.61332 8.4865 2.77332 9.7065Z" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.2267 13.3335C12.7067 13.2335 13.16 13.0402 13.5333 12.7535C14.5733 11.9735 14.5733 10.6868 13.5333 9.90683C13.1667 9.62683 12.72 9.44016 12.2467 9.3335" stroke="#A3ADC2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), label: "Community", active: props.isActive },
  ]
  
  return (
    <aside className="sidebar">
      <nav>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.fileLink} className={`nav-item ${item.active ? "active" : ""}`}>
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar;
