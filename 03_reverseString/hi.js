function reverse(str) {
    let s2 = str.split(" ");
   let a = []
      const s3=s2.toReversed();
   console.log(s3)
   for (let i of s3){
    //   console.log(i)
     let s4=[]
     for (let j=i.length-1; j>=0; j--){
       s4.push(i[j]);
    //  console.log(s4)
     }
     a.push(s4)
   }
   console.log(a.toString())
 };
 reverse("hello world")
 