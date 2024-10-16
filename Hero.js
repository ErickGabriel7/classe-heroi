const POSSIBLE_TYPES = {
  mago: 'mago',
  guerreiro: 'guerreiro',
  monge: 'monge',
  ninja: 'ninja',
};

const POSSIBLE_ATTACK_TYPES = {
  mago: 'magia',
  guerreiro: 'espada',
  monge: 'artes marciais',
  ninja: 'shuriken',
};

class Hero {
  name;
  age;
  type;

  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.setType(type);
  }

  setType = (type) => {
    if (!POSSIBLE_TYPES[type]) {
      return;
    }
    this.type = POSSIBLE_TYPES[type];
  };

  attack() {
    console.log(
      `O ${this.type} atacou usando ${POSSIBLE_ATTACK_TYPES[this.type]}`
    );
  }
}

module.exports = Hero;
