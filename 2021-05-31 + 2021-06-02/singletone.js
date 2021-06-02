// создать сервис PaymentService, 
// поле bills - массив чисел (оплаченные суммы)
// с методами 
// getResult - возвращает сумму всех счетов, 
// addBill - добавляет счет в массив счетов
// организовать код таким образом, 
// чтобы у нас была возможность создать несколько перменных
// со ссылками на PaymentService
// нужно достичь того, чтобы все внесенные счета  суммировались


// правильная реализация
// так как мы используем IIFE мы будем иметь тлько один экземпляр instance
// к которому мы имеет доступ, использую замыкание
// так как instance и PaymentService определены 
// в фукциональной области видимости IIFE
// мы не имеем доступ к ним из глобальной облаисти видимости
// иследовательно они защащены, что позволяет реализовать синглтон 
// вызывая getService выполнятся только код, который написан в строке 36
const getService = (function() {
  class PaymentService {
    constructor() {
      this.bills = [];
    }
    getResult() {
      return this.bills.reduce((acc, el) => {
        return acc += el; 
      }, 0)
    }
    addBill(bill) {
      this.bills.push(bill);
    }
  }
  const instance = new PaymentService;
  return function() {
    return instance;
  }
})();

const ps1 = getService();
const ps2 = getService();
console.log(ps1 === ps2);





// неправильная реализация
// ошибка состоит в том, что весь код в getPaymentService
// выполнятся при каждом запуске функции, следовательно
// в PaymentService при каждом запуске функции оказывается 
// новое значеение, поэтому мы не можем сделать так
// чтобы ps1 === ps2 => true
// function getPaymentService() {
//   const PaymentService = (function() {
//     let bills = [];
//     return {
//       getResult() {
//         return bills.reduce((prev, cur) => prev + cur);
//       },
//       addBill(bill) {
//         bills.push(bill);
//       }
//     }
//   })();

//   return PaymentService;
// }

// const ps1 = getPaymentService();
// const ps2 = getPaymentService();

// ps1.addBill(400);
// ps1.addBill(200);
// ps2.addBill(400);
// ps2.addBill(400);
// console.log(ps1.getResult(),ps2.getResult(), ps1 === ps2);



// PaymentService.addBill(400);
// PaymentService.addBill(800);
// console.log(PaymentService.getResult());
