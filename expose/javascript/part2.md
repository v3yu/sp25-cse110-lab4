1. 3 is printed out. This is the last value i gets incremented to at which point the for loop exits.
2. 150 is printed out. This is the last discounted price in the array, so it is the last value the variable discountedPrice takes when the function finishes executing.
3. 150 is printed out. This is the value of the last discountedPrice after rounding to the nearest integer.
4. It returns the array [50, 100, 150], which is an array of the three prices after the 0.5 discount.
5. ReferenceError. The variable i. which was declared with 'let', only exists in the scope of the for loop, so the console.log statement cannot access it.
6. ReferenceError. The variable discountedPrice, which was declared with 'let', only exists in the scope of the for loop, so the console.log statement cannot access it.
7. 150 is printed out. The variable discounted was declared with 'let' in the top level of the function, so it can be accessed by the console.log statement that is inside the function.
8. [50, 100, 150] is returned, which is correct. All the variables are in the narrowest scope possible for the parts of the function which need to be able to access them, and there are no errors.
9. ReferenceError. The variable i, which was declared with 'let', only exists in the scope of the for loop, so the console.log statement cannot access it.
10. 3 is printed out. length, which is 3, is the length of the initial array.
11. [50, 100, 150] is returned, which is correct. All the variables are in the narrowest scope possible for the parts of the function which need to be able to access them, and there are no errors. Also, const variables are declared with the intention of remaining unchanged throughout the function.
12. 
A. student.name
B. student['Grad Year']
C. student.greeting();
D. student['Favorite Teacher'].name
E. student.courseLoad[0]
13. 
A. '32'
B. 1
C. 3
D. '3null'
E. 4
F. 0
G. '3undefined'
H. NaN
14. 
A. true
B. false
C. true
D. false
E. false
F. true
15. === requires the data type to be the same, not just the data like == does, to evaluate two expressions as being equal to each other.
17. The result will be an array of [2, 4, 6]. The for loop in lines 3-5 call the doSomething function which takes a number and doubles it; the for loop runs this operation on all elements in the input array in order, then outputs a new array with the new numbers.
19. 1, then 4, then 3 print in that order at approximately the same time. Then after a second, 2 prints.