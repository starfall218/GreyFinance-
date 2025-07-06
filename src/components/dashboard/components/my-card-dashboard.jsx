import { useState, useEffect } from 'react';
import Header from './othersectionsHeader';
import Sidebar from './Sidebar';
// https://app.grey.co/assets/earth-carousel-BaFbJlbq.webp
// https://app.grey.co/assets/carousel-card-DR_RGgPW.webp
// https://app.grey.co/assets/brand-carousel-qWt80Pwf.webp
import './usercard-dashboard.css'

function userCard(){
  const sliderAttrivutes = [
    {
      src: 'https://app.grey.co/assets/earth-carousel-BaFbJlbq.webp',
      p: 'Shop without restrictions',
    },
    {
      src: 'https://app.grey.co/assets/carousel-card-DR_RGgPW.webp',
      p: 'Truly global.1 card. 80 countries. > 10000 merchants',
    },
    {
      src: 'https://app.grey.co/assets/brand-carousel-qWt80Pwf.webp',
      p: 'Stream without interruption'



    },
  ];

  const [box, setBox] = useState({
    imgLinkDesc: sliderAttrivutes[0].src,
    p: sliderAttrivutes[0].p,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateBox = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderAttrivutes.length);
  };

  useEffect(() => {
    const interval = setInterval(updateBox, 9000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const current = sliderAttrivutes[currentIndex];
    setBox({
      imgLinkDesc: current.src,
      p: current.p,
    });
  }, [currentIndex]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <div className="the-board-box flex">
      <Sidebar isOpen={sidebarOpen}/>
    <div className="main-dashboard-stuff w-12/12">
      <Header name='Card' toggleSidebar={()=>{
        setSidebarOpen(prev => !prev)
      }}/>
      <div className="main-sect-for-card flex">
      <div className="img-slider-cards flex-col ">
        <img  src={box.imgLinkDesc} alt="Slider image description"/>
        <p className='only-mobile-card'>{box.p}</p>
      </div>
      <div className="cards-text-content flex flex-col gap-3.5">
        <h1>Get a prepaid card instantly</h1>
        <ul>
          <li>
            <div className="cards-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.05999 8.85335H6.11999V13.6533C6.11999 14.7733 6.72665 15 7.46665 14.16L12.5133 8.42668C13.1333 7.72668 12.8733 7.14668 11.9333 7.14668H9.87332V2.34668C9.87332 1.22668 9.26665 1.00001 8.52665 1.84001L3.47999 7.57335C2.86665 8.28001 3.12665 8.85335 4.05999 8.85335Z" stroke="#2467E3" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            Faster international payments
          </li>
          <li>
            <div className="cards-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10.0005 18.2037C14.532 18.2037 18.2056 14.5302 18.2056 9.99859C18.2056 5.46702 14.532 1.79346 10.0005 1.79346C5.46891 1.79346 1.79535 5.46702 1.79535 9.99859C1.79535 14.5302 5.46891 18.2037 10.0005 18.2037Z" stroke="#2467E3" stroke-width="1.23077" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.71835 2.61377H7.53887C5.93887 7.40556 5.93887 12.5912 7.53887 17.383H6.71835" stroke="#2467E3" stroke-width="1.23077" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.462 2.61377C14.062 7.40556 14.062 12.5912 12.462 17.383" stroke="#2467E3" stroke-width="1.23077" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.61584 13.2805V12.46C7.40764 14.06 12.5933 14.06 17.3851 12.46V13.2805" stroke="#2467E3" stroke-width="1.23077" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.61584 7.53716C7.40764 5.93716 12.5933 5.93716 17.3851 7.53716" stroke="#2467E3" stroke-width="1.23077" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
          Globally accepted
          </li>
          <li>
              <div className="cards-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.33325 1.33325H2.49326C3.21326 1.33325 3.77992 1.95325 3.71992 2.66659L3.16659 9.30658C3.07325 10.3932 3.93325 11.3266 5.02658 11.3266H12.1266C13.0866 11.3266 13.9266 10.5399 13.9999 9.58659L14.3599 4.58659C14.4399 3.47992 13.5999 2.57992 12.4866 2.57992H3.87992" stroke="#2467E3" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.8333 14.6667C11.2936 14.6667 11.6667 14.2936 11.6667 13.8333C11.6667 13.3731 11.2936 13 10.8333 13C10.3731 13 10 13.3731 10 13.8333C10 14.2936 10.3731 14.6667 10.8333 14.6667Z" stroke="#2467E3" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.50008 14.6667C5.96032 14.6667 6.33341 14.2936 6.33341 13.8333C6.33341 13.3731 5.96032 13 5.50008 13C5.03984 13 4.66675 13.3731 4.66675 13.8333C4.66675 14.2936 5.03984 14.6667 5.50008 14.6667Z" stroke="#2467E3" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 5.33325H14" stroke="#2467E3" stroke-width="1.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>
              Works on all your favourite stores
          </li>
          <li>
            <div className="cards-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5.07739 8.35756V6.71653C5.07739 4.00064 5.89791 1.79346 10.0005 1.79346C14.103 1.79346 14.9235 4.00064 14.9235 6.71653V8.35756" stroke="#2467E3" stroke-width="1.23077" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.103 18.2036H5.89791C2.61586 18.2036 1.79535 17.3831 1.79535 14.101V12.46C1.79535 9.17793 2.61586 8.35742 5.89791 8.35742H14.103C17.3851 8.35742 18.2056 9.17793 18.2056 12.46V14.101C18.2056 17.3831 17.3851 18.2036 14.103 18.2036Z" stroke="#2467E3" stroke-width="1.23077" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.2796 13.2806H13.287" stroke="#2467E3" stroke-width="1.64103" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.99675 13.2806H10.0041" stroke="#2467E3" stroke-width="1.64103" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.71392 13.2806H6.72129" stroke="#2467E3" stroke-width="1.64103" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            Heavily secure
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
}
export default userCard;