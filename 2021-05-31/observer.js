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

// class MailDaemon {
//   constructor() {
//     this.subscribers = [];
//   }
//   subscribe(mailbox) {
//     this.subscribers.push(mailbox);
//   }
//   unsubscribe(mailbox) {
//     this.subscribers = this.subscribers.filter(el => el !== mailbox);
//   }
//   notify(message) {
//     this.subscribers.forEach(user => {
//       user.notify(message);
//     });
//   }
// }

// class MailBox {
//   constructor(name) {
//     this.messages = [];
//     this.name = name;
//   }
//   notify(message) {
//     this.messages.push(message);
//     console.log(`Hey, ${this.name}, we have got a new message: ${message}`);
//   }
// }

// const mail = new MailDaemon;

// const ksenia = new MailBox('Ksenia');
// const ivan = new MailBox('Ivan');
// const alex = new MailBox('Alex');

// mail.subscribe(ksenia);
// mail.subscribe(ivan);
// mail.subscribe(alex);
// mail.notify('Hi there!!');
// mail.unsubscribe(alex);
// mail.notify('Are you still here?');
