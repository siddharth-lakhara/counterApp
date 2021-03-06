export const increment = count => ({
  type: 'INCREMENT',
  payload: count,
});


export const decrement = count => ({
  type: 'DECREMENT',
  payload: count,
});

export default {
  increment,
  decrement,
};
