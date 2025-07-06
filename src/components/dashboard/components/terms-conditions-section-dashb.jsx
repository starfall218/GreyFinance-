import { useState } from 'react';
import Header from './othersectionsHeader';
import Sidebar from './Sidebar';
import './term-condions-dasb.css'

function TermsAndConditions (){
  const [show, setShow] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const displayBox = () => {
    return setShow(()=> !show);
  }
  return <div className="the-board0stuff flex">
    <Sidebar isOpen={sidebarOpen}/>
     
    <div className="main-dashboard-stuff w-12/12">
      <Header name='Reports & Statements' toggleSidebar={()=>{
        setSidebarOpen(prev => !prev)
      }} />
    <div className="main-sect-for-terms  flex gap-3 w-12/12">
      <div className="each-term-box  flex flex-col gap-3 cursor-pointer" onClick={displayBox}>
      <div className="cards-icon-box">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z" stroke="#2467E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 8H19" stroke="#2467E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 12H19" stroke="#2467E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17 16H19" stroke="#2467E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.50043 11.29C9.50007 11.29 10.3104 10.4796 10.3104 9.48001C10.3104 8.48038 9.50007 7.67001 8.50043 7.67001C7.50079 7.67001 6.69043 8.48038 6.69043 9.48001C6.69043 10.4796 7.50079 11.29 8.50043 11.29Z" stroke="#2467E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33" stroke="#2467E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
        <div className="terms-content">
          <h1>Proof of account</h1>
          <p>Verify your account ownership with a document from Grey, confirming it's yours.</p>

        </div>
      </div>

      <div className="each-term-box  flex flex-col gap-3">
      <div className="cards-icon-box">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.6666 6.66668V10C14.6666 13.3333 13.3333 14.6667 9.99998 14.6667H5.99998C2.66665 14.6667 1.33331 13.3333 1.33331 10V6.00001C1.33331 2.66668 2.66665 1.33334 5.99998 1.33334H9.33331" stroke="#2467E3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6666 6.66668H12C9.99998 6.66668 9.33331 6.00001 9.33331 4.00001V1.33334L14.6666 6.66668Z" stroke="#2467E3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.66669 8.66666H8.66669" stroke="#2467E3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.66669 11.3333H7.33335" stroke="#2467E3" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
        <div className="terms-content">
          <h1>Statement of Account</h1>
          <p>View and track your transactions across all your accounts easily.</p>

        </div>
      </div>

      {/* Card Three */}
      <div className="each-term-box relative  flex flex-col gap-3 z-1">
        <div className="disable-box-term absolute z-2"></div>
        <div className="coming-soon absolute z-3">
          <span>Coming soon</span>
        </div>
      <div className="cards-icon-box">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18.32 12C20.92 12 22 11 21.04 7.72C20.39 5.51 18.49 3.61 16.28 2.96C13 2 12 3.08 12 5.68V8.56C12 11 13 12 15 12H18.32Z" stroke="#DADEE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0004 14.7C19.0704 19.33 14.6304 22.69 9.58042 21.87C5.79042 21.26 2.74042 18.21 2.12042 14.42C1.31042 9.39001 4.65042 4.95001 9.26042 4.01001" stroke="#DADEE7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
        <div className="terms-content">
          <h1>Expense Insights</h1>
          <p>Take a look of your inflow and outflow activity across all your wallets</p>

        </div>
      </div>
    </div>
    </div>
    
    <div className={`blurred-box absolute z-1 w-12/12 ${show ? 'hidden' : 'flex'} items-center justify-center`}>
    <div className="each-term-box  flex flex-col gap-3 relative z-1 w-11/12 bg-white">
      <div className="cancel-icon-terms" onClick={displayBox}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.91748 5.91666L14.0836 14.0828" stroke="#2D3443" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.91677 14.0828L14.0829 5.91666" stroke="#2D3443" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
        <div className="terms-content">
          <h1>Proof of account</h1>
          <div className="curr-pick-text">
          <div className="acct-drop-curr flex flex-col">
            <div className="pick-a-currency-drop flex flex-col gap-3">
              <label htmlFor="currency-pick">Currency</label>
              <select name="currency-pick" id="">
                <option value="pounds">Select currency</option>
                <option value="pounds">Pounds</option>
                <option value="pounds">Dollars</option>
                <option value="pounds">Euros</option>
              </select>
           </div>
           <p>View and track your transactions across all your accounts easily.</p>
          </div>
          <div className="acct-pick-btns">
            <button className='cancel-box-btn'>Download proof of account</button>
            <button className='cancel-btn' onClick={displayBox}>Cancel</button>
          </div>

          </div>

        </div>
    </div>
    </div>


  </div>
}
export default TermsAndConditions;
