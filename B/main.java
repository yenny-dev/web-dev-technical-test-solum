// Task B - CargoCraft Fleet
// Type A: 4 units, Type B: 6 units
// Find the minimum and maximum number of crafts that can form total n.

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            long n = sc.nextLong();

            // 4 and 6 only produce even totals
            if (n % 2 != 0) {
                System.out.println(-1);
                continue;
            }
            
            // Maximum: use as many 4-unit crafts as possible
            long max = n / 4;

            // Minimum: try using more 6-unit crafts first
            long min = -1;
            long b = n / 6;

            while (b >= 0) {
                long rest = n - 6 * b;

                if (rest % 4 == 0) {
                    long a = rest / 4;
                    min = a + b;
                    break;
                }

                b--;
            }

            if (min == -1) {
                System.out.println(-1);
            } else {
                System.out.println(min + " " + max);
            }
        }

        sc.close();
    }
}