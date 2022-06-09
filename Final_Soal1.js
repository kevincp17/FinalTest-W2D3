// x = posisi awal, y=target posisi, k= jarak temputh satu kali lompatan
function totalLompat(x,y,k){
    let jump=0;
    while(x<y){
        x+=k;
        jump++;
    }
    return jump;
}

console.log(totalLompat(10,85,30));
//Output : 3