class Attack {
  gamePlan() {
    return "2 – 3 – 5";
  }
}

class Defence {
  gamePlan() {
    return "4 – 5 – 1";
  }
}

class Medium {
  gamePlan() {
    return "4 – 4 – 2";
  }
}

class PlayStation {
  setStrategy(_plan) {
    this.plan = _plan;
  }

  gamePlan() {
    return this.plan.gamePlan();
  }
}

var attack = new Attack();
var medium = new Medium();
var defence = new Defence();

var playStation = new PlayStation();

playStation.setStrategy(attack);
console.log(playStation.gamePlan());

playStation.setStrategy(defence);
console.log(playStation.gamePlan());
