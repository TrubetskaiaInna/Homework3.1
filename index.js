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
    if (this.value === null) {
      console.log('This node is not')
      return null
    } else {return this.next}
  }

  get getPrevNode () {
    if (this.value === null) {
      console.log('This node is not')
      return null
    } else {return this.prev}
  }

  cutNode () {
    if (this.prev !== null) {
      this.prev.next = this.next
      this.value = null
    }
    if (this.next !== null) {
      this.next.prev = this.prev
      this.value = null
    }
    if (this.prev === null && this.next === null) {
      this.value = null
      console.log('Cut out the last node')
    }
  }

  swapNode (node) {
    const prev1 = this.prev
    const prev2 = node.prev
    const next1 = this.next
    const next2 = node.next
    if (this.value === null || node.value === null) {
      console.log('No nodes for swap')
    } else {
      if (this.prev === null && node.next === null) {
        this.next = null
        this.prev = node.prev
        node.prev = null
        node.next = this.next
        next1.prev = node
        prev2.next = this
      } else {
        if (this.next === null && node.prev === null) {
          this.next = node.next
          this.prev = null
          node.prev = prev1
          node.next = null
          prev1.next = node
          next2.prev = this
        }
      }
      if (node === next1) {
        node.next = this
        node.prev = prev1
        this.next = next2
        this.prev = node
        if (next2 !== null) {
          next2.prev = this
        }
        if (prev1 !== null) {
          prev1.next = node
        }
      } else if (this === next2) {
        this.next = node
        this.prev = prev2
        node.next = next1
        node.prev = this
        if (next1 !== null) {
          next1.prev = node
        }
        if (prev2 !== null) {
          prev2.next = this
        }
      }
      else {
        if (prev1 !== null) {
          prev1.next = node
          node.next = next1
        } else {
          node.next = next1
        }
        if (prev2 !== null) {
          prev2.next = this
          this.next = next2
          node.prev = prev1
        } else {
          this.next = next2
          node.prev = prev1
        }
        if (next2 !== null) {
          next2.prev = this
          this.prev = prev2
        }
        if (next1 !== null) {
          next1.prev = node
        }
      }
    }
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
