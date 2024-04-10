for (let i = 0; i <= 10; i++) { // i = index   
    const par = i % 2 === 0

    if(par === true){
        console.log(`${i} é par`)
    }else{
        console.log(`${i} é ímpar`)
    }
}