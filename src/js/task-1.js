const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(1000).then(logger);
delay(3000).then(logger);
delay(4000).then(logger);
delay(5000).then(logger);
delay(7000).then(logger);
