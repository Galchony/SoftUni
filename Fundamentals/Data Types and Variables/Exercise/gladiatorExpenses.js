function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCount = Math.floor(lostFightsCount / 2);
    let swordCount = Math.floor(lostFightsCount / 3);
    let shieldCount = Math.floor(lostFightsCount / 6);
    let armorCount = Math.floor(shieldCount / 2);

    let expenses = helmetPrice * helmetCount + swordPrice * swordCount + shieldPrice * shieldCount + armorPrice * armorCount;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);