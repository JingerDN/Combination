let ls = [51,56,58,59,61];
let k=3;
let result=[];
let preresult=[];
let copied=ls.slice();
let sum=[];




const chooseDistance = (t, k, ls) => {

    function getCombination(copied,k){
        let previous=[];
        for(j=k;j>1;j--){
            previous=(result[result.length - 1]).join(' ').split(",");
            next=previous.map(i=>+i)
        
            for(i=2;i<copied.length;i++){
                if(next.includes(copied[i])){
                    next.splice(2,next.indexOf(copied[i]));
                }
                else if(next.length!==3){
                    next.push(copied[i]);
                }   
            }
            result.push([next]);
        }return result;
    }
    
    function SaveFirst(copied,preresult,result){
        preresult=[copied[0],copied[1],copied[2]];
        return result.push([preresult]);
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
    

  
//-----------------------------------start--from--ls[0],ls[1],ls[2]-digits--------------------------------------------------
//1-st--element
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[0],ls[2]-digits--------------------------------------------------
//1-st--element
copied.splice(1,2,copied[2], copied[1]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[0],ls[3]-digits--------------------------------------------------
//1-st--element
copied.splice(1,3,copied[3], copied[2],copied[1]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[0],ls[4]-digits--------------------------------------------------
//1-st--element
copied.splice(1,4,copied[4], copied[2],copied[3],copied[1]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[2],ls[0]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,2,copied[1],copied[0]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[1],ls[2]-digits--------------------------------------------------
//1-st--element
copied.splice(1,2,copied[2],copied[1]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[1],ls[3]-digits--------------------------------------------------
//1-st--element
copied.splice(1,3,copied[3],copied[1],copied[2]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[1],ls[4]-digits--------------------------------------------------
//1-st--element
copied.splice(1,4,copied[4],copied[1],copied[2],copied[3]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[2],ls[0]-digits--------------------------------------------------
//1-st--element
copied.splice(0,5,copied[3],copied[4],copied[0],copied[1],copied[2]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[2],ls[1]-digits--------------------------------------------------
//1-st--element
copied.splice(1,2,copied[2],copied[1]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[2],ls[3]-digits--------------------------------------------------
//1-st--element
copied.splice(1,4,copied[4],copied[1],copied[2],copied[3]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[2],ls[4]-digits--------------------------------------------------
//1-st--element
copied.splice(1,4,copied[4],copied[1],copied[2],copied[3]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);

//-----------------------------------start--from--ls[3],ls[0]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,4,copied[3],copied[0],copied[1],copied[2]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[3],ls[1]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,4,copied[3],copied[1],copied[0],copied[2]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[3],ls[2]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,4,copied[3],copied[2],copied[0],copied[1]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[3],ls[4]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,5,copied[3],copied[4],copied[0],copied[1],copied[2]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);

//-----------------------------------start--from--ls[4],ls[0]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,5,copied[4],copied[0],copied[1],copied[2],copied[3]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[4],ls[1]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,5,copied[4],copied[1],copied[0],copied[2],copied[3]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[4],ls[2]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,5,copied[4],copied[2],copied[0],copied[1],copied[3]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);
//-----------------------------------start--from--ls[4],ls[3]-digits--------------------------------------------------
//1-st--element
copied=ls.slice();
copied.splice(0,5,copied[4],copied[3],copied[0],copied[1],copied[2]);
SaveFirst(copied,preresult,result);
//2-d--element
getCombination(copied,k);


return getFinalResult(result,t);
}

console.log(chooseDistance(174,k, ls ));



