module.exports = class Course {
  id
  #name
  #capacity

  constructor(name, capacity) {
    this.#name = name;
    this.#capacity = capacity;
  }

  export() {
    return { id: this.id, name: this.#name, capacity: this.#capacity }
  }
}