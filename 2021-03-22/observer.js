// создать класс MailDaemon
// subscribers - массив подписчикоа
// subscribe - метод подписки - добавляет подпсчика
// unsubscribe - метод отписки
// notify - уведомляет подписчика о новом сооющении, принимает сооющение

// создать класс MailBox
// конструктор принимает name - имя позователя создаесоответсвующее поле
// поле mails - массив сооющений
// метод notify - принимает сооющение, добавляет в массив сообщений 
// и выводит полученное сообщение в конcоль

class MailDaemon {
  constructor() {
    this.subscribers = []; 
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(item => item !== subscriber);
  }
  notify(message) {
    this.subscribers.forEach(subscriber => subscriber.notify(message));
  }
}

class MailBox {
  constructor(name) {
    this.name = name;
    this.mails = [];
  }
  notify(message) {
    this.mails.push(message);
    console.log(`Hey, ${this.name}, we have got a new message - ${message}!!`);
  }
}

// const md = new MailDaemon;
// const olga = new MailBox('Olga');
// const zhanna = new MailBox('Zhanna');
// const alex = new MailBox('Alex');

// md.subscribe(olga);
// md.subscribe(zhanna);
// md.subscribe(alex);
// md.notify('Hi there!!');

// md.unsubscribe(alex);
// md.notify('Are you seriouslly??');
