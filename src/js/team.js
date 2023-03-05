import Characters from './characters';

export default class Team {
    constructor() {
        this.enemyCharacters = [];
        this.enemyCharacters.push(new Characters('Лучник', 'Bowman'));
        this.enemyCharacters.push(new Characters('Демон', 'Daemon'));
        this.enemyCharacters.push(new Characters('Маг', 'Magician'));
    }

    * [Symbol.iterator]() {
        for (let i = 0; i < this.enemyCharacters.length; i++) {
            yield this.enemyCharacters[i];
        }
    }
}
