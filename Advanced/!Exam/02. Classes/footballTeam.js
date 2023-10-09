class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        footballPlayers.forEach(x => {
            let [name, age, value] = x.split('/');
            let player = this.invitedPlayers.find(x => x.name === name);
            if (player !== undefined) {
                if (player.value < Number(value)) {
                    player.value = Number(value);
                }
            } else {
                this.invitedPlayers.push({ name, age: Number(age), value: Number(value) });
            }
        })
        return `You successfully invite ${this.invitedPlayers.map(x => x.name).join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let player = this.invitedPlayers.find(x => x.name === name);

        if (player === undefined) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            if (player.value > playerOffer) {
                let priceDifference = player.value - playerOffer;
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
            } else {
                player.value = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
            }
        }
    }
    ageLimit(name, age) {
        let player = this.invitedPlayers.find(x => x.name === name);
        if (player === undefined) {
            throw new Error(`${name} is not invited to the selection list!`)
        } else {
            if (player.age < age) {
                let difference = age - player.age;
                if (difference < 5) {
                    return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
                } else {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
            } else {
                return `${name} is above age limit!`;
            }
        }
    }
    transferWindowResult() {
        let output = `Players list:\n${this.invitedPlayers.map(x => `Player ${x.name}-${x.value}`).join('\n')}`;
        return output;
    }
}


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Lionel Messi/35/60"]));


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/40"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// // console.log(fTeam.signContract("Barbukov/10"));


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

