function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      //    let textArr = JSON.parse(document.querySelector('#inputs textarea').value);
      //    let obj = {};
      //    let salaryObj = {};

      //    for (const restorantInfo of textArr) {
      //       let [name, workersInfo] = restorantInfo.split(' - ');
      //       let workersInfoArr = workersInfo.split(', ');
      //       let avrSalary = 0;
      //       let bestSalary = 0;
      //       let innerObj = {};
      //       let arr = [];
      //       for (const str of workersInfoArr) {
      //          let [workerName, salary] = str.split(' ');
      //          if (bestSalary <= Number(salary)) {
      //             bestSalary = Number(salary);
      //          }
      //          innerObj = {
      //             workerName,
      //             salary: Number(salary)
      //          }
      //          arr.push(innerObj);
      //       }
      //       if (obj.hasOwnProperty(name)) {
      //          obj[name].push(...arr);
      //       } else {
      //          obj[name] = arr;
      //       }
      //       avrSalary = obj[name].reduce((a, v) => {
      //          a += v.salary;
      //          return a;
      //       }, 0);
      //       avrSalary /= obj[name].length;
      //       salaryObj[name] = { avrSalary, bestSalary };

      //    }
      //    let bestRest = Object.entries(salaryObj).sort((a, b) => b[1]['avrSalary'] - a[1]['avrSalary']);
      //    let name = bestRest[0][0];
      //    let a = `Name: ${name} Average Salary: ${salaryObj[name].avrSalary.toFixed(2)} Best Salary: ${salaryObj[name].bestSalary.toFixed(2)}`;
      //    let output = '';
      //    let sortedWorkers = obj[name].sort((a, b) => b.salary - a.salary);
      //    for (const el of sortedWorkers) {
      //       output += `Name: ${el.workerName} With Salary: ${el.salary} `
      //    }
      //    let firstOutputElement = document.querySelector('#bestRestaurant p');
      //    firstOutputElement.textContent = a;
      //    let secondOutputElement = document.querySelector('#workers p');
      //    secondOutputElement.textContent = output;
      let textAreaEl = document.querySelector('#inputs textarea');
      let input = JSON.parse(textAreaEl.value);
      let avgSalary = 0;
      let bestSalary = 0;
      let arr = [];
      input.forEach(element => {
         let [name, emplInfo] = element.split(' - ');
         let innerArr = emplInfo.split(', ');
         let obj = {};
         let innObj = {};
         innerArr.forEach(x => {
            let [emplName, salary] = x.split(' ');
            innObj[emplName] = Number(salary);
         })
         let isTrue = false;
         let someObj = {};
         for (const el of arr) {
            if (el.name === name) {
               isTrue = true;
               someObj = el;
               break;
            }
         }
         if (isTrue) {
            Object.assign(someObj.workers, innObj);
            bestSalary = Object.entries(someObj.workers).sort((a, b) => b[1] - a[1])[0][1];
            let sum = Object.values(someObj.workers).reduce((a, v) => (a + v), 0);
            avgSalary = sum / Object.values(someObj.workers).length;
            someObj.bestSalary = bestSalary;
            someObj.avgSalary = avgSalary;
         } else {
            obj.name = name;
            obj.workers = innObj;
            bestSalary = Object.entries(innObj).sort((a, b) => b[1] - a[1])[0][1];
            let sum = Object.values(innObj).reduce((a, v) => (a + v), 0);
            avgSalary = sum / Object.values(innObj).length;
            obj.bestSalary = bestSalary;
            arr.push(obj);
         }
         obj.avgSalary = avgSalary;

      })


      

   debugger;
   let bestRest = arr.sort((a, b) => b.avgSalary - a.avgSalary)[0];
   let sortedBestRest = Object.entries(bestRest.workers).sort((a, b) => b[1] - a[1]);
   let outputEl = document.querySelector('#bestRestaurant p');
   let output2El = document.querySelector('#workers p');
   outputEl.textContent = `Name: ${bestRest.name} Average Salary: ${bestRest.avgSalary.toFixed(2)} Best Salary: ${bestRest.bestSalary.toFixed(2)}`
   let text = '';
   for (const [key, value] of sortedBestRest) {
      text += `Name: ${key} With Salary: ${value} `
   }
   output2El.textContent = text.trim();
}

}