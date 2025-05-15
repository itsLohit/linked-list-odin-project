class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current!== null){
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value) {
        if(this.head === null){
            this.head = newNode;
            return;
        }

        let temp = this.head;
        this.head = newNode;
        this.head.newNode = temp;
    }

    size(){
        let count = 0;
        let current = this.head;
        while(current !== null){
            count++;
            current = current.nextNode;
        }
        return count;
    }
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

