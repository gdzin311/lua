class Nave {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100;
        this.y = 100;
        this.vx = 0;
        this.vy = 0;
        this.accel = 0;
        this.angle = 0;
        this.gravidade = 0.009;
        this.combustivel

        window.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp")
                {
                    this.accel = 0.03;
                    this.combustivel--;
                }
            if (event.key === "ArrowLeft")  this.angle -= 0.1;
            if (event.key === "ArrowRight") this.angle += 0.1;
        });

        window.addEventListener("keyup", (event) => {
            if (event.key === "ArrowUp") this.accel = 0;
        });
    }

    update() {
        this.vx += Math.sin(this.angle) * this.accel;
        this.vy -= Math.cos(this.angle) * this.accel;
        this.vy += this.gravidade;
        this.x += this.vx;
        this.y += this.vy;
    }

    drawHitbox() {
        const w = 25, h = 25;
        const cos = Math.cos(this.angle);
        const sin = Math.sin(this.angle);

        const x0 = this.x + (-w/2) * cos - (-h/2) * sin;
        const y0 = this.y + (-w/2) * sin + (-h/2) * cos;
        const x1 = this.x + ( w/2) * cos - (-h/2) * sin;
        const y1 = this.y + ( w/2) * sin + (-h/2) * cos;
        const x2 = this.x + ( w/2) * cos - ( h/2) * sin;
        const y2 = this.y + ( w/2) * sin + ( h/2) * cos;
        const x3 = this.x + (-w/2) * cos - ( h/2) * sin;
        const y3 = this.y + (-w/2) * sin + ( h/2) * cos;

        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.closePath();
        this.ctx.fill();
    }
}