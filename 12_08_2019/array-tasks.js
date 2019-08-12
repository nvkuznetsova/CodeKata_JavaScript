//Task 1 getSum([5, 8, 24]) -> [5, 5+8, 5+8+24] -> [5, 13, 37]
const getSum = (arr) => {
    const result = [];
    arr.reduce((prev, curr) => {
      result.push(prev+curr);
      return prev+curr;
    }, 0);
    return result;
  }
  
  //IPs tasks 2-5
  fetch('https://kodaktor.ru/j/ips')
    .then(res => res.json())
    .then(json => {
    const ipsArr = [];
    json.forEach(ips => ipsArr.push(ips.ip));
    return ipsArr;
  })
    .then(ipsArr => {
    const ipsObj = {};
    ipsArr.forEach(ip => {
      ipsObj[ip] = (ipsObj[ip] +1) || 1;
    });
    //Task 2
    const unique = Object.values(ipsObj).length;
    //Task 3
    const once = Object.values(ipsObj).filter(item => item === 1).length;
    //Task 4
    const max = Math.max(...Object.values(ipsObj));
    //Task 5
    const sort = Object.keys(ipsObj).sort((a, b) => ipsObj[b] - ipsObj[a]);
    const tab = document.querySelector('#ips');
    sort.forEach((ip) => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      td1.textContent = ip;
      td2.textContent = ipsObj[ip];
      tr.appendChild(td1);
      tr.appendChild(td2);
      tab.appendChild(tr);
    });
  });