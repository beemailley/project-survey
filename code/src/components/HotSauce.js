import React from 'react';

export const HotSauce = ({ hotsauce, setHotSauce }) => {
  const handleHotSauceSelection = (event) => {
    setHotSauce(event.target.value)
  }
  return (
    <>
      <div className="icon-wrapper">
        <img src="./assets/hotsauce.png" alt="hot sauce icon" />
      </div>
      <p>Food is just a vehicle for hot sauce!</p>
      <select value={hotsauce} onChange={handleHotSauceSelection}>
        <option disabled value="">Agree or Disagree?</option>
        <option value="definitely">definitely!!</option>
        <option value="not really">erm, not really</option>
      </select>
    </>
  )
}