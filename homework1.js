function fibonacci(n) {

    let a = 0, b = 1;
    let result = [a, b];
  

    for (let i = 2; i < n; i++) {
      let temp = b;
      b = a + b;
      a = temp;
      result.push(b);
    }
  

    return {
      nth: b,
      sequence: result
    };
  }

  let n = 10;
  let { nth, sequence } = fibonacci(n);
  console.log(`第 ${n} 项是 ${nth}`);
  console.log(`斐波那契数列前 ${n} 项是 ${sequence}`);
  