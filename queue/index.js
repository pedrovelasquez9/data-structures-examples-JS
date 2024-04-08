// Custom implementation
class Queue {
    constructor() {
        this.items = [];
        this.initialIndex = 0;
    }

    isEmpty() {
        return this.initialIndex >= this.items.length;
    }

    top() {
        if (this.isEmpty()) {
            return "la cola está vacía";
        }

        return this.items[this.initialIndex];
    }

    enqueue(item) {
        this.items[this.items.length] = item;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "la cola está vacía";
        }
        const firstElement = this.items[this.initialIndex];
        delete this.items[this.initialIndex];
        this.initialIndex++;
        return firstElement;
    }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue.isEmpty());
console.log(myQueue.top());
const firstElement = myQueue.dequeue();
console.log(firstElement);
console.log(myQueue.top());

// JS Implementation
const secondQueue = [];
secondQueue.push(1);
secondQueue.push(2);
console.log(secondQueue[0]);
const topStackValue = secondQueue.shift();
console.log(topStackValue);
console.log(secondQueue[0]);


