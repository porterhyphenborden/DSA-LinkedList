const LinkedList = require('./linkedlist');

function main() {
    const SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    SLL.insertFirst('Tauhida');
    //SLL.remove('squirrel');

    //console.log(SLL.find('Helo'));
    SLL.insertBefore('Athena', 'Boomer');
    //console.log(SLL.find('Helo'));
    SLL.insertAfter('Hotdog', 'Helo');
    //console.log(SLL.find('Helo'));
    SLL.insertAt('Kat', 3);
    SLL.insertAt('Racetrack', 5);
    //console.log(SLL.find('Kat'));
    SLL.remove('Tauhida');
    //console.log(SLL.head.value);
    return SLL;
}

const BGList = main();

function display(list) {
    if (!list.head) {
        return null;
    }
    currNode = list.head;
    nodeNum = 1;
    while (currNode !== null) {
        console.log(`Node ${nodeNum}: ${currNode.value}`);
        currNode = currNode.next;
        nodeNum++;
    }
}

display(BGList);

function size(list) {
    if (!list.head) {
        return null;
    }
    currNode = list.head;
    nodeNum = 1;
    while (currNode.next !== null) {
        currNode = currNode.next;
        nodeNum++;
    }
    return nodeNum;
}

console.log(size(BGList));

function isEmpty(list) {
    let empty;
    if (list.head) {
        empty = false;
    }
    else {
        empty = true;
    }
    return empty;
}

console.log(isEmpty(BGList));

function findPrevious(list, item) {
    let currNode = list.head;
    let prevNode = list.head;
    if (!list.head) {
        return null;
    }
    while (currNode.value !== item) {
        if (currNode.next === null) {
            return null;
        }
        else {
            prevNode = currNode;
            currNode = currNode.next;
        }
    }
    return prevNode;
}

console.log(findPrevious(BGList, 'Helo'));

function findLast(list) {
    if (!list.head) {
        return null;
    }
    let currNode = list.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    return currNode;
}

console.log(findLast(BGList));

//Mystery program
    //Goes through a linked list to find any duplicates and removes them, O(n^2)

//Reverse a list

function reverseLL(list) {
    if (!list.head) {
        return null;
    }

    let currNode = list.head;
    let prevNode = null;

    while (currNode !== null) {
        let tempNext = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = tempNext;
    }
    list.head = prevNode;
    return list;
}

reverseLL(BGList);
display(BGList);

function penPenUltimate(list) {
    if (!list.head) {
        return null;
    }

    let currNode = list.head;
    let threeAhead = currNode.next.next;
    while (threeAhead.next !== null) {
        threeAhead = threeAhead.next;
        currNode = currNode.next;
    }
    return currNode;
}

console.log(penPenUltimate(BGList));

//Instructions don't say what to do if list has even # of items
function middleOfList(list, sizefx) {
    let size = sizefx(list);
    let curr = list.head;
    if (size % 2 === 0) {
        console.log('List has an even number of items, therefore no middle item.')
    }
    else {
        middle = Math.floor(((size + 1)/2));
        let i = 1;
        while (i !== middle) {
            curr = curr.next;
            i++;
        }
    }
    return curr;
}

console.log(middleOfList(BGList, size));

function makeCycleList() {
    const list = new LinkedList();

    list.insertFirst('Moulder');
    list.insertFirst('Scully');
    list.insertFirst('Smoking Man');
    list.insertFirst('Skinner');

    list.head.next.next.next.next = list.head;
    return list;
}

let cycleList = makeCycleList();

console.log(cycleList);



function isCycle(list) {
    if (!list.head) {
        return null;
    }

    let cycle = false;
    let curr = list.head;

    while (curr.next !== null && curr.next !== list.head) {
        let nextNode = curr.next;
        while (nextNode.next !== null) {
            if (curr !== nextNode) {
                nextNode = nextNode.next;
            }
            else {
                cycle = !cycle;
                break;
            }
        }
        curr = curr.next;
    }
    return cycle;
}

console.log(isCycle(cycleList));

//Can't figure out how to sort in O(n) without using another data structure


