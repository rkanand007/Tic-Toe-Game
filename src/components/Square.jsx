import React from 'react';

export const Square = props => {
  console.log(props);

  return <button type="button">{props.value}</button>;
};
export default Square;
