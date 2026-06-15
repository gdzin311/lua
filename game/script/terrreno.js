class terreno
{
    constructor(width, height, ctx)
    {
        this.ctx = ctx;

        this.width = width;
        this.height = height;

        this.picos = [];
        this.plataformas = [];
        this.displacement = 180;
        
        //potencia de base 2 mais proxima da largura da tela para o algoritimo (Power of Two)
        this.PoT = Math.pow(2, Math.ceil(Math.log(this.width) / Math.log(2)));

        this.#gerar_picos();
        this.#gerar_plataformas();
    }

    #gerar_picos()
    {
        this.picos[0] = 450;
        this.picos[this.PoT] = 450;

        // intervalo entre +180 e -180 para criar a diferenca pós media dos vizinhos
        let forca = (Math.random() * (this.displacement * 2)) - this.displacement;

        for (let a = 1; a < this.PoT; a *= 2)
        {
            for (let b = this.PoT / a / 2; b < this.PoT; b += this.PoT / a)
            {
                this.picos[b] = (this.picos[b - this.PoT / a / 2] + this.picos[b + this.PoT / a / 2]) / 2 + forca
            }
            this.displacement *= 0.7;
        }
    }

    #gerar_plataformas()
    {

    }
}