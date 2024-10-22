var rest = require('rest');
 
rest('/').then(function(response) {
    console.log('response: ', response);
});



function soma (...valores) {
    var total = 0

    for (const item of valores) {
      total += parseInt(item, 10)
    }

    return total
  }

  console.log(soma(1, 2, 3, 4, 50, 10, 23))

function subtracao (...valores) {
    var total = 0

    for (const item of valores) {
      total -= parseInt(item, 10)
    }

    return total
  }

  console.log(subtracao(1, 2, 3, 4, 50, 10, 23))


const alimentos = [
    { descricao: 'Tomate', quantidade: 10, valor: 10.50 },
    { descricao: 'Repolho', quantidade: 20, valor: 0.50 }
  ]

function total (...alimentos) {
    return alimentos
      .map(alimento => alimento.quantidade * alimento.valor)
      .reduce((a, b) => a + b, 0)
  }

  console.log(total(...alimentos))
  

const sum = (...values) => values.reduce((prev, current) => prev + current);

console.log(sum(1, 1, 2, 2, 3, 10, 20));

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6


  function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

sum(1, 2, 3);


  function f(a, b, ...theArgs) {
    // …
  }

  function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");

  function ignoreFirst(...[, b, c]) {
    return b + c;
  }

function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
function wrong3(...wrong,) {}
function wrong4(...wrong = []) {}

function sum() {
    return Array.prototype.filter
      .call(arguments, function (e) {
        return typeof e === 'number';
      })
      .reduce(function (prev, curr) {
        return prev + curr;
      });
  }

function filterBy(type, ...args) {
    return args.filter(function (e) {
      return typeof e === type;
    });
  }

  
// Uma requisição é feita ao back-end, informando a URL e o verbo HTTP.
// De acordo com a URL e o verbo HTTP, a API realiza uma ação.
// A API retorna os dados no formato JSON.
// A aplicação front-end pode usar esses dados retornados pela API.