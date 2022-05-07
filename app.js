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
    <div>
    <table>
        <thead>
            <tr>
                <th v-for="(item,i) in titulos" :key="i" scope="col">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(datosCripto, i) in registros" :key="i">
                <th v-for="(dato, d) in datosCripto" :key="d">{{ dato }}</th>
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
                ["Año de creación", "2009", "2015", "", "", ""],
                ["Descentralizado", "sí", "sí", "sí", "sí", "no"],
                ["Emisión Total", "21.000.00", "ilimitada", "", "", ""],
                ["Circulación", "18.400.700", "111.297.108", "", "", ""],
                ["Protocolo", "poW", "PoW", "", "", ""],
            ]
        },
    },
});