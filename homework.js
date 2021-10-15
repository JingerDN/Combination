let ls = [51,56,58,59,61];
let k=3;
let copyLs=ls.slice();
let result=[];


function getThree(i,p){
    let arg=[].concat(ls[i],ls[p]);
    console.log(arg);
let rest=ls.filter((elem)=>{
    return elem!==ls[i] && elem!==ls[p];
})
for(j=0;j<rest.length;j++){
    let semiResult=arg.concat(rest[j]);
    result.push(semiResult);
}return result;
}



for(i=0,p=1;p<ls.length;p++){
    getThree(i,p);
}

for(a=1;a<ls.length;a++){
    for(i=a,p=0;p<ls.length;p++){
        if(p==i){
          console.log("we met p=i");
          continue;
        }else{
        getThree(i,p);
       }
    }
}

console.log(result);