var maxDepth = function (s) {
  let profondeur = 0;
  let maxDepth = 0;

  for (const caractere of s) {
    if (caractere === "(") {
      profondeur++;

      if (profondeur > maxDepth) {
        maxDepth = profondeur;
      }
    }

    if (caractere === ")") {
      profondeur--;
    }
  }

  return maxDepth;
};
