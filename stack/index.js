// Custom implementation
class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    top() {
        if (this.isEmpty()) {
            return "La pila está vacía";
        }
        return this.items[this.items.length - 1];
    }

    push(item) {
        this.items[this.items.length] = item;
    }

    pop() {
        if (this.isEmpty()) {
            return "La pila está vacía";
        }
        const topElement = this.items[this.items.length - 1];
        this.items.length -= 1;
        return topElement;
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top());
const topValue = myStack.pop();
console.log(topValue);
console.log(myStack.top());
console.log(myStack.isEmpty());

// Using JS methods
const otherStack = [];
otherStack.push(1);
otherStack.push(2);
console.log(otherStack[otherStack.length - 1]);
const topStackValue = otherStack.pop();
console.log(topStackValue);
console.log(otherStack[otherStack.length - 1]);