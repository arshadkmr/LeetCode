const sortList = (head) => {
    if (!head) return null
    let arr = []
    let current = head
    while (current) {
        arr.push(current.val)
        current = current.next
    }
    console.log(arr);
}
head = [-1, 5, 3, 4, 0]
console.log(sortList(head));