class ListNode {
  constructor (value) {
    this.value = value
    this.prev = null
    this.next = null
  }

  setNextNode (node) {
    this.next = node
  }

  setPrevNode (node) {
    this.prev = node
  }

  set setValueNode (val) {
    this.value = val
  }

  get getNextNode () {
    return this.next
  }

  get getPrevNode () {
    return this.prev
  }
}

const node1 = new ListNode()
const node2 = new ListNode()
const node3 = new ListNode()
const node4 = new ListNode()
const node5 = new ListNode()

node1.setNextNode(node2)
node2.setNextNode(node3)
node3.setNextNode(node4)
node4.setNextNode(node5)
node5.setNextNode(null)

node1.setPrevNode(null)
node2.setPrevNode(node1)
node3.setPrevNode(node2)
node4.setPrevNode(node3)
node5.setPrevNode(node4)

node1.setValueNode = 1
node2.setValueNode = 2
node3.setValueNode = 3
node4.setValueNode = 4
node5.setValueNode = 5



