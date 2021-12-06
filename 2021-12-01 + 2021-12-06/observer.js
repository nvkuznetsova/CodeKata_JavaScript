// создать класс MailDaemon
// subscribers - массив подписчиков
// subscribe - метод подписки - добавляет подпсчика
// unsubscribe - метод отписки
// notify - уведомляет подписчиков о новом сооющении, принимает сооющение

// создать класс MailBox
// конструктор принимает name - имя позователя создает соответсвующее поле
// поле mails - массив сооющений
// метод notify - принимает сообщение, добавляет в массив сообщений 
// и выводит полученное сообщение в конcоль


class MailDaemon {
  constructor() {
    this.subscribers = new Set();
  }
  
  subscribe(subscriber) {
    this.subscribers.add(subscriber);
  }
  
  unsubscribe(subscriber) {
    this.subscribers.delete(subscriber);
  }
  
  notify(message) {
    this.subscribers.forEach((subscriber) => {
      subscriber.notify(message);
    });
  }
}

class MailBox {
  constructor(name) {
    this.name = name;
    this.mails = [];
  }
  
  notify(message) {
    this.mails.push(message);
    console.log(`Hey, ${this.name}, we have got a new message: ${message}`);
  }
}

const MD = new MailDaemon;
const Alexander = new MailBox('Alexander');
const Alex = new MailBox('Alex');

MD.subscribe(Alex);
MD.subscribe(Alexander);

MD.notify('Hey there!!');
MD.unsubscribe(Alex);
MD.notify('hey there are you');
