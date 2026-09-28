var totalNumbers = function (digits) {
  const nombres = new Set();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) {
      continue;
    }
    for (let j = 0; j < digits.length; j++) {
      if (i === j) {
        continue;
      }

      for (let k = 0; k < digits.length; k++) {
        if (i === k || j === k) {
          continue;
        }
        if (digits[k] % 2 === 0) {
          const nombre = digits[i] * 100 + digits[j] * 10 + digits[k];

          nombres.add(nombre);
        }
      }
    }
  }

  return nombres.size;
};
