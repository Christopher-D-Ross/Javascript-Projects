class LongLine {
    constructor() {
        this._list = [];
        this._remainingPeople = 0;
    }

    get list() {
        return this._list;
    }

    get remainingPeople() {
        return this._remainingPeople;
    }

    addPeople(addin) {
        this._remainingPeople += addin;
    }

    removePeople(takin) {
        this._remainingPeople -= takin;
    }

    addNames(namin) {
        this._list.push(namin);
    }

    remoNames() {
        this._list[0].shift();
    }

    showNext() {
        let behindin = this._list[0][1];
        console.log(behindin);
        return behindin;
    }

}

let showin = new LongLine();
showin.addPeople(5);
showin.addNames(["angie","somba"]);
console.log(showin.list);
console.log(showin.remainingPeople);
showin.addNames(["richy","jojo"]);
showin.removePeople(3);
console.log(showin.remainingPeople);
showin.showNext();
console.log(showin.list);
showin.remoNames();
console.log(showin.list);
showin.remoNames();
console.log(showin.list);
