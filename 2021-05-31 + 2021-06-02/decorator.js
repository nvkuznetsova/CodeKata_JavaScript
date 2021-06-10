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
    console.log(`Default - ${message}`);
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
  constructor(component, phone) {
    super(component);
    this.phone = phone;
  }
  send(message) {
    super.send(message);
    console.log(`sms to ${this.phone} - ${message}`);
  }
}

class EmailNotifier extends BaseDecorator {
  constructor(component, mail) {
    super(component);
    this.mail = mail;
  }
  send(message) {
    super.send(message);
    console.log(`email to ${this.mail} - ${message}`);
  }
}

const notifier = new SmsNotifier(
  new EmailNotifier(
    new Notifier,
    'example@epam.com'
  ),
  '+79854521256',
);

// notifier.send('Hi there!!');
