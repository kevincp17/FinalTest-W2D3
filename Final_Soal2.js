function rotateArray(arr,n){
    let currentEl,nextEl;
    const orgininalArray=arr;
    let rotatedArray=orgininalArray;
    let result='Array Original:['+arr+"]\n";
    for(let i=0;i<3;i++){
        for(let j=0;j<arr.length-1;j++){
            if(j==0){
                currentEl=arr[j];
                nextEl=arr[j+1];
                arr[j]=arr[arr.length-1];
                arr[j+1]=currentEl;
            }
            else{
                currentEl=arr[j+1];
                arr[j+1]=nextEl;
                nextEl=currentEl;
            }
        }
        result+="Rotasi "+(i+1)+" :["+arr+"]\n";
        // const orgininalArray=arr;
    }
    return result;
}

const arr = [3,8,9,7,6];
console.log(rotateArray(arr,3)); // putar 3x




/**
Result : 
[3, 8, 9, 7, 6] => [6, 3, 8, 9, 7]
[6, 3, 8, 9, 7] => [7, 6, 3, 8, 9]
[7, 6, 3, 8, 9] => [9, 7, 6, 3, 8]
*/