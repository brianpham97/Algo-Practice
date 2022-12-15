const bfs = require('./bfs.js')

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;

test('bfs search true', () => {
  expect(bfs(A, 'A')).toBe(true)
})

test('bfs search true false', () => {
  expect(bfs(A, 'W')).toBe(false)
})

