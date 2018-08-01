
function sum(...args) {
  return [...args].reduce((prev, item) => {
    return prev + item;
  })
}

exports = {
  sum
}