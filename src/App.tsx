import { useState } from 'react'
import './App.css'

function App() {
  const [ethPrice, setEthPrice] = useState();
  const [check, setCheck] = useState(false);
  // const [rate, setRates] = useState();

  const toggleClick = () => {
    setCheck(prevState=> !prevState);
  }
  const onChangeEthPrice = (event:any) => {
    setEthPrice(event.currentTarget.value)
  }

  return (
    <>
      <div className='block'>
        <label className='label' htmlFor="eth">
          ETH Amount:
          <input value={ethPrice} onChange={onChangeEthPrice} type="text" id='eth' />
        </label>
      </div>
      <div className='block'>
        <label className='label' onClick={toggleClick} htmlFor="action">
          Action:
          <input type="checkbox" id='action' />
          <span>{check? "Sell":"Buy"}</span>
        </label>
      </div>
      <div className='block'>
        <label className='label' htmlFor="usdt">
          You will receive:
          <input value={ethPrice} type="text" id='usdt' />
        </label>
      </div>
    </>
  )
}

export default App
