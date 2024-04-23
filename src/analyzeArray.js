const getAverage = (array) => {
  const sum = array.reduce((acc, i) => acc + i, 0);
  return sum / array.length;
};

const getMin = (array) => {
  return Math.min(...array);
};

const getMax = (array) => {
  return Math.max(...array);
};

const getLength = (array) => {
  return array.length;
};

const analyzeArray = (array) => {
  const average = getAverage(array);
  const min = getMin(array);
  const max = getMax(array);
  const length = getLength(array);

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = analyzeArray;
