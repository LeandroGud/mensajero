// ============================================================================
//  CONFIGURACIÓN DE FIREBASE
// ============================================================================
//  👉 PEGA AQUÍ TUS CREDENCIALES DE FIREBASE.
//
//  Cómo obtenerlas:
//    1. Ve a https://console.firebase.google.com/
//    2. Crea un proyecto (o abre uno existente).
//    3. En "Compilación" > "Realtime Database", crea una base de datos.
//       - Elige un modo (para pruebas puedes empezar en "modo de prueba").
//    4. En la rueda ⚙️ > "Configuración del proyecto" > pestaña "General",
//       baja hasta "Tus apps" y registra una app web (</>).
//    5. Firebase te dará un objeto `firebaseConfig` como el de abajo:
//       copia esos valores y reemplaza los de este archivo.
//
//  IMPORTANTE: el valor `databaseURL` es OBLIGATORIO para Realtime Database.
//  Si no aparece en el snippet, cópialo desde la consola de Realtime Database
//  (tiene la forma: https://TU-PROYECTO-default-rtdb.firebaseio.com).
// ============================================================================

export const firebaseConfig = {
  apiKey: "AIzaSyCs9QEFobhK-BnCeLt_2gOUkFDscoY5RFo",
  authDomain: "mensajero-9ec88.firebaseapp.com",
  databaseURL: "https://mensajero-9ec88-default-rtdb.firebaseio.com",
  projectId: "mensajero-9ec88",
  storageBucket: "mensajero-9ec88.firebasestorage.app",
  messagingSenderId: "9769863858",
  appId: "1:9769863858:web:d256bcd1f1923e113957ab",
};

// Ruta dentro de la base de datos donde se guarda el mensaje.
// El emisor escribe aquí y el receptor escucha aquí. Puedes cambiarla si
// quieres tener varios "canales" (por ejemplo: "mensajes/sala1").
export const RUTA_MENSAJE = "mensajero/mensaje";

// ============================================================================
//  REGLAS DE SEGURIDAD SUGERIDAS (pégalas en Realtime Database > Reglas)
//  Para una demo pública sin autenticación:
//
//  {
//    "rules": {
//      "mensajero": {
//        ".read": true,
//        ".write": true
//      }
//    }
//  }
//
//  ⚠️ Estas reglas permiten que CUALQUIERA lea y escriba. Úsalas solo para
//  pruebas. Para producción, añade autenticación o reglas más estrictas.
// ============================================================================
