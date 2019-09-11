const singleton = (() => {
    let instance;
    
    const createInstance = () => {
      return 'Singleton instance';
    }
    
    const getInstance = () => {
      return instance || (instance = createInstance());
    }
    
    return {
      getInstance,
    }
  })();
  
  
  const s1 = singleton.getInstance();
  const s2 = singleton.getInstance();
  