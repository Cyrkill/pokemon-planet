export interface Pokemon {
    name: string;
    id: number;
    abilities: Ability[];
}

export interface Ability {
    is_hidden: boolean;
    slot: number;   
    ability: AbilityDetail[];
}

export interface AbilityDetail {
    name: string;
    url: string;
    effectEntry?: string;
}