import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

public class Stock {
    public static void main(String[] args) {
        System.out.println(Arrays.toString(solution(new int[]{1, 2, 3, 2, 3})));
    }

//    /Solution.java:6: error: cannot find symbol
//    Stack<Integer> stack =new Stack<>();
//        ^
//    symbol:   class Stack
//    location: class Solution

//    public static int[] solution(int[] prices) {
//
//        System.out.println("solution ? ");
//        int[] answer = new int[prices.length];
//
//        Stack<Integer> stack =new Stack<>();
//
//        for (int i = 0; i < prices.length; i++) {
//
//            if(!stack.empty()) {
//                System.out.println("for stack.peek : " +stack.peek());
//            }
//
//            while (!stack.empty() && prices[stack.peek()] > prices[i]) {
//                answer[stack.peek()] = i - stack.peek();
//                System.out.println("pop stack.peek : " +stack.peek());
//                stack.pop();
//            }
//
//            stack.push(i);
//        }
//
//        while (!stack.empty()) {
//
//            if(!stack.empty()) {
//                System.out.println("while stack.peek : " +stack.peek());
//            }
//
//            answer[stack.peek()] = prices.length - 1 - stack.peek();
//            stack.pop();
//        }
//
//        return answer;
//    }

    public static int[] solution(int[] prices) {

        System.out.println("solution ? ");
        int[] answer = new int[prices.length];

        for (int i = 0; i < prices.length; i++) {

            if(i == prices.length - 1) {
                answer[i] = 0;
                continue;
            }

            for (int j = i; j < prices.length; j++) {

                if(prices[i] > prices[j] || j == prices.length - 1) {
                    answer[i] = j - i;
                    break;
                }
            }
        }

        return answer;
    }

}
