// Hybrid Module: Module + Revealing Module //
const  basketModule = (function basketModule(){
    const basket = [];
  
    function getTotal() {
      console.log(basket.length)
      return basket.length;
    }
    
    return {
      addItem: function(item) {
        console.log('Push a product ' + item)
        basket.push(item);
      },
      getTotal: getTotal,
    }
  })();
  
  basketModule.addItem('Banana');
  basketModule.getTotal();
  
  // Singletone //
  const  basketSingleton = (function basketSingleton(){
    let instance;
    
    function init() {
      const basket = [];
    
      function getTotal() {
        console.log(basket.length)
        return basket.length;
      }
  
      function addItem(item) {
          console.log('Push a product ' + item)
          basket.push(item);
        }
  
      return {
        addItem: function(item) {
          console.log('Push a product ' + item)
          basket.push(item);
        },
        getTotal: getTotal,
      }
    }
  
    
    return {
      getInstance: function() {
        if (instance) {
          return instance;
        }
        
        instance = init();
        return instance;
      },
    }
  })();
  
  const basket1 = basketSingleton.getInstance();
  const basket2 = basketSingleton.getInstance();
  basket1.addItem('Banana');
  basket2.getTotal();