function enmarcarPalabras(texto) {
    // 1. Dividir por espacios comunes y filtrar para ignorar espacios dobles
    const palabras = texto.trim().split(" ").filter(palabra => palabra !== "");
    
    if (palabras.length === 0) return;
    // 2. Encontrar la longitud de la palabra más larga
    let maxLongitud = 0;
    for (const palabra of palabras) {
      if (palabra.length > maxLongitud) {
        maxLongitud = palabra.length;
      }
    }
  
    // 3. Definir el ancho total del marco (palabra + 2 asteriscos + 2 espacios)
    const anchoTotal = maxLongitud + 4;
    const lineaSuperiorInferior = "*".repeat(anchoTotal);
  
    // 4. Imprimir la parte superior del marco
    console.log(lineaSuperiorInferior);
  
    // 5. Imprimir cada palabra alineada a la izquierda con su relleno
    for (const palabra of palabras) {
      //  añade espacios a la derecha hasta alcanzar la longitud máxima
      const espaciosRelleno = " ".repeat(maxLongitud - palabra.length);
      console.log(`* ${palabra}${espaciosRelleno} *`); // cadena preformateaeda investigar
    }
     // 6. Imprimir la parte inferior del marco
  console.log(lineaSuperiorInferior);
}

    // --- Ejemplo funciona por favor ---
    enmarcarPalabras("En este reto quiero que funcione Dios");
