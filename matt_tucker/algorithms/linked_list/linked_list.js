var Node = require('./node').Node;

function LinkedList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
}

LinkedList.prototype = {
    add: function(value) {
        var node = new Node(value);
     
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this._length++;
     
            return node;
        }
     
        this.tail.next = node;

        node.previous = this.tail;

        this.tail = node;
     
        this._length++;
         
        return node;
    },
    prepend: function(value) {
        var node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this._length++;

            return node;
        }

        node.next = this.head;

        this.head.previous = node;

        this.head = node;

        this._length++;

        return node;
    },
    insert: function(index, value) {
        var currentNode = this.head;
        var node = new Node(value);
        var count = 0;

        if (index <= -1 || index >= this._length) {
            throw new Error("LinkedList index out of range.")
        }

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this._length++;

            return node;
        }

        if (index === 0) {
            node = this.prepend(value);

            return node;
        }

        if (index === this._length - 1) {
            node = this.add(value);

            return node;
        }

        currentNode = this.nodeAt(index);

        previous = currentNode.previous;
        
        previous.next = node;

        node.previous = previous;

        currentNode.previous = node;

        this._length++;

        return node;
    },
    remove: function(index) {
        var currentNode = this.head;
        var deletedNode = null;
        var count = 0;

        if (index <= -1 || index >= this._length) {
            throw new Error("LinkedList index out of range.")
        }

        if (this.head === this.tail) {
            nodeToDelete = this.head;
            this.head = null;
            this.tail = null;

            return nodeToDelete;
        }

        if (index === 0) {
            nodeToDelete = this.head;

            this.head = this.head.next;

            this.head.previous = null;
            
            this._length--;

            return nodeToDelete;
        }

        if (index === this._length - 1) {
            nodeToDelete = this.tail;

            this.tail = this.tail.previous;

            this.tail.next = null;

            this._length--;

            return nodeToDelete;
        }

        nodeToDelete = this.nodeAt(index);

        previous = nodeToDelete.previous;

        after = nodeToDelete.next;
        
        previous.next = after;

        after.previous = previous;

        this._length--;

        return nodeToDelete;
    },
    pop: function(index=this._length-1) {
        // Use the prototype remove method
        this.remove(index);
    },
    find: function(value) {
        var currentNode = this.head;

        while (currentNode) {
            if (currentNode.value == value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    },
    nodeAt: function(index) {
        var currentNode = this.head;
        var count = 0;

        if (index <= -1 || index >= this._length) {
            throw new Error("LinkedList index out of range.")
        }

        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode;
    },
    first: function() {
        return this.head;
    },
    last: function() {
        return this.tail;
    },
    size: function() {
        return this._length;
    },
    to_array: function() {
        var array = [];
        var currentNode = this.head;

        while (currentNode) {
            array.push(currentNode.value);

            currentNode = currentNode.next;
        }

        return array;
    }
};

exports.LinkedList = LinkedList;

