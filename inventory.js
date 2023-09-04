class Inventory {
    constructor() {
        this.items = [];
    }

    addItems(stuff) {
        for ( let {item, quantity} of stuff)
        {
            const existingItem = this.items.find(existing => existing.item.name === item.name);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({ item, quantity });
            }
    }
    }

    showInventory() {
        console.log("Inventory:");
        for (const { item, quantity } of this.items) {
            console.log(`${item.name} - ${quantity}`);
        }
    }
}