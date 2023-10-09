class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (name === '' || salary === '' || position === '' || department === '' ||
            name === undefined || salary === undefined || position === undefined || department === undefined ||
            name === null || salary === null || position === null || department === null || salary < 0) {
            throw new Error('Invalid input!');
        }
        if (this.departments[department]) {
            this.departments[department].push({ name, position, salary });
        } else {
            this.departments[department] = [{ name, position, salary }];
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let bestName = '';
        let bestDep;
        let max = 0;
        for (const key in this.departments) {
            let length = this.departments[key].length;
            let sum = this.departments[key].reduce((a, v) => a + v.salary, 0);
            let avr = sum / length;
            if (avr > max) {
                max = avr;
                bestDep = this.departments[key];
                bestName = key;
            }
        }
        return `Best Department is: ${bestName}\nAverage salary: ${max.toFixed(2)}\n${bestDep.sort((a,b)=>a.name.localeCompare(b.name)).sort((a,b)=>b.salary-a.salary).map(x=>`${x.name} ${x.salary} ${x.position}`).join('\n')}`
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
