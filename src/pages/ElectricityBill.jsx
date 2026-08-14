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
    <section className="w-full bg-[#eee9e0] px-5 py-10 text-left font-sans text-[#211f1b] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-0 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pt-5 text-3xl font-bold text-[#211f1b]">ELECTRICITY BILL CALCULATOR</h1>
        <p className="mb-6 border-l-8 border-[#c9652d] bg-[#faf6ef] px-5 pb-5 pt-2 text-sm text-[#6b6259]">
          Enter the customer details to calculate the electricity bill.
        </p>
        <div className="mb-6 border-t border-[#c9652d]"></div>

        <div className="max-w-sm border border-[#d8d0c5] bg-white p-5">
          <div className="mb-3">
            <label htmlFor="customerName" className="mb-1 block text-sm font-medium">
              CUSTOMER NAME:
            </label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
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
              className="w-full border border-[#cabfb2] bg-white px-2 py-2 text-[#211f1b] outline-none focus:border-[#c9652d]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCalculateBill}
              className="cursor-pointer border border-[#c9652d] bg-[#c9652d] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ad5425]"
            >
              CALCULATE BILL
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="cursor-pointer border border-[#211f1b] bg-[#211f1b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#332f2a]"
            >
              CLEAR
            </button>
          </div>
        </div>

        {rate !== 0 ? (
          <div className="mt-6 max-w-sm border border-[#d8d0c5] border-l-4 border-l-[#c9652d] bg-white p-5">
            <h2 className="mb-3 text-lg font-bold text-[#211f1b]">BILL RESULT</h2>
            <p className="mb-1"><span className="font-semibold">Customer Name:</span> {customerName}</p>
            <p className="mb-1"><span className="font-semibold">Consumption:</span> {consumption} kWh</p>
            <p className="mb-1"><span className="font-semibold">Rate Applied:</span> ₱{rate}/kWh</p>
            <p className="mb-1"><span className="font-semibold">Total Bill:</span> ₱{totalBill}</p>
            <p><span className="font-semibold">Usage Status:</span> {status}</p>
          </div>
        ) : null}

        {message !== '' ? (
          <div className="mt-5 max-w-sm border-l-4 border-[#a6422e] bg-[#fff3ee] px-4 py-3 text-sm text-[#8f2f20]">
            {message}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ElectricityBill
