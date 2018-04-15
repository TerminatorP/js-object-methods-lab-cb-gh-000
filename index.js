// code solution here
class President {
  constructor(name, politicalParty, yearsInOffice, homestate) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homestate = homestate;
  }
  veto() {
    return "NO!";
  }
  passBill() {
    return "You can do that!";
  }
  doCharity() {
    return "I like to help people.";
  }
  conductPressInterview() {
    return "I am proud to be an American.";
  }
  sayHi() {
    return `Hi! My name is ${this.name}. I am from ${
      this.homestate
    }. I represent the ${this.politicalParty}s, and was in office ${
      this.yearsInOffice
    } years.`;
  }
}
const gerogeWasington = new President("George Washington", "Independent politican", 8, "Virginia");
const abrahamLincoln = new President("Abraham Lincoln", "Republican", 4, "Kentucky");
const richardNixon = new President("Richlard Nixon", "Republican", 5, "California");
const  jimmyCarter = new President("Jimmy Carter", "Democrat", 4, "Georgia");
