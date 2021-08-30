// создать класс Notifier с методом send
// send принимает текст сообщения -> выводит в консоль
// создать класс BaseNotifier
// constructor принимает component
// send принимает текст сообщения -> вызывает такой же метод компонента

// создать класс SmsNotifier унаследовать его от BaseNotifier
// constructor принимает component и phone
// метод send принимает текст сообщения -> вызывает такой же метод компонента 
// аналогично создать декоратор EmailNotifier

class Notifier {
  send(message) {
    console.log(`Default - ${message}.`);
  }
}

class BaseNotifier {
  constructor(component) {
    this.component = component;
  }
  
  send(message) {
    this.component.send(message);
  }
}

class SmsNotifier extends BaseNotifier{
  constructor(component, phone) {
    super(component);
    this.phone = phone;
  }
  
  send(message) {
    super.send(message);
    console.log(`Message - ${message} sent to ${this.phone}`);
  }
}

class EmailNotifier extends BaseNotifier {
  constructor(component, email) {
    super(component);
    this.email = email;
  }
  
  send(message) {
    super.send(message);
    console.log(`Email for ${this.email} - ${message}`);
  }
}

const notifier = new Notifier();
const sms = new SmsNotifier(notifier, '+79851256398');
const mail = new EmailNotifier(sms, 'name@epam.com');
mail.send('hey, there.');
