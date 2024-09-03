function bernoulliSequence(n) {
  let sequence = [1]; // The first Bernoulli number is 1
  for (let i = 1; i < n; i++) {
    sequence[i] = 0; // Initialize the next Bernoulli number to 0
    for (let k = 0; k < i; k++) {
      sequence[i] -= sequence[k] / (k + 1) * choose(i, k);
    }
  }
  return sequence;
}

function choose(n, k) {
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  let result = n;
  for (let i = 2; i <= k; i++) {
    result *= (n - i + 1);
    result /= i;
  }
  return result;
}
