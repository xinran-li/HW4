# HW4
Answer questions 
How many lines are drawn each frame? In other words, how often does the for loop run?
38 lines ( 400 - 20 )/10


What do the first, second, and third appearances of the number 10 do in the code?
first 10 for the position of the starting in x axis.
second 10 for the pixel. "width-10" is for the range of loop.
third 10 for the adding to the x axis between two line. 



How many times does the loop body run each frame, once the x and y arrays are full?
 six times

What are two ways of increasing the spacing between rings?
(1) change "i = i + 10" into "i = i + 20" in line 15
(2) fill up var x = []; //var y = []; in line 5 and 6, give some number like " 10, 30, 60, 90, 120," to defiant the sapcing.  But have to change "i = i + 10" to " i ++".

How can you make the ellipse trail longer?
change line 19 and 20 to "x = x.slice(-90); // y = y.slice(-90);"
