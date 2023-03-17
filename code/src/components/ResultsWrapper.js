import React from 'react';
import { Results } from './Results'

export const ResultsWrapper = ({ region, flavor, season }) => {
  return (
    <>
      <h2>What a snack!</h2>
      <p>Congrats! You are...</p>
      <Results region={region} flavor={flavor} season={season} />
      {/* <p>All recipes and images are from <a href="https://houseofnasheats.com/" target="_blank" rel="noopener noreferrer">House of Nash Eats</a></p> */}
    </>
  )
}