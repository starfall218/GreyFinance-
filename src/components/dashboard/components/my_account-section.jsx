import React, { useState } from 'react';
import './MyBalances.css';

const MyBalances = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState('USD'); // Default active currency

  const currencies = [
    { code: 'USD', flag: '🇺🇸' },
    { code: 'GBP', flag: '🇬🇧' },
    { code: 'EUR', flag: '🇪🇺' },
    { code: 'NGN', flag: '🇳🇬' },
  ];

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const getMaskedValue = (value) => {
    return showBalance ? value : '******';
  };

  return (
    <div className="my-balances-card">
      <div className="card-header">
        <h3 className="card-title">
          My Balances (4)
          <button className="info-icon" aria-label="Information about balances">
            ⓘ
          </button>
        </h3>
        <button className="add-new-balance-btn">
          Add new balance <span className="plus-icon">+</span>
        </button>
      </div>

      <div className="currency-selector">
        {currencies.map((currency) => (
          <button
            key={currency.code}
            className={`currency-btn ${activeCurrency === currency.code ? 'active' : ''}`}
            onClick={() => setActiveCurrency(currency.code)}
          >
            <span className="currency-flag">{currency.flag}</span> {currency.code}
          </button>
        ))}
      </div>

      <div className="balance-details">
        <div className="balance-column">
          <p className="balance-label">
            Available USD balance
            <button className="info-icon" aria-label="Information about available balance">
              ⓘ
            </button>
          </p>
          <p className="balance-value">{getMaskedValue('12,345.67')}</p>
        </div>
        <div className="balance-column">
          <p className="balance-label">
            Pending USD balance
            <button className="info-icon" aria-label="Information about pending balance">
              ⓘ
            </button>
          </p>
          <p className="balance-value">{getMaskedValue('123.45')}</p>
        </div>
      </div>

      <div className="action-buttons">
        <button className="action-btn">
          Add Money <span className="plus-icon">+</span>
        </button>
        <button className="action-btn">
          Convert Funds <span className="exchange-icon">⇌</span>
        </button>
        <button className="action-btn">
          Send Money <span className="external-link-icon">↗</span>
        </button>
      </div>

      <button className="toggle-balance-visibility-btn" onClick={toggleBalanceVisibility}>
        {showBalance ? 'Hide Balance' : 'Show Balance'}
      </button>
    </div>
  );
};

export default MyBalances;