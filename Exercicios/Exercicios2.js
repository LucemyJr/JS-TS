// Função que recebe largura e altura e diz se a imagem está em modo paisagem ou retrato

// Meu Código

function serPaisagem(width, height) {
    if(width < height){
        console.log("A imagem está no modo Paisagem")
    }else if(width > height){
        console.log("A imagem está no modo Retrato")
    }else{
        console.log("A imagem é quadrada")
    }
}

serPaisagem(12,12)

// Código do Professor

const ePaisagem = (largura, altura) => largura > altura // Retorna um true ou false
console.log(ePaisagem(1920,1080))