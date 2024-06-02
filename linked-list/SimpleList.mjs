import { SimpleNode } from "./SimpleNode.mjs";

export class SimpleLinkedList {
    constructor() {
        this.head = null;
    }

    insertNode(value) {
        const newNode = new SimpleNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }

    displayList() {
        if (!this.head) return;
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    findNode(value) {
        if (!this.head) return;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
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