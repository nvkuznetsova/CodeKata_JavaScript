class God{
    constructor(name, panteon){
      this.name = name;
      this.panteon = panteon;
      this.deathCounter = 0;
      this.saverCounter = 0;
    }
  
    kill(count){
      this.deathCounter += count;
   }
  
   save(count){
      this.saverCounter += count;
   }
  }
  
  class ThunderGod extends God{
    constructor(name, panteon, lightningCount){
      super(name, panteon);
      this.lightningCount = lightningCount;
    }
  
    save(count){
      super.save(count*2);
      console.log("I need more Booze")
    }
  
    sayGav(){
      console.log("GAV");
    }
  }
  
  const Zeus = new ThunderGod("Zeus", "Greek", 100);
  Zeus.save(2);