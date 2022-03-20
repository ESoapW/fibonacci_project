import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

class Solution{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(sortfib(fib(n)));
        
    }
    private static ArrayList<Integer> sortfib(int[] fib){
        ArrayList<Integer> even = new ArrayList<>();
        ArrayList<Integer> odd = new ArrayList<>();
        for(int num: fib){
            if(num%2==0){
                even.add(num);
            }else{
                odd.add(num);
            }
        }
        Collections.sort(even);
        Collections.reverse(even);
        Collections.sort(odd);
        Collections.reverse(odd);
        even.addAll(odd);
        return even;
    }
    private static int[] fib(int n){
        if(n==0){
            return new int[]{};
        }
        if(n==1){
            return new int[]{0};
        }
        if(n==2){
            return new int[]{0,1};
        }
        int[] fibs = new int[n];
        fibs[0] = 0;
        fibs[1] = 1;
        for(int i=2; i<n; i++){
            fibs[i] = fibs[i-2]+fibs[i-1];
        }
        return fibs;
    }
}