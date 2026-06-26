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
        this.ctx.fillText("score: 0", this.width*0.03, this.height*0.09)
        this.ctx.fillText("time", this.width*0.03, this.height*0.12)
        this.ctx.fillText("fuel", this.width*0.03, this.height*0.15)

        this.ctx.fillText("score: 0", this.width*0.03, this.height*0.09)
        this.ctx.fillText("time", this.width*0.03, this.height*0.12)
        this.ctx.fillText("fuel", this.width*0.03, this.height*0.15)
    }    
}