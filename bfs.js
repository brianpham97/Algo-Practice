const bfs = (node, target) => {
  let queue = [node]

  while (queue.length > 0) {
    let current = queue.shift()
    if (current.val === target) {return true}
    if (current.left !== null) {queue.push(current.left)}
    if (current.right !== null) {queue.push(current.right)}
  }
  return false
}

module.exports = bfs

