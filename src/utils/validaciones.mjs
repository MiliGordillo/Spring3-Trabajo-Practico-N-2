export function validarSuperheroe({ nombreSuperHeroe, nombreReal, edad, poderes }) {
    const errores = [];

    const validarTexto = (campo, nombreCampo) => {
        if (
            typeof campo !== 'string' ||
            !campo.trim() ||
            campo.trim().length < 3 ||
            campo.trim().length > 60
        ) {
            errores.push(`${nombreCampo} debe tener entre 3 y 60 caracteres y no puede estar vacío o tener solo espacios`);
        }
    };

    validarTexto(nombreSuperHeroe, "nombreSuperHeroe");
    validarTexto(nombreReal, "nombreReal");

    if (typeof edad !== 'number' || isNaN(edad) || edad < 0) {
        errores.push("Edad debe ser un número mayor o igual a 0");
    }

    if (!Array.isArray(poderes) || poderes.length === 0) {
        errores.push("Poderes debe ser un arreglo no vacío de strings");
    } else {
        poderes.forEach((poder, index) => {
            if (
                typeof poder !== 'string' ||
                !poder.trim() ||
                poder.trim().length < 3 ||
                poder.trim().length > 60
            ) {
                errores.push(`Poder en índice ${index} debe tener entre 3 y 60 caracteres y no estar vacío o contener solo espacios`);
            }
        });
    }

    return errores;
}
