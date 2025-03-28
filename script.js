// Função para Questão 1: Calcular Soma
function sumResult() {
    let i = 13;
    let soma = 0;
    let k = 0;
  
    while (k < i) {
      k = k + 1;
      soma = soma + k;
    }
    const sumResultElement = document.getElementById('sumResult');
    if (sumResultElement) {
      sumResultElement.innerText = soma; // Resultado é 91
    } else {
      console.error("Elemento com ID 'sumResult' não encontrado.");
    }
  }
  
  // Função para Questão 2: Verificar Fibonacci
  function setupFibonacciChecker() {
    const numberInput = document.getElementById('number-input');
    const checkButton = document.getElementById('check-button');
    const result = document.getElementById('result');
  
    if (!numberInput || !checkButton || !result) {
      console.error("Elementos para o verificador de Fibonacci não encontrados.");
      return;
    }
  
    checkButton.addEventListener('click', () => {
      const num = parseInt(numberInput.value);
  
      function isFibonacci(n) {
          if (isNaN(n) || n < 0) return false;
          let fib1 = 0;
          let fib2 = 1;
          if (n === 0 || n === 1) return true;
          while (fib2 < n) {
              [fib1, fib2] = [fib2, fib1 + fib2];
          }
          return fib2 === n;
      }
  
      if (isNaN(num)) {
        result.textContent = 'Por favor, digite um número válido.';
      } else if (isFibonacci(num)) {
        result.textContent = `O número ${num} FAZ parte da sequência de Fibonacci.`;
      } else {
        result.textContent = `O número ${num} NÃO faz parte da sequência de Fibonacci.`;
      }
    });
  }
  
  // Função para Questão 3: Status de Faturamento (com dados embutidos)
  function processBillingData() {
    // Dados do faturamento
    const data = [
          {"dia": 1,"valor": 22174.1664}, {"dia": 2,"valor": 24537.6698},{"dia": 3,"valor": 26139.6134},
          {"dia": 4,"valor": 0.0},{"dia": 5,"valor": 0.0},{"dia": 6,"valor": 26742.6612},{"dia": 7,"valor": 0.0},
          {"dia": 8,"valor": 42889.2258},{"dia": 9,"valor": 46251.174},{"dia": 10,"valor": 11191.4722},
          {"dia": 11,"valor": 0.0},{"dia": 12,"valor": 0.0},{"dia": 13,"valor": 3847.4823},{"dia": 14,"valor": 373.7838},
          {"dia": 15,"valor": 2659.7563},{"dia": 16,"valor": 48924.2448},{"dia": 17,"valor": 18419.2614},
          {"dia": 18,"valor": 0.0},{"dia": 19,"valor": 0.0},{"dia": 20,"valor": 35240.1826},
          {"dia": 21,"valor": 43829.1667},{"dia": 22,"valor": 18235.6852},{"dia": 23,"valor": 4355.0662},
          {"dia": 24,"valor": 13327.1025},{"dia": 25,"valor": 0.0},{"dia": 26,"valor": 0.0},
          {"dia": 27,"valor": 25681.8318},{"dia": 28,"valor": 1718.1221},{"dia": 29,"valor": 13220.495},
          {"dia": 30,"valor": 8414.61}
      ];
  
    const totalSpan = document.querySelector('#total span');
    const dayMostSpan = document.querySelector('#dayMost span');
    const dayLeastSpan = document.querySelector('#dayLeast span');
    const monthlyAvgSpan = document.querySelector('#monthlyAvg span');
  
    if (!totalSpan || !dayMostSpan || !dayLeastSpan || !monthlyAvgSpan) {
        console.error("Elementos para status de faturamento não encontrados.");
        return;
    }
  
    const validBillingDays = data.filter(item => item.valor > 0);
    const billingValues = validBillingDays.map(item => item.valor);
  
    const lowestBilling = billingValues.length > 0 ? Math.min(...billingValues) : 0;
    const highestBilling = data.length > 0 ? Math.max(...data.map(item => item.valor)) : 0;
    const totalSum = billingValues.reduce((sum, value) => sum + value, 0);
    const monthlyAverage = validBillingDays.length > 0 ? totalSum / validBillingDays.length : 0;
    const daysAboveAverage = billingValues.filter(value => value > monthlyAverage).length;
  
    // Formatação simples, sem o 'R$' para não depender de locale
    const formatSimple = (value) => value.toFixed(2).replace('.', ',');
  
    totalSpan.textContent = formatSimple(totalSum);
    dayMostSpan.textContent = formatSimple(highestBilling);
    dayLeastSpan.textContent = formatSimple(lowestBilling);
    monthlyAvgSpan.textContent = daysAboveAverage;
  }
  
  
  // Função para Questão 4: Calcular Percentual por Estado
  function calculateStateShare() {
    const data = { SP: 67836.43, RJ: 36678.66, MG: 29229.88, ES: 27165.48, Outros: 19849.53 };
    const list = document.getElementById('resultShare');
  
    if (!list) {
      console.error("Elemento com ID 'resultShare' não encontrado.");
      return;
    }
  
    let sum = 0;
    Object.values(data).forEach((value) => (sum += value));
  
    let percentages = {};
    if (sum > 0) {
        Object.entries(data).forEach(([state, value]) => {
          percentages[state] = ((value / sum) * 100).toFixed(2);
        });
    } else {
         Object.keys(data).forEach(state => percentages[state] = '0.00');
    }
  
    if (list.children.length >= 5) {
        list.children[0].textContent = `SP: ${percentages.SP}%`;
        list.children[1].textContent = `RJ: ${percentages.RJ}%`;
        list.children[2].textContent = `MG: ${percentages.MG}%`;
        list.children[3].textContent = `ES: ${percentages.ES}%`;
        list.children[4].textContent = `Outros: ${percentages.Outros}%`;
    } else {
        console.error("Número incorreto de elementos filhos na lista 'resultShare'.");
    }
  }
  
  // Função para Questão 5: Inverter String
  function setupWordReverser() {
    const resultSpan = document.getElementById('resultReverse');
    const wordInput = document.getElementById('wordInput');
    const button = document.getElementById('reverseButton');
  
    if (!resultSpan || !wordInput || !button) {
      console.error("Elementos para o inversor de palavras não encontrados.");
      return;
    }
  
    button.addEventListener('click', () => {
      const word = wordInput.value;
      let reversedWord = '';
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }
      resultSpan.textContent = reversedWord;
    });
  }
  
  // --- Execução Principal ---
  // Garante que o DOM esteja carregado antes de executar
  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM carregado. Executando scripts...");
    sumResult();
    setupFibonacciChecker();
    processBillingData();
    calculateStateShare();
    setupWordReverser();
    console.log("Scripts executados.");
  });