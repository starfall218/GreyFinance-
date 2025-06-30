import React from 'react';
import './QuickActions.css';

const QuickActions = () => {
  const actions = [
    {
      icon: 'https://app.grey.co/assets/send-_l_QrXuZ.svg', 
      title: 'Send Money',
      description: 'Send money to 80+ countries instantly',
    },
    {
      icon: 'https://app.grey.co/assets/receipt-Cnm8j2gl.svg', 
      title: 'Invoices',
      description: 'Create and send multi-currency invoices to clients and employers',
    },
    {
      icon: 'https://app.grey.co/assets/credit-card-Y0BClhDo.svg', 
      title: 'Virtual card',
      description: 'Shop, subscribe and pay bills online',
    },
    {
      icon: 'https://app.grey.co/assets/bill-CiVzgNHd.svg', 
      title: 'Pay Bills',
      description: 'Pay for your internet, cable subscription and other utility bills all in one place',
    },

  ];

  return (
    <div className="quick-actions-section">
      <h2 className="section-title">Quick Actions</h2>
      <div className="actions-container">
        {actions.map((action, index) => (
          <div className="action-card" key={index}>
            <div className="action-icon">
              <img src={action.icon} alt={action.title} />
            </div>
            <h3 className="card-title">{action.title}</h3>
            <p className="card-description">{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;