// создать сервис PaymentService, 
// поле bills - массив чисел (оплаченные суммы)
// с методами 
// getResult - возвращает сумму всех счетов, 
// addBill - добавляет счет в массив счетов


// организовать код таким образом, 
// чтобы у нас была возможность создать несколько перменных
// со ссылками на PaymentService
// нужно достичь того, чтобы все внесенные счета  суммировались



const getPS = (function getPaymentService() {
  class PaymentService {
  
    constructor() {
      this.bills = [];
    }
    
    getResult() {
      return this.bills.reduce((acc, item) => acc += item, 0)
    }
    
    addBill(bill) {
      this.bills.push(bill);
    }
  }
  
  let instance;
  
  return () => {
    if (!instance) {
      instance = new PaymentService;
    }
  
    return instance;
  };
})();


const PS = getPS();

PS.addBill(500);
PS.addBill(400);
PS2 = getPS();
PS2.addBill(1000);
console.log(PS.getResult());






class PaymentServiceNew {
  constructor() {
    if(PaymentServiceNew._instance){
      return PaymentServiceNew._instance;
    }
    PaymentServiceNew._instance = this;
    this.bills = []
  }
     getResult() {
      return this.bills.reduce((acc, item) => acc += item, 0)
    }
    
    addBill(bill) {
      this.bills.push(bill);
    }
}

const PSNew = new PaymentServiceNew;
PSNew.addBill(20);
PSNew.addBill(20);
PSNew.addBill(20);

const PSNew2 = new PaymentServiceNew;
PSNew2.addBill(20);

console.log(PSNew.getResult())