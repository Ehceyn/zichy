const idMaker =
  new Date().getSeconds() *
  Math.floor(Math.random(8 * 3 + 3) * Math.pow(1555, 5));

export default idMaker;
