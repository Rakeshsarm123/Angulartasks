 str=['rakesh','sarma','rakeshsarma','addepallirakeshsarma']
 let lengthest_str=str.reduce((element1,element2)=>{
     return element1.length>element2.length?element1:element2
 })

 