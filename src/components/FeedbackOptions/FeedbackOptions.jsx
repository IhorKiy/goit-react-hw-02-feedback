import React from 'react';

export const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <form>
        <button type="submit" onClick={handleGood}>
          Good
        </button>
        <button type="submit" onClick={handleNeutral}>
          Neutral
        </button>
        <button type="submit" onClick={handleBad}>
          Bad
        </button>
      </form>
    </>
  );
};
