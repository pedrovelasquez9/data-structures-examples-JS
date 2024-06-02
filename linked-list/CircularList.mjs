import { SimpleNode } from "./SimpleNode.mjs";

export class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(value) {
        const newNode = new SimpleNode(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next !== this.head) {
            currentNode = currentNode.next;
        }
        newNode.next = this.head;
        currentNode.next = newNode;
    }

    displayList() {
        if (!this.head) return;
        let current = this.head;
        do {
            console.log(current.value);
            current = current.next;
        } while (current !== this.head);
    }

    findNode(value) {
        if (!this.head) return;
        let current = this.head;
        do {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        } while (current !== this.head);
        return "No se encontró elemento";
    }

    deleteNode(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            return
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    clearList() {
        this.head = null;
    }

}