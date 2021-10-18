class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }
}

class Dog extends Animal {
  created = new Date();
  constructor(name) {
    super(name);
    this._name = name;
  }
  get nameShow() {
    return this._name;
  }
}

let dog1 = new Dog("Milo");
