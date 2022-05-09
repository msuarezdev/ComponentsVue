Vue.component("tabla",{
    props:{
        titulos: {
            type: Array,
            required: true
        },
        registros:{
            type: Array,
            required: true
        }
    },
    template:`
    <div class="table-responsive">
    <table class="table table-bordered table-hover">
        <thead class="thead__color">
            <tr>
                <th v-for="(item,i) in titulos" :key="i" scope="col">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(datosCripto, i) in registros" :key="i">
                <th v-for="(dato, d) in datosCripto" :key="d" :style="{'color':'#f2f2f2'}">{{ dato }}</th>
            </tr>
        </tbody>
    </table>
    </div>
    `
});

let app = new Vue({
    el:"#app",
    data:{
        tablaCripto: {
            titulos: [" ","Bitcoin (BTC)", "Etherum (ETH)", "Cardano (ADA)", "Solana (SOL)", "Tether (USDT)"],
            registros: [
                ["Año de creación", "2009", "2015", "2015", "2017", "2014"],
                ["Descentralizado", "sí", "sí", "sí", "sí", "no"],
                ["Emisión Total", "21.000.00", "ilimitada", "45.000.000.000", "500.000.000", "ilimitada"],
                ["Circulación", "19.021.550", "111.297.108", "33.752.565.071", "335.187.218", "83.217.377.095"],
                ["Protocolo", "poW", "PoW", "poS", "poS", "Omni"],
                ["Minería", "sí", "sí", "no", "no", "no",],
                ["Puesto en cap de mercado", "#1", "#2", "#8", "#7", "#3"],
                ["Precio máximo historico", "$65.466,84", "$4.651,46", "$2,96", "$158,96", "1,027"],
                ["Tiempo de bloque(promedio)", "10min", "15seg", "10min", "0,4seg", "2min"],
            ]
        },
        titulo: "Diferencias entre criptomonedas",
    
    },
    method:{ 
    clasesCss: {
        "colorText":true,
        },
    },
});