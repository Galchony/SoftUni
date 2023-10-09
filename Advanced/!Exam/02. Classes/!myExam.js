class JobOffers {

    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        for (const candidate of candidates) {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);
            let foundedCand = this.jobCandidates.find(x => x.name === name);
            if (foundedCand !== undefined) {
                if (foundedCand.yearsExperience < yearsExperience) {
                    foundedCand.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience: Number(yearsExperience) });
            }
        }
        return `You successfully added candidates: ${this.jobCandidates.map(x => x.name).join(', ')}.`;
    }
    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        let foundedCand = this.jobCandidates.find(x => x.name === name);
        if (foundedCand === undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (minimalExperience > foundedCand.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }
        foundedCand.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }
    salaryBonus(name) {
        let foundedCand = this.jobCandidates.find(x => x.name === name);
        if (foundedCand === undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (foundedCand.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (foundedCand.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error(`Candidate Database is empty!`);
        }
        let output = `Candidates list:\n${this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name)).map(x => `${x.name}-${x.yearsExperience}`).join('\n')}`;
        return output;
    }
}

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18", 'Peter Parker-Master-8']));
// console.log(3);

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("John Jones-8"));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","galia Cole-High School-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("Jordan Cole-4"));
//  console.log(Jobs.salaryBonus("Jordan Cole"));
//  console.log(Jobs.salaryBonus("John Doe"));
//  console.log(Jobs.candidatesDatabase());
