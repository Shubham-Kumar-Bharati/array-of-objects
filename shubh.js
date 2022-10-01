// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']
//

let arr = [];
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]
                       for(let i of studentRecords){
                       let x = i.name.toUpperCase()
                       arr.push(x);
                       }
                          console.log(arr);

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
// 

let arr = [];
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ] 
                       
                      for (let i of studentRecords){
                        if(i.marks>50){
                          arr.push(i);
                        }
                      }
                      console.log(arr);
                     
                      
// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.  

let arr = [];
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

          for(let i of studentRecords){
            if(i.marks>50 && i.id>120){
                arr.push(i);
            }
          }
          console.log(arr);

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let sum =0;
 let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]                        

          for(let i of studentRecords){
            sum= sum + i.marks;
          }
          console.log(sum);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.


let arr = [];
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ] 

                       for(let i of studentRecords){
                        if(i.marks>50){
                           arr.push(i.name) ;
                        }
                       }
                       console.log(arr);
                       
// Question 6: This time we are required to print the sum of marks of the students with id > 120
let sum = 0;
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ] 
                       for (let i of studentRecords){
                        if(i.id > 120){
                            sum = sum + i.marks
                        }
                       }
                       console.log(sum);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.                       
                                            

let sum = 0;
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ] 

                       for(let i of studentRecords){
                         if(i.marks<50){
                            i.marks=i.marks+15;
                         }
                         if(i.marks > 50){
                         sum = sum + i.marks;}
                       }
                       console.log(sum);

//  Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.   

let studentRecords1 = {
    name : "shubham",
    class : 5,
    roll : 12
}
let studentRecords2 = {
    name : "pooja",
    class : 6,
    roll : 45
} 
let studentRecords3 = {
    name : "sudhir",
    class : 7,
    roll : 25
}
let studentRecords4 = {
    name : "kumar",
    class : 9,
    roll : 36
}
let studentRecords5 = {
    name : "bharati",
    class : 8,
    roll : 47
}
let studentRecords6 = {
    name : "abhishek",
    class : 7,
    roll : 35
}

let arr = [studentRecords1 ,studentRecords2 , studentRecords3 , studentRecords4, studentRecords5 , studentRecords6];
console.log(arr);
