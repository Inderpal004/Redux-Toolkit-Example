import { Chance } from "chance";

const chance = Chance();

export function getData (){
    return chance.name({ middle: true })
}