# Task B – CargoCraft Fleet

This task computes the minimum and maximum number of crafts that can form a total of `n` propulsion units using:

- Type A (4 units)
- Type B (6 units)

Odd values of `n` cannot be formed.

For valid cases:

- **Maximum** crafts: use more 4-unit crafts
- **Minimum** crafts: use more 6-unit crafts first

---

## How to Run

Compile:
javac Main.java

Run:
java Main

---

## Input Format

t  
n  
n  
...

## Example

Input:
4  
4  
7  
24  
100

Output:
1 1  
-1  
4 6  
17 25
