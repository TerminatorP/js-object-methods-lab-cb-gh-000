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
    }.`;
  }
}
const gerogeWasington = new President("George Washington", "Virginia", "Independent politican", 8);
const abrahamLincoln = new President("Abraham Lincoln", "Kentucky", "Republican", 4);
const richardNixon = new President("Richlard Nixon", "California", "Republican", 5);
const  jimmyCarter = new President("Jimmy Carter", "Georgia", "Democrat", 4);
const lynda = new President("Lynda B. Johnson", "Texas", "Democrat", "1879-1990");

console.log(lynda.sayHi())
