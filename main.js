const config ={
  type: Phaser.AUTO,
  parent: 'game',
  width: 360,
  height: 640,
  backgroundColor: '#ffda89',
  scale: {
    mode: Phaser.Scale.FIT
  },
  scene: {
    preload,
    create
  }  
};

const game = new Phaser.Game(config);

let score = 0;
let personaje;

let personajes = ['personaje.png', 'personaje2.png'];

let indexPersonaje = 0;

function preload(){

    this.load.image('player1', personajes[0]);
    this.load.image('player2', personajes[1]);

}

function create() {

  const scene = this;

    score = 0;

    document.getElementById("score").innerText = "Puntos: 0";

    document.getElementById("titulo").innerText = "Toca al personaje";

    personaje = this.add.image(180, 320, 'player1');

    personaje.setInteractive();

    personaje.setScale(0.3);

    personaje.on('pointerdown', () => {

        score++;

        document.getElementById("score").innerText = "Puntos: " + score;

        personaje.x = Phaser.Math.Between(50, 310);
        personaje.y = Phaser.Math.Between(50, 590);

        if(score === 10){

            document.getElementById("titulo").innerText = "¡Ganaste!";

            personaje.disableInteractive();

            scene.time.delayedCall(2000, () => {
                scene.scene.restart();
            });

        }

    });

    document.getElementById("cambiarPersonaje").addEventListener('click', () => {

        indexPersonaje = (indexPersonaje + 1) % personajes.length;

        personaje.setTexture('player' + (indexPersonaje + 1));

    });

}
