const data = new Date()

let diaSemana = data.getDay()

let diaDeHoje

switch(diaSemana){
    case 0:
        diaDeHoje = 'Domingo'
        break
    case 1:
        diaDeHoje = 'Segunda-feira'
        break
    case 2:
        diaDeHoje = 'Terça-feira'
        break
    case 3:
        diaDeHoje = 'Quarta-feira'
        break
    case 4:
        diaDeHoje = 'Quinta-feira'
        break
    case 5:
        diaDeHoje = 'Sexta-feira'
        break
    case 6:
        diaDeHoje = 'Sábado'
    break
}


console.log(`Hoje é ${diaDeHoje}`)