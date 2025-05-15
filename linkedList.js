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
        this.head.nextNode = temp;
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

    head(){
        if(this.head === null){
            return null;
        }
        else{
            return this.head;
        }
    }

    tail(){
        if(this.head === null){
            return null;
        }
        else{
            let num = this.size();
            return this.at(num - 1);
        }
    }
}

class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

