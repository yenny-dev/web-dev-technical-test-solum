# Task A – Mystic Waves

This task computes the total magical energy after `n` alternating waves starting from `+x`.

The pattern is:

- x, -x, +x, -x ...

Because each pair cancels out:

- If n is even → total = 0
- If n is odd → total = x

---

## How to Run

python3 main.py

### Input Format

t  
x n  
x n  
...

### Example

Input:
4  
1 4  
2 5  
3 6  
4 7

Output:
0  
2  
0  
4
