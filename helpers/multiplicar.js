const fs = require('fs');

const getTablaMultiplicar = async (base, limite) => {
    try {
        let salida = '';
        console.log('======================'.green);
        console.log(`    Tabla del ${base}   `);
        console.log('======================'.green);

        for (let i = 1; i <= limite; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        console.log(salida);

        fs.writeFileSync(`tabla-del-${base}.txt`, salida);
        return `tabla-del-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getTablaMultiplicar
}