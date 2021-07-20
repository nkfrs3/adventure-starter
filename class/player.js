class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in
        for (let i = 0; i < this.currentRoom.items.length; i++) {
            let currentItem = this.currentRoom.items[i]
            if (currentItem.name === itemName) {
                this.items.push(this.currentRoom.items.splice(i, 1) [0])
            }
        }
    }

    dropItem(itemName) {

        // Fill this in
        for (let i = 0; i < this.items.length; i++) {
            let currentItem = this.items[i]
            if (currentItem.name === itemName) {
                this.currentRoom.items.push(this.items.splice(i, 1) [0])
            }
        }
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {

        // Fill this in
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i]
            if (item.name === name) {
                return this.items.splice(i, 1) [0]
            }
        }
    }
}

module.exports = {
  Player,
};
