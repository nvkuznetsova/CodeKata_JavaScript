function God(name, panteon){
    this.name = name;
    this.panteon = panteon;
    this.deathCounter = 0;
    this.saverCounter = 0;
  }
  
  God.prototype.kill = function(count){
      this.deathCounter += count;
   }
  
  God.prototype.save = function(count){
      this.saverCounter += count;
   }
  
  function ThunderGod(name, panteon, lightningCount){
    God.call(this, name, panteon);
    this.lightningCount = lightningCount;
    this.sayGav = function(){
      console.log("GAV");
    }
  }
  
  ThunderGod.prototype = Object.create(God.prototype);
  ThunderGod.prototype.constructor =  ThunderGod;
  
  ThunderGod.prototype.save = function(count){
    God.prototype.save.call(this, count*2);
    console.log("I need more Booze")
  }
  
  const Zeus = new ThunderGod("Zeus", "Greek", 100);
  Zeus.save(2);
