function random(min, max) {
  return Math.random() * (max - min) + min;
}

const fetchData = (delay = random(1000, 3000)) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return data after delay
      resolve({ data: { responseTime: Math.round(delay) } });
    }, delay);
  });
};

export default fetchData;
