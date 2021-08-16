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
    this.subscribers = [];  
  }
  
  subscribe(box) {
    this.subscribers.push(box);
  }
  
  unsubscribe(box) {
    this.subscribers = this.subscribers.filter(user => user !== box);
  }
  
  notify(message) {
    this.subscribers.forEach(user => user.notify(message));
  }
};

class MailBox {
  constructor(name) {
    this.name = name;
  }
  notify(message) {
    console.log(`Hey ${this.name}!! We have got a new message - ${message}`);
  }
}

const md = new MailDaemon();
const viktor = new MailBox('Viktor');
const svetlana = new MailBox('Svetlana');
const alex = new MailBox('Alex');

md.subscribe(viktor);
md.subscribe(svetlana);
md.subscribe(alex);

md.notify('Hi, there.');
md.unsubscribe(alex);
md.notify('please go back');
