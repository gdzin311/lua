class terreno
{
    constructor(tela)
    {
        this.y = [];
        this.displacement = 180;
        this.power = tela;
        this.a= [];


    }

    #criar()
    {
        this.y[0] = 450;
        this.y[this.power] = 450;

        for (a = 1; a < d; a *= 2)
        {
            for (b = d / a / 2; b < d; b += d / a)
            {
                this.y[b] = (this.y[b - d / a / 2] + this.y[b + d / a / 2]) / 2 + c.getRandomRange(-this.displacement, this.displacement);
            }
            this.displacement *= 0.7;
        }
    }
}