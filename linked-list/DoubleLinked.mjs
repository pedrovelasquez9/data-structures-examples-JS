import { DoublyNode } from "./DoublyNode.mjs";

export class DoubledLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(value) {
        const newNode = new DoublyNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
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

    clearList() {
        this.head = null;
    }

    deleteNode(value) {
        if (!this.head) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            this.head.prev = null;
            return;
        }

        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }

        if (current) {
            if (current.next) {
                current.next.prev = current.prev;
            }

            if (current.prev) {
                current.prev.next = current.next;
            }

            if (current === this.tail) {
                current.prev.next = null;
                this.tail = current.prev;
            }
        }
    }

}