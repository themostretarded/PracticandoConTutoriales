var fondoJuego;
var boton;
var juego = new Phaser.Game(370,550,Phaser.CANVAS,'bloque_juego');
var estadoPrincipal = {
	preload: function(){
	juego.load.image('fondo','img/bg.jpeg');
	juego.load.image('pajaro','img/pajaro1.png');
	juego.load.image('btn','img/btn.png');
	},
	create: function(){
		fondoJuego = juego.add.tileSprite(0,0,370,550,'fondo');
		boton =
		juego.add.sprite(juego.width/2,juego.height/2,'btn');
		boton.anchor.setTo(0.5);
	},
}