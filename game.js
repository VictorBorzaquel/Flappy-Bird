console.log ('[Victor Borzaquel] Flappy Bird');

const sprites = new Image();
sprites.src = 'sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

//-- OBJETOS --//
// [Player]
const flappyBird = {
    sourceX: 0, //Posição no Sprite [X]
    sourceY: 0, //Posição no Sprite [Y]
    width: 34,  // Tamanho do recorte [Largura]
    height: 24, // Tamanho do recorte [Altura]
    x: 10, // Posição desenho no Canvas [X]
    y: 50, // Posição desenho no Canvas [Y]
    speed: 0,
    gravity: 0.25,
    update() {
        flappyBird.speed = flappyBird.speed + flappyBird.gravity;
        console.log (flappyBird.speed);
        flappyBird.y = flappyBird.y + flappyBird.speed;
    },
    draw() { // Variavel para desenhar na tela
        contexto.drawImage(
            sprites,
            flappyBird.sourceX, flappyBird.sourceY, //Sprite X e Y
            flappyBird.width, flappyBird.height, // Tamanho do recorte
            flappyBird.x, flappyBird.y, // Posição desenho no Canvas
            flappyBird.width, flappyBird.height, // Tamanho do desenho no Canvas
        );
    }
}
// [Chao]
const floor = {
    sourceX: 0, //Posição no Sprite [X]
    sourceY: 610, //Posição no Sprite [Y]
    width: 224,  // Tamanho do recorte [Largura]
    height: 112, // Tamanho do recorte [Altura]
    x: 0, // Posição desenho no Canvas [X]
    y: canvas.height - 112, // Posição desenho no Canvas [Y]
    draw() { // Variavel para desenhar na tela
        contexto.drawImage(
            sprites,
            floor.sourceX, floor.sourceY, //Sprite X e Y
            floor.width, floor.height, // Tamanho do recorte
            floor.x, floor.y, // Posição desenho no Canvas
            floor.width, floor.height, // Tamanho do desenho no Canvas
        );
        contexto.drawImage(
            sprites,
            floor.sourceX, floor.sourceY, //Sprite X e Y
            floor.width, floor.height, // Tamanho do recorte
            (floor.x + floor.width), floor.y, // Posição desenho no Canvas
            floor.width, floor.height, // Tamanho do desenho no Canvas
        );
    }
}
// [Fundo]
const background = {
    sourceX: 390, //Posição no Sprite [X]
    sourceY: 0, //Posição no Sprite [Y]
    width: 276,  // Tamanho do recorte [Largura]
    height: 204, // Tamanho do recorte [Altura]
    x: 0, // Posição desenho no Canvas [X]
    y: canvas.height - 204, // Posição desenho no Canvas [Y]
    draw() { // Variavel para desenhar na tela
        contexto.fillStyle = '#70c5ce'; //Plano de fundo Azul
        contexto.fillRect(0, 0, canvas.width, canvas.height);

        contexto.drawImage(
            sprites,
            background.sourceX, background.sourceY, //Sprite X e Y
            background.width, background.height, // Tamanho do recorte
            background.x, background.y, // Posição desenho no Canvas
            background.width, background.height, // Tamanho do desenho no Canvas
        );
        contexto.drawImage(
            sprites,
            background.sourceX, background.sourceY, //Sprite X e Y
            background.width, background.height, // Tamanho do recorte
            (background.x + background.height), background.y, // Posição desenho no Canvas
            background.width, background.height, // Tamanho do desenho no Canvas
        );
    }
}
//-- ANIMAÇÃO --//
function loop() { // FPS da animação do Jogo
    // Atualizar
    flappyBird.update();
    // Desenhar
    background.draw();
    floor.draw();
    flappyBird.draw();
    // Função para reiniciar Loop
    requestAnimationFrame(loop); 
}

loop(); // Chamar a função de animação
