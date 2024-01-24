let i = 0;
while (i<6){
    i++;
    if (i === 2) {
        continue; // Ignora el bucle actual y continua con la siguiente iteración.  
    }
    if (i === 4)
    {
        break;
    }
    console.log(i);
}