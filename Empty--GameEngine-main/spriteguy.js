class SpriteGuy {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./spriteguy.png"), 0, 0, 105.6, 140, 8, 0.1);

        this.x = 0;
        this.y = 0;
        this.speed = 350;
    };

    update() {
        this.x += this.game.clockTick * this.speed;
        if (this.x > 1024) this.x = -105.6;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
} 