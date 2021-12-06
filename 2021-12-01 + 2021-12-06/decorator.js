// создать класс Notifier с методом send
// send принимает текст сообщения -> выводит в консоль

// создать класс BaseNotifier
// constructor принимает component
// send принимает текст сообщения -> вызывает такой же метод компонента

// создать класс SmsNotifier унаследовать его от BaseNotifier
// constructor принимает component и number
// метод send принимает текст сообщения -> вызывает такой же метод компонента 
// аналогично создать декоратор EmailNotifier





// создать класс Notifier с методом send
// send принимает текст сообщения -> выводит в консоль

class Notifier {
  send(message){
    console.log('message', message)
  }
}
// создать класс BaseNotifier
// constructor принимает component
// send принимает текст сообщения -> вызывает такой же метод компонента

class BaseNotifier{
  constructor(component){
    this.component = component
  }
  send(message){
    this.component.send(message)
  }
}
// создать класс SmsNotifier унаследовать его от BaseNotifier
// constructor принимает component и number
// метод send принимает текст сообщения -> вызывает такой же метод компонента 


class SmsNotifier extends BaseNotifier{
  constructor(component, number){
    super(component)
    this.number = number
  }
  send(message){
    super.send(message);
    console.log(`Sended to number ${this.number} - ${message}`)
  }
}

const notifier = new Notifier;
// notifier.send('new message');

const sms = new SmsNotifier(notifier, '+7 9856')

// sms.send('second message');


class EmailNotifier extends BaseNotifier{
  constructor(component, email){
    super(component)
    this.email = email
  }
  
  send(message){
    super.send(message)
    console.log(`Sended to email ${this.email} - ${message}`)
  }
}

const email = new EmailNotifier(sms, 'hhh@gmail.com')
email.send('message on email')

