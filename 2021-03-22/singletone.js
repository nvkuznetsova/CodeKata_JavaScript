// создать сервис PaymentService, 
// поле bills - массив чисел (оплаченные суммы)
// с методами 
// getResult - возвращает сумму всех счетов, 
// addBill - добавляет счет в массив счетов
// организовать код таким образом, 
// чтобы у нас была возможность создать несколько перменных
// со ссылками на PaymentService
// нужно достичь того, чтобы все внесенные счета  суммировались


const getService = (function () {
  let instance;

  class PaymentService {
    constructor() {
      this.bills = [];
    }
  
    addBill(bill) {
      this.bills.push(bill);
    }
  
    getResult() {
      return this.bills.reduce((acc, item) => {
        return acc +=item;
      }, 0)
    }
  };

  instance = new PaymentService;

  return function() {
    return instance;
  }
})();

// const ps = getService();
// ps.addBill(100);
// ps.addBill(200);

// const ps2 = getService();
// ps2.addBill(1000);
// ps2.addBill(2000);
// console.log(ps.getResult(), ps2.getResult());
// console.log(ps === ps2);
