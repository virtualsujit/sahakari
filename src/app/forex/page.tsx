import React from "react";

const currencyData = {
  currencies: [
    { name: "Indian Rupee", unit: 100, buy: 160.0, sell: 160.15 },
    { name: "U.S. Dollar", unit: 1, buy: 134.04, sell: 134.64 },
    { name: "European Euro", unit: 1, buy: 146.32, sell: 146.98 },
    { name: "UK Pound Sterling", unit: 1, buy: 171.08, sell: 171.84 },
    { name: "Swiss Franc", unit: 1, buy: 154.88, sell: 155.57 },
    { name: "Australian Dollar", unit: 1, buy: 88.1, sell: 88.49 },
    { name: "Canadian Dollar", unit: 1, buy: 97.62, sell: 98.06 },
    { name: "Singapore Dollar", unit: 1, buy: 101.19, sell: 101.65 },
    { name: "Japanese Yen", unit: 10, buy: 9.14, sell: 9.18 },
    { name: "Chinese Yuan", unit: 1, buy: 18.7, sell: 18.79 },
    { name: "Saudi Arabian Riyal", unit: 1, buy: 35.74, sell: 35.9 },
    { name: "Qatari Riyal", unit: 1, buy: 36.76, sell: 36.92 },
    { name: "Thai Baht", unit: 1, buy: 3.8, sell: 3.82 },
    { name: "UAE Dirham", unit: 1, buy: 36.49, sell: 36.66 },
    { name: "Malaysian Ringgit", unit: 1, buy: 30.31, sell: 30.44 },
    { name: "South Korean Won", unit: 100, buy: 9.82, sell: 9.86 },
    { name: "Swedish Kroner", unit: 1, buy: 12.74, sell: 12.8 },
    { name: "Danish Kroner", unit: 1, buy: 19.61, sell: 19.69 },
    { name: "Hong Kong Dollar", unit: 1, buy: 17.19, sell: 17.27 },
    { name: "Kuwaiti Dinar", unit: 1, buy: 437.88, sell: 439.84 },
    { name: "Bahrain Dinar", unit: 1, buy: 355.54, sell: 357.14 },
  ],
};

const CurrencyTable = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full table-auto">
        <thead className=" bg-[#32488A] text-white">
          <tr>
            <th className="px-4 py-2">Currency</th>
            <th className="px-4 py-2">Unit</th>
            <th className="px-4 py-2">Buy</th>
            <th className="px-4 py-2">Sell</th>
          </tr>
        </thead>
        <tbody>
          {currencyData.currencies.map((currency, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <td className="px-4 py-2 text-gray-800">{currency.name}</td>
              <td className="px-4 py-2 text-gray-800">{currency.unit}</td>
              <td className="px-4 py-2 text-gray-800">{currency.buy}</td>
              <td className="px-4 py-2 text-gray-800">{currency.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
