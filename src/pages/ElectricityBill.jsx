import { useState } from 'react'

function ElectricityBill() {
  const [customerName, setCustomerName] = useState('')
  const [consumption, setConsumption] = useState('')
  const [rate, setRate] = useState(0)
  const [totalBill, setTotalBill] = useState(0)
  const [status, setStatus] = useState('')
  const [message, setMessage] = useState('')

  function handleCalculateBill() {
    const numericConsumption = Number(consumption)
    let appliedRate

    setRate(0)
    setTotalBill(0)
    setStatus('')
    setMessage('')

    if (customerName === '') {
      setMessage('Please enter customer name.')
    } else if (consumption === '') {
      setMessage('Please enter consumption in kWh.')
    } else if (isNaN(numericConsumption)) {
      setMessage('Please enter a valid numeric consumption.')
    } else if (numericConsumption < 0) {
      setMessage('Consumption cannot be negative.')
    } else {
      if (numericConsumption <= 100) {
        appliedRate = 10
      } else if (numericConsumption <= 200) {
        appliedRate = 12
      } else if (numericConsumption <= 300) {
        appliedRate = 15
      } else {
        appliedRate = 18
      }

      const calculatedTotal = numericConsumption * appliedRate

      setRate(appliedRate)
      setTotalBill(calculatedTotal)

      if (calculatedTotal >= 5000) {
        setStatus('High Electricity Usage')
      } else {
        setStatus('Normal Electricity Usage')
      }
    }
  }

  function handleClear() {
    setCustomerName('')
    setConsumption('')
    setRate(0)
    setTotalBill(0)
    setStatus('')
    setMessage('')
  }

  return (
    <section className="w-full px-5 py-8 text-left font-sans text-[#222] sm:px-8">
      <div className="max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-[#222]">ELECTRICITY BILL CALCULATOR</h1>
        <p className="mb-5 text-sm text-gray-600">
          Enter the customer details to calculate the electricity bill.
        </p>
        <div className="mb-6 border-t border-gray-300"></div>

        <div className="max-w-sm">
          <div className="mb-3">
            <label htmlFor="customerName" className="mb-1 block text-sm font-medium">
              CUSTOMER NAME:
            </label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="consumption" className="mb-1 block text-sm font-medium">
              CONSUMPTION IN KWH:
            </label>
            <input
              id="consumption"
              type="number"
              step="any"
              value={consumption}
              onChange={(event) => setConsumption(event.target.value)}
              className="w-full border border-gray-400 bg-white px-2 py-2 text-[#222] outline-none focus:border-gray-700"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCalculateBill}
              className="cursor-pointer border border-gray-500 bg-gray-100 px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              CALCULATE BILL
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer border border-gray-500 bg-white px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-200"
            >
              CLEAR
            </button>
          </div>
        </div>

        {rate !== 0 ? (
          <div className="mt-6 max-w-sm bg-gray-100 p-5">
            <h2 className="mb-3 text-lg font-bold text-[#222]">BILL RESULT</h2>
            <p className="mb-1"><span className="font-semibold">Customer Name:</span> {customerName}</p>
            <p className="mb-1"><span className="font-semibold">Consumption:</span> {consumption} kWh</p>
            <p className="mb-1"><span className="font-semibold">Rate Applied:</span> ₱{rate}/kWh</p>
            <p className="mb-1"><span className="font-semibold">Total Bill:</span> ₱{totalBill}</p>
            <p><span className="font-semibold">Usage Status:</span> {status}</p>
          </div>
        ) : null}

        {message !== '' ? (
          <div className="mt-5 max-w-sm border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700">
            {message}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ElectricityBill
