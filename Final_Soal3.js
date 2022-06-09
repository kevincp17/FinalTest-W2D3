function findSimiliartyAndDifference(arr1,arr2){
    let similiarEl=[];
    let differentEl=[];
    /*
        salah satu array hanya perlu mencari kemiripan elemen
        sedangkan keduanya harus mencari perbedaan tiap array
    */
    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
            differentEl.push(arr1[i]);
        }
    }

    for(let i=0;i<arr2.length;i++){
        if(arr1.includes(arr2[i])){
            similiarEl.push(arr2[i]);
        }

        else if(!arr1.includes(arr2[i])){
            differentEl.push(arr2[i]);
        }
    }

    return "Same = ["+similiarEl+"]\nDifferent = ["+differentEl+"]";
}

const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol","Nangka","Timun"];
console.log(findSimiliartyAndDifference(array1,array2));
