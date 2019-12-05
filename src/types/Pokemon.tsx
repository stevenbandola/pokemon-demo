import { IPokemon } from "./IPokemon";

export class Pokemon implements IPokemon {
  constructor(
    public id: number,
    public name: string,
    public img: string,
    public exp: number
  ) {
    this.id = id;
    this.name = name.charAt(0).toUpperCase() + name.slice(1); //uppercase first letter
    this.img = img;
    this.exp = exp;
  }
}
