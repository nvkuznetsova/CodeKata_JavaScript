// создать сервис PaymentService, 
// поле bills - массив чисел (оплаченные суммы)
// с методами 
// getResult - возвращает сумму всех счетов, 
// addBill - добавляет счет в массив счетов
// организовать код таким образом, 
// чтобы у нас была возможность создать несколько перменных
// со ссылками на PaymentService
// нужно достичь того, чтобы все внесенные счета  суммировались

const getService = (function() {
  class PaymentService {
    constructor() {
      this.bills = [];
    }
    
    addBill(bill) {
      this.bills.push(bill);
    }
    
    getResult() {
      return this.bills.reduce((acc, current) => acc + current , 0);
    }
  }

  let paymentService = new PaymentService;
  
  return function () {
    return paymentService;
  }
})();


const service = getService();
const service2 = getService();
  
console.log(service === service2);
