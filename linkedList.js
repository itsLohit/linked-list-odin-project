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
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

