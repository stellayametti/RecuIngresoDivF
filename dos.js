/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/

function mostrar() {
    let nombreIngresado;
    let carrera;
    let sexo;
    let cantidadMaterias;
    let notaPromedio;
    let edadIngresada;
    let contadorA = 0;


    let banderaMejorPromedio = 0;
    let mejorPromedioFisica;
    let nombreMejorPromedioFisica;

    let banderaAlumnaMasJoven = 0;
    let edadMasjoven;
    let nombreMasJoven;


    let contadorQuimica = 0;
    let contadorFisica = 0;
    let contadorSistemas = 0;
    let porcentajeQuimica;
    let porcentajeFisica;
    let porcentajeSistemas;

    let masMaterias;
    let edadMasMAterias;
    let nombreMasMAterias
    let banderaMasMateriasEceptuado = 0;



    for (contadorA = 0; contadorA < 500; contadorA++) {

        nombreIngresado = prompt("Ingrese el nombre del alumno");

        while (isNaN(nombreIngresado) == false) {
            nombreIngresado = prompt("Error# Ingrese el nombre del alumno");
        }

        carrera = prompt("Ingrese  carrrera quimica - fisica- sistemas");

        while (isNaN(carrera) == false || carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") {
            carrera = prompt("Error# Ingrese la carrera nuevamente  quimica - fisica - sistemas");
        }

        sexo = prompt("Ingrese sexo femenino - masculino- no binario");

        while (isNaN(sexo) == false || sexo != "femenino" && sexo != "masculino" && sexo != "no binario") {
            sexo = prompt("Error# Ingrese sexo femenino -masculino- no binario");
        }

        cantidadMaterias = prompt("Ingrese la cantidad de materias  (1-5)");
        cantidadMaterias = parseInt(cantidadMaterias);

        while (isNaN(cantidadMaterias) == true || cantidadMaterias < 1 || cantidadMaterias > 5) {
            cantidadMaterias = prompt("Error# Ingrese una cantidad  valida  (1-5)");
            cantidadMaterias = parseInt(cantidadMaterias)
        }
        // Nota promedio (entre 0 y 10)edad (validar)se debe informar de existir, o informar que no existe ,

        notaPromedio = prompt("Ingrese nota promedio entre 0 y 10");
        notaPromedio = parseFloat(notaPromedio);

        while (isNaN(notaPromedio) == true || notaPromedio < 0 || notaPromedio > 10) {
            notaPromedio = prompt("Error# Ingrese nota promedio entre 0 y 10");
            notaPromedio = parseFloat(notaPromedio)
        }


        edadIngresada = prompt("Ingrese edad de 18 hasta 90 ");
        edadIngresada = parseInt(edadIngresada);

        while (isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 90) {
            edadIngresada = prompt("Error# Ingrese  edad de 18 hasta 90 ");
            edadIngresada = parseInt(edadIngresada)
        }



        //b
        if (sexo == "femenino") {

            if (banderaAlumnaMasJoven == 0 || edadIngresada < edadMasjoven) {
                edadMasjoven = edadIngresada;
                nombreMasJoven = nombreIngresado;

                banderaAlumnaMasJoven = 1;

            }
        }
        //c
        switch (carrera) {
            case "quimica":
                contadorQuimica++;

                break;

            case "fisica":
                contadorFisica++;
                //a
                if (banderaMejorPromedio == 0 || notaPromedio > mejorPromedioFisica) {
                    mejorPromedioFisica = notaPromedio;
                    nombreMejorPromedioFisica = nombreIngresado;

                    banderaMejorPromedio = 1;
                }

                break;

            case "sistemas":

                contadorSistemas++;

                break;
        }
        if (carrera != "quimica") {

            //d
            if (banderaMasMateriasEceptuado == 0 || cantidadMaterias > masMaterias) {
                masMaterias = cantidadMaterias;
                edadMasMAterias = edadIngresada;
                nombreMasMAterias = nombreIngresado;

                banderaMasMateriasEceptuado = 1;
            }
        }


    }//fin while

    //a
    if (banderaMejorPromedio > 0) {
        console.log("El nombre del mejor promedio de los alumnos que estudian Fisica. " + nombreMejorPromedioFisica + "con promedio de " + mejorPromedioFisica);
    } else {
        console.log("no se registran datos")
    }

    //b
    if (banderaAlumnaMasJoven = 0 > 0) {
        console.log(" El nombre de la alumna mas joven" + nombreMasJoven + "con años" + edadMasjoven);
    } else {
        console.log("no se registran dato");

    }

    //c
    if (contadorQuimica > 0) {
        porcentajeQuimica = contadorQuimica * 100 / contadorA;
        console.log("El promedio alumnos estudian quimica es ;" + porcentajeQuimica + "%");

    } else {
        console.log("no se registran datos");
    }
    if (contadorFisica > 0) {
        porcentajeFisica = contadorFisica * 100 / contadorA;
        console.log("El promedio alumnos estudian fisica es ;" + porcentajeFisica + "%");

    } else {
        console.log("no se registran datos");
    }

    if (contadorSistemas > 0) {
        porcentajeSistemas = contadorSistemas * 100 / contadorA;
        console.log("El promedio alumnos estudian sistemas es ;" + porcentajeSistemas + "%");

    } else {
        console.log("no se registran datos ");
    }

    //d
    if (banderaMasMateriasEceptuado = 0 > 0) {
        console.log("La edad y nombre del estudiante que cursa mas materias exceptuando Quimica es ;" + edadMasMAterias + " y " + nombreMasMAterias + " respectivamente");
    } else {
        console.log("no se registran datos");
    }
}
