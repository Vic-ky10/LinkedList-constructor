class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
	// Define the push method for the LinkedList class
push(value) {
    // Create a new Node instance with the provided value
    const newNode = new Node(value);
 
    // Check if the linked list is empty (head is null or undefined)
    if (!this.head) {
        // If the list is empty, set the head and tail to the new node
        this.head = newNode;
        this.tail = newNode;
    } else {
        // If the list is not empty, link the current tail to the new node
        this.tail.next = newNode;
        // Update the tail to point to the new node
        this.tail = newNode;
    }
 
    // Increment the length of the linked list by 1
    this.length++;
 
    // Return the linked list instance for method chaining
    return this;
} 
}
 

function test() {
    let myLinkedList = new LinkedList(1);
    myLinkedList.makeEmpty();
    myLinkedList.push(1);
    myLinkedList.push(2);
    
    
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Linked List:
    1
    2

*/