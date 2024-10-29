let valor;
        valor = parseInt(prompt('Ingrese un valor comprendido entre 1 y 5:'));
        switch (valor) {
            case 1:
                document.write('uno');
                break;
            case 2:
                document.write('dos');
                break;
            case 3:
                document.write('tres');
                break;
            case 4:
                document.write('cuatro');
                break;
            case 5:
                document.write('cinco');
                break;
            default:
                document.write('debe ingresar un valor comprendido entre 1 y 5.');
        }
document.write('<br>');

let col;
        col = prompt('Ingrese alguno de estos tres colores (rojo, verde, azul)');
        switch (col) {
            case 'rojo':
                document.write('se ingresó rojo');
                break;
            case 'verde':
                document.write('se ingresó verde');
                break;
            case 'azul':
                document.write('se ingresó azul');
                break;
        }
document.write('<br>');

let x;
        x = 1;
        while (x <= 10) {
            document.write(x);
            document.write('<br>');
            x = x + 1;
        }

document.write('<br>');

for (let f = 1; f <= 10; f++) {
            document.write(f + " ");
        }