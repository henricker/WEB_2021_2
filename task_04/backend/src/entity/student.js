
module.exports = class Student {
  id
  #name
  #program
  #IRA

  constructor(name, program, IRA) {
    this.#name = name;
    this.#program = program;
    this.#IRA = IRA;
  }

  export() {
    return { id: this.id, name: this.#name, program: this.#program, IRA: this.#IRA }
  }
}