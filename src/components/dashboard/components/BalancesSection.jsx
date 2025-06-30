const balances = [
  { flag: "🇺🇸", currency: "United States Dollar", code: "USD", amount: "0.00" },
  { flag: "🇬🇧", currency: "British Pound", code: "GBP", amount: "0.00" },
  { flag: "🇪🇺", currency: "Euro", code: "EUR", amount: "0.00" },
  { flag: "🇳🇬", currency: "Nigerian Naira", code: "NGN", amount: "0.00" },
]

function BalancesSection() {
  return (
    <div className="card">
      <div className="balances-header">
        <h3>Your Balances</h3>
        <svg className="help-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="balances-grid">
        {balances.map((balance, index) => (
          <div key={index} className="balance-item">
            <div className="balance-flag">{balance.flag}</div>
            <p className="balance-currency">{balance.currency}</p>
            <p className="balance-amount">°{balance.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BalancesSection
