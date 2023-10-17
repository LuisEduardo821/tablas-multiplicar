const colors = require('colors');
const { getTablaMultiplicar } = require("./helpers/multiplicar");
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('l', {
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Es longitud de la tabla',

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            console.log('Debe ser un numero'.red);
        } else {
            return true;
        }
    })
    .argv;

console.clear();

getTablaMultiplicar(argv.b, argv.l)
    .then((nombreArchivo) => console.log(nombreArchivo, 'creado exitosamente'.green))
    .catch(console.log);