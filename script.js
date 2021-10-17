let ls = [51,56,58,59,61];

let copyLs=ls.slice();
let result=[];
let rest=[];
let finalRest=[];
let sum=[];


let i,p,w,k,arg;

function getSecondArg(arg){

    console.log(rest=ls);
        for(let x=0;x<arg.length;x++){
            rest=rest.filter((elem)=>{
            return elem!==arg[x];
            })
        finalRest=rest;   
        }
return finalRest;
}

function getFinalResult(value,t){
    value.map((item)=>{
        item=[].concat.apply([],item);
        item=(item.reduce((a,b)=>a+b,0))-t;
        sum.push(item);
    });
    let negative = sum.filter((elem)=>{
        return elem<0;
    });
    if(negative.length==0){
        console.log("There is no acceptable result");
    }
    else
    {
        let max=Math.max.apply(null, negative);
        let index=sum.indexOf(max);
        let x=value[index];
        console.log(`Resulting array of digits  ${x}, less than k by ${max} `);
        return x;
    }
}

let chooseDistance = (t, k, ls) => {
if(k>4){
    console.log("There is no acceptable result");
}    

if(k==4){
    function getFirstArg(i,p,w,k){
        let argFirst,arg=[];
        if(k==4){
            argFirst=ls.slice(i,i+1);
            argFirst=argFirst.concat(ls[p]);
            argFirst=argFirst.concat(ls[w]);    
        }
        arg=arg.concat(argFirst);
        return arg;    
    }
    
    function getCombination(i,p,w,k){
    
        let o=getFirstArg(i,p,w,k);
        console.log(o);
        let n=getSecondArg(o);
        console.log(n);
        
    
        for(j=0;j<n.length;j++){
            let semiResult=o.concat(n[j]);
            result.push(semiResult);
        }
        return result;
    }

    
    for(let c=0;c<ls.length;c++){
        for(let a=0;a<ls.length;a++){
            for(i=c,p=a,w=0;w<ls.length;w++){
                if(a==i){
                    console.log("we met a=i!");
                    continue;
                }
                if(w==i){
                    console.log("we met w=i!");
                    continue;
                }
                if(w==p){
                    console.log("we met w=p!");
                    continue;
                }
                console.log(getCombination(i,p,w,4));    
            }
        }
    }
}
else if(k==3){
    function getFirstArg(i,p,k){
        let argFirst,arg=[];
        argFirst=ls.slice(i,i+1);
        argFirst=argFirst.concat(ls[p]);
        arg=arg.concat(argFirst);
        return arg;    
    }
    
    function getCombination(i,p,k){
        let o=getFirstArg(i,p,k);
        console.log(o);
        let n=getSecondArg(o);
        console.log(n);
        
    
        for(j=0;j<n.length;j++){
            let semiResult=o.concat(n[j]);
            result.push(semiResult);
        }
        return result;
    }
    
    for(let a=0;a<ls.length;a++){
        for(i=a,p=0;p<ls.length;p++){
            if(p==i){
                console.log("we met w=i!");
                continue;
            }
            else{
                console.log(getCombination(i,p,3));    
            }
        }
    }
}
else if(k==2){
    function getFirstArg(i,k){
        let argFirst,arg=[];
        argFirst=ls.slice(i,i+1);
        arg=arg.concat(argFirst);
        return arg;    
    }
    function getCombination(i,k){
        let o=getFirstArg(i,k);
        console.log(o);
        let n=getSecondArg(o);
        console.log(n);

        for(j=0;j<n.length;j++){
            let semiResult=o.concat(n[j]);
            result.push(semiResult);
        }
        return result;
    } 
    for(i=0;i<ls.length;i++){
        console.log(getCombination(i,2));    
    }  
}
return getFinalResult(result,t)
}



chooseDistance (174, 3, ls);

