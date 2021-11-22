module.exports = class Teacher {
  id
  #name
  #studyArea

  constructor(name, studyArea) {
    this.#name = name;
    this.#studyArea = studyArea;
  }

  export() {
    return { id: this.id, name: this.#name, program: this.#studyArea }
  }
}