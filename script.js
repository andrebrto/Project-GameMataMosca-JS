/*Dimensões do Jogo */
let height = 0 
let width = 0
let lifes = 1
let time = 16
let creatflytimer = 1500

let nivel = window.location.search
nivel = nivel.replace('?' , '')

if(nivel === 'normal'){
    creatflytimer = 1500

}else if(nivel === 'dificil'){  
    creatflytimer = 1000

}else if(nivel ==='chucknorris'){
    creatflytimer = 750

}


function adjustScreenGame () {
     height = window.innerHeight
     width = window.innerWidth

    console.log(height, width)
}

adjustScreenGame()

let timer = setInterval(function(){

    time -= 1
    if(time < 0 ){
        clearInterval(timer)
        clearInterval(creatFly)
        window.location.href = 'winner.html'
    }else{
        document.getElementById('timer').innerHTML = time

    }
    
    
}, 1000)

/*Posiçoes aleatorias */

function randomFly() {

    //remover mosquito se existir um 
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(lifes > 3){
            window.location.href = 'gameover.html'
        }else{
            document.getElementById('v' + lifes).src = "imagens/coracao_vazio.png"

            lifes++
        }

        
    }
    let positionY = Math.floor(Math.random() * height) - 90
    let positionX = Math.floor(Math.random() * width) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionY, positionX)

    //criar elemento html
    let fly = document.createElement('img')
    fly.src = 'imagens/mosca.png'
    fly.className = randomSize() + ' ' + randomSide()
    fly.style.left = positionX + 'px'
    fly.style.top = positionY + 'px'
    fly.style.position = 'absolute'
    fly.id = 'mosquito'
    fly.onclick = function(){
        this.remove()
    }

    document.body.appendChild(fly)

    
}

let creatFly = setInterval(function(){
    randomFly()
}, creatflytimer)



function randomSize(){
    let size = Math.floor(Math.random() * 3)
    
    switch (size) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function randomSide(){
    let size = Math.floor(Math.random() * 2)
    
    switch (size) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }

}

