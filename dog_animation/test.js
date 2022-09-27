PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1
});

document.getElementById('display').appendChild(renderer.view)

var stage = new PIXI.Container();
PIXI.Loader.shared
    .add("dog", "cavapoochon-01.png")
    .load(setup);

var dog;

function setup() {
    stage.interactive = true;
    dog = new PIXI.Sprite(
        PIXI.Loader.shared.resources["dog"].texture
    );
    dog.interactive = true;
    dog.scale.set(0.5,0.5);
    dog.anchor.set(0.5,0.5);
    dog.pivot.set(0,0);

    dog.click = function() {
        dog.scale.x -= 0.1;
        dog.scale.y -= 0.1;
    }

    
    
    stage.addChild(dog);
    
    animationLoop();
}

function animationLoop() {
    requestAnimationFrame(animationLoop);
    

    dog.x = renderer.width / 2;
    dog.y = renderer.height / 2;

    dog.rotation += 0.01;
    
    

    renderer.render(stage);
}