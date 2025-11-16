# Task A - Mystic Waves
# The energy alternates: +x, -x, +x, -x ...
# If n is even → all pairs cancel out → total = 0
# If n is odd  → one extra +x remains → total = x

def main():
    import sys
    
    # Read x and n for this test case
    t = int(sys.stdin.readline().strip())
    
    for _ in range(t):
        # Read x and n for this test case
        x, n = map(int, sys.stdin.readline().split())
        
        # Determine total energy based on parity of n
        total_energy = x if n % 2 == 1 else 0
        
        print(total_energy)

if __name__ == "__main__":
    main()