/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
    name: string;
    age: number;
    ownerId: number;
}

export class UpdateCatInput {
    id: number;
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export class CreateOwnerInput {
    name: string;
}

export class UpdateOwnerInput {
    id: number;
    name?: Nullable<string>;
}

export class CreateToyInput {
    exampleField?: Nullable<number>;
}

export class UpdateToyInput {
    id: number;
}

export class Cat {
    id: number;
    name: string;
    age: number;
    owner: Owner;
}

export abstract class IQuery {
    abstract cats(): Nullable<Cat[]> | Promise<Nullable<Cat[]>>;

    abstract cat(id: number): Nullable<Cat> | Promise<Nullable<Cat>>;

    abstract owners(): Nullable<Nullable<Owner>[]> | Promise<Nullable<Nullable<Owner>[]>>;

    abstract owner(id: number): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract toys(): Nullable<Toy>[] | Promise<Nullable<Toy>[]>;

    abstract toy(id: number): Nullable<Toy> | Promise<Nullable<Toy>>;
}

export abstract class IMutation {
    abstract createCat(createCatInput: CreateCatInput): Cat | Promise<Cat>;

    abstract updateCat(updateCatInput: UpdateCatInput): Cat | Promise<Cat>;

    abstract removeCat(id: number): Cat | Promise<Cat>;

    abstract createOwner(createOwnerInput: CreateOwnerInput): Owner | Promise<Owner>;

    abstract updateOwner(updateOwnerInput: UpdateOwnerInput): Owner | Promise<Owner>;

    abstract removeOwner(id: number): Nullable<Owner> | Promise<Nullable<Owner>>;

    abstract createToy(createToyInput: CreateToyInput): Toy | Promise<Toy>;

    abstract updateToy(updateToyInput: UpdateToyInput): Toy | Promise<Toy>;

    abstract removeToy(id: number): Nullable<Toy> | Promise<Nullable<Toy>>;
}

export class Owner {
    id: number;
    name: string;
    cats?: Nullable<Cat[]>;
}

export class Toy {
    exampleField?: Nullable<number>;
}

type Nullable<T> = T | null;
