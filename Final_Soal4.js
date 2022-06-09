function makeTriangle(awal,akhir){
    let triangle1='';
    let count=1;
    for(let i=awal;i<=akhir;i++){
        for(let j=i;j<i+akhir;j++){
            if(j<i+count){
                triangle1+=j+" "; 
            }
        }
        count++;
        console.log(triangle1+"\n");
        triangle1='';
    }
    return triangle1;
}

console.log(makeTriangle(1,7));
/*
    1
    2 3
    3 4 5
    4 5 6 7
    5 6 7 8 9
    6 7 8 9 10 11
    7 8 9 10 11 12 13
*/

console.log(makeTriangle(5,11));
/*
    5
    6 7
    7 8 9
    8 9 10 11
    9 10 11 12 13
    10 11 12 13 14 15
    11 12 13 14 15 16 17
*/




