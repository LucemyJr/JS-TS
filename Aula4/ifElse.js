// Entre 0 - 11 - Bom dia
// Entre 12 - 17 - Bom dia
// Entre 18 - 23 - Bom dia

// If pode ser usado sozinho
// Sempre que o Else for usado, ele precisa ter um If antes
// Posso ter varios Else If na checagem, porem apenas um Else sozinho

const hora = 25

if(hora >= 0 && hora <= 11){
    console.log('Bom dia')
}else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde')
}else if(hora >= 18 && hora <= 23){
    console.log('Boa noite')
}else{
    console.log('Horário inválido')
}