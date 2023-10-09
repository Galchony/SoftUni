class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = Number(altitude);
        return `You have successfully added a new goal - ${peak}`;
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        }
        if (this.resources === 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }
        let difference = (this.resources - time * 10);
        if (difference < 0) {
            return `You don't have enough resources to complete the hike`;
        }
        this.resources -= time * 10;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        // let resourcesInPercent = (this.resources ) * 100;
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
    rest(time) {
        this.resources += (time * 10);
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }
        if (criteria !== 'all') {
            let sorted = this.listOfHikes.filter(a => a.difficultyLevel === criteria);
            if (sorted.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            let best = sorted.sort((a, b) => a.time - b.time)[0];
            return `${this.username}'s best ${criteria} hike is ${best.peak} peak, for ${best.time} hours`;
        }
        let output = `All hiking records:\n${this.listOfHikes.map(x => `${this.username} hiked ${x.peak} for ${x.time} hours`).join('\n')}`;
        return output;
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));


const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.addGoal('Galia', 5);
// user.hike('Musala', 3, 'hard');
// user.hike('Galia', 2, 'hard');
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 1, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));
