// создать класс Notifier с методом send
// send принимает текст сообщения -> выводит в консоль
// создать класс BaseNotifier
// constructor принимает component
// send принимает текст сообщения -> вызывает такой же метод компонента
// создать класс SmsNotifier унаследовать его от BaseNotifier
// constructor принимает component и number
// метод send принимает текст сообщения -> вызывает такой же метод компонента 
// аналогично создать декоратор EmailNotifier

class Notifier {
  send(message) {
    console.log(`Default seder - ${message}`);
  }
}

class BaseDecorator {
  constructor(component) {
    this.component = component;
  }
  send(message) {
    this.component.send(message);
  }
}

class SmsNotifier extends BaseDecorator {
  constructor(component, number) {
    super(component);
    this.number = number;
  }
  send(message) {
    super.send(message);
    console.log(`Sms seder to ${this.number} - ${message}`);
  }
}

class EmailNotifier extends BaseDecorator {
  constructor(component, email) {
    super(component);
    this.email = email;
  }
  send(message) {
    super.send(message);
    console.log(`Email seder to ${this.email} - ${message}`);
  }
}

// const notifier = new EmailNotifier(
//   new SmsNotifier(new Notifier, '+79212687453'),
//   'mail@epam.com'
// );

// notifier.send('hi');



















































































// class Notifier {
//   send(message) {
//     console.log(`Default sender - ${message}`)
//   }
// }

// class BaseNotifier {
//   constructor(component) {
//     this.component = component;
//   }

//   send(message) {
//     this.component.send(message);
//   }
// }

// class SmsNotifier extends BaseNotifier {
//   constructor(component, number) {
//     super(component);
//     this.number = number;
//   }

//   send(message) {
//     super.send(message);
//     console.log(`Send SMS to ${this.number} - ${message}`);
//   }
// }

// class EmailNotifier extends BaseNotifier {
//   constructor(component, email) {
//     super(component);
//     this.email = email;
//   }

//   send(message) {
//     super.send(message);
//     console.log(`Send email to ${this.email} - ${message}`);
//   }
// }

// const notifier = new EmailNotifier(
//   new SmsNotifier(new Notifier, '+79119563257'),
//   'email@epam.com'
// );
// console.log(notifier);
// notifier.send('hi');




