function Bar() {
  console.log('Bar');
  console.log(this);
}

const bar = new Bar(); //Bar

function Worker(name, job) {
  this.name = name;
  this.job = job;

  this.log = function () {
    console.log(`Name: ${this.name}, Job: ${this.job}`);
  };
}

const maxim = new Worker('Maxim', 'carpenter');
const denis = new Worker('Denis', 'blacksmith');

maxim.log();
denis.log();
