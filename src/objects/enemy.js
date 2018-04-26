import getItem from "./Items";
import getAbility from "./Abilities";

export default class Enemy {

    constructor(config) {
        this.name = config.name;
        this.image = config.image;
        this.health = config.health;
        this.abilities = config.abilities;
        this.exp = config.exp;
        this.chance = config.chance;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this._name = value;
    }

    getImage() {
        return this.image;
    }

    setImage(value) {
        this._image = value;
    }

    getHealth() {
        return this.health;
    }

    setHealth(value) {
        this.health = value;
    }

    getAbilities() {
        return this.abilities;
    }

    setAbilities(value) {
        this.abilities = value;
    }

    getExp() {
        return this.exp;
    }

    setExp(value) {
        this.exp = value;
    }

    getChance() {
        return this.chance;
    }

    setChance(value) {
        this.chance = value;
    }
}