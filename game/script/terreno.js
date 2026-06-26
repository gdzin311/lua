class Terreno
{
    constructor(width, height, ctx)
    {
        this.ctx = ctx;

        this.width = width;
        this.height = height;

        this.picos = [];
        this.plataformas = {};
        this.forca = 180;
        
        //potencia de base 2 mais proxima da largura da tela para o algoritimo (Power of Two)
        this.PoT = Math.pow(2, Math.ceil(Math.log(this.width) / Math.log(2)));

        this.#gerar_picos();
        this.#gerar_plataformas();
    }

    #gerar_picos()
    {
        this.picos[0] = 350;
        this.picos[this.PoT] = 350;

        for (let a = 1; a < this.PoT; a *= 2)
        {   
            for (let b = this.PoT / a / 2; b < this.PoT; b += this.PoT / a)
            {
                // intervalo entre forca e -forca para gerar a diferenca entre os vizinhos
                let intervalo_forca = (Math.random() * (this.forca * 2)) - this.forca;
                
                this.picos[b] = (this.picos[b - this.PoT / a / 2] + this.picos[b + this.PoT / a / 2]) / 2 + intervalo_forca
            }
            this.forca *= 0.7;
        }
    }

    #gerar_plataformas()
    {
        for (let i = 0; i < 4; i++) 
        {
            let largura = Math.trunc(Math.random() * this.width * 0.08 + 15);
            let xInicial = Math.trunc(Math.random() * (this.width - largura));
            let xFinal = xInicial + largura;
            let y = this.picos[xInicial];

            for (let x = xInicial; x <= xFinal; x++) 
            {
                this.picos[x] = y;
            }

            this.plataforma.push({ xInicial, xFinal, y });
        }
    }

    draw()
    {
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath()
        for(let x = 0; x <= this.width; x += 3)
        {
            if(x === 0)
            {
                this.ctx.moveTo(0, this.picos[x]);
            }
            else if (this.picos[x] !== undefined) 
            {
                this.ctx.lineTo(x, this.picos[x]);
            }
        }
        this.ctx.stroke();
    }
}