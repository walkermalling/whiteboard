# Stair Combo Problem

A child is running up a staircase with n steps, and can hop either 1 step,
2 steps, or 3 steps at a time.  Implement a method to count how many
possibilities the child can run up the stairs

### My Solution

The advantage of my solution is that you can specify any value for the max period, that is, the maximum amount of steps the child can 'hop' at once.  In the given solutions, a period of 3 is hard coded and refactoring would be non-trivial.

### Discussion From the Book

  We can approach this problem from the top does. On the very last hop, up to the nth step, the child could have done either a single, double or tripple hop.  That is, the last move might have been a single hop from step n - 1, a double step hop from step n - 2, or a tripe step hop from n -3.  The total number of ways of reaching the last step is therefore the sum of the number of ways of reaching each of the last three steps;

I don't find that breakdown terribly clear.

However, it is noteworthy tha this problem is big O(p^n) where p is the max period (in the description that is 3 hops) and n is the length of the staircase.  -- The book gives a second solution which cuts down O.

Also noteable is that number of solutions will quickly exceed the bounds of an integer.
