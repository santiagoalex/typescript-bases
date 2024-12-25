"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarAlMundo() {
            return 'Mundo a Salvo';
        }
    }
    class Villian extends Mutant {
        dominarElMundo() {
            return 'Mundo conquistado';
        }
    }
    const logan = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Erick');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} - ${this.team}`;
        }
    }
})();
(() => {
    class Avenger {
        constructor(name, reaName) {
            this.name = name;
            this.reaName = reaName;
        }
        getFullName() {
            return `${this.name} - ${this.reaName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, mutant) {
            super(name, realName);
            this.name = name;
            this.realName = realName;
            this.mutant = mutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName} `;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error(" la variable name debe tener más de 3 caracteres");
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(this.name, this.realName, this.mutant);
        }
    }
    const antman = new Avenger('Steve Rogers ', 'Capitan America');
    const logan = new Xmen("Wolwrine", "Logan", "regerancion");
    logan.fullName = 'Santiago';
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('soy apocalipsis el unico');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Xavier change singleton");
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map