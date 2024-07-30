//! Task 1

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//! Task 2

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    removeNode() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let temp = this.head;
        while (temp.next.next) {
            temp = temp.next;
        }
        temp.next = null;
    }

    displayNodes() {
        let temp = this.head;
        const values = [];
        while (temp) {
            values.push(temp.value);
            temp = temp.next;
        }
        console.log(values.join(' '));
    }
}

//! Task 3 

class Stack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
    }

    pop() {
        if (this.isEmpty()) throw new Error('Stack is empty');
        return this.elements.pop();
    }

    peek() {
        if (this.isEmpty()) throw new Error('Stack is empty');
        return this.elements[this.elements.length - 1];
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

//! Task 4 

function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed;
}

//! Task 5 

class Queue {
    constructor() {
        this.elements = [];
    }

    enqueue(element) {
        this.elements.push(element);
    }

    dequeue() {
        if (this.isEmpty()) throw new Error('Queue is empty');
        return this.elements.shift();
    }

    front() {
        if (this.isEmpty()) throw new Error('Queue is empty');
        return this.elements[0];
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

//! Task 6 

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addPrintJob(job) {
        this.queue.enqueue(job);
        console.log(`Added print job: ${job}`);
    }

    processPrintJob() {
        if (this.queue.isEmpty()) {
            console.log('No jobs to process.');
            return;
        }
        const job = this.queue.dequeue();
        console.log(`Processed print job: ${job}`);
    }
}


const printerQueue = new PrinterQueue();
printerQueue.addPrintJob('Document1');
printerQueue.addPrintJob('Document2');
printerQueue.processPrintJob();
printerQueue.processPrintJob();
printerQueue.processPrintJob(); 

//! Task 7

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//! Task 8

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    return;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    return;
                }
            }
        }
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

//! Task 9 

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    return;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    return;
                }
            }
        }
    }

    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

//! Task 10

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

console.log(graph.bfs('A')); 
