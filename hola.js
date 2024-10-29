alert ('¡Hola mundo!');
document.write('Hola Mundo');
	document.write('<br>');
	let nombre;
        let edad;
        nombre = prompt('Ingrese su nombre:');
        edad = prompt('Ingrese su edad:');
        document.write('Hola ');
        document.write(nombre);
        document.write(' asi que tienes ');
        document.write(edad);
        document.write(' años');
	document.write('<br>');
	let valor1;
        let valor2;
        valor1 = prompt('Ingrese primer número:');
        valor2 = prompt('Ingrese segundo número');
        let suma = parseInt(valor1) + parseInt(valor2);
        let producto = parseInt(valor1) * parseInt(valor2);
        document.write('La suma es ');
        document.write(suma);
        document.write('<br>');
        document.write('El producto es ');
        document.write(producto);
 	document.write('<br>')
	let nota1, nota2, nota3;
        nota1 = prompt('Ingrese 1ra. nota:');
        nota2 = prompt('Ingrese 2da. nota:');
        nota3 = prompt('Ingrese 3ra. nota:');
        //Convertimos los 3 string en enteros
        nota1 = parseInt(nota1);
        nota2 = parseInt(nota2);
        nota3 = parseInt(nota3);
        let pro;
        pro = (nota1 + nota2 + nota3) / 3;
        if (pro >= 7) {
            document.write('promovido');
        } else {
            if (pro >= 4) {
                document.write('regular');
            } else {
                document.write('reprobado');
            }
        }