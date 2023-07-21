//interface of SuperHero
export interface SuperHero {
    id?: number;//id is optional because it is added when it is saved to the db server
    name: string;
    firstName: string;
    lastName: string;
    place: string;
    active: boolean;
}