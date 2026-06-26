class Hud
{
    constructor(width, height, ctx)
    {
        this.ctx = ctx;

        this.width = width;
        this.height = height;

        this.ctx.font = "15px Arial";
        this.ctx.fillStyle = "black";
    }

    print()
    {
        this.ctx.textAlign= "start";

        this.ctx.fillText("score: 0", this.width*0.03, this.height*0.09);
        this.ctx.fillText("time: " + segundos, this.width*0.03, this.height*0.12);
        this.ctx.fillText("fuel", this.width*0.03, this.height*0.15);

        this.ctx.fillText("X Velocity: " + nave.vx.toFixed(2), this.width*0.85, this.height*0.09);
        this.ctx.fillText("Y Velocity: " + nave.vy.toFixed(2), this.width*0.85, this.height*0.12);
        this.ctx.fillText("Angle: " + Math.abs(Math.trunc(nave.angle)), this.width*0.85, this.height*0.15);
    }

    multiplicadores()
    {
        if(segundos%2 == 0)
        {
            this.ctx.textAlign = "center";
            for(let i of terreno.plataformas)
            {
                this.ctx.fillText(i.multiplicador, i.xInicial + (i.xFinal - i.xInicial)/2, i.y + 15);
            }
        }
    }
}