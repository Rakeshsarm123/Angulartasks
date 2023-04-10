list=[
    {name:'rakesh',marks:99},
     {name:'sarma',marks:100},
     {name:'rakeshsarma',marks:96},

 ]

 let student=list.reduce(function(std1,std2){
     return std1.marks>std2.marks?std1:std2

 })
 console.log("The highest marks scored by the student is",student)