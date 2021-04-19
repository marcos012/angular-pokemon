export class Pokemon {
  name: string;
  id: number;
  weight: number;
  types = [];

  constructor(name, id, weight, types) {
    this.name = name;
    this.id = id;
    this.weight = weight;
    this.types = types;
  }

  formattedName() {
    return this.name ?
      this.name[0].toUpperCase() + this.name.substr(1) : "";
  }

  image() {
    return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png"
  }
}
