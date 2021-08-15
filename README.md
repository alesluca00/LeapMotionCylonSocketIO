# Indice

- [Descrizione](#descrizione)
- [Istruzioni per l'uso](#Istruzioni-per-l'uso)
- [Librerie](#librerie)
- [Testato](#testato)
- [Licenza](#licenza)

</br>

# Descrizione

Questo progetto è composto da due applicazioni:

1. Nella prima applicazione il pc dove è installato il software per il leapmotion è il client ed invia il nome dei gesti che vengono effettuati con il leapmotion controller al raspberry pi che è il server.

2. Nella seconda applicazione il pc dove è installato il software per il leapmotion è il server ed invia il nome dei gesti che vengono effettuati con il leapmotion controller al raspberry pi che è il client.

Lista gesti implementati:

- Swipe right
- Swipe left
- Swipe up
- Swipe down
- Circle clockwise
- Circle counterclockwise
- Screen tap
- Key tap

</br>

# Istruzioni per l'uso

Di default il server è impostato per ascoltare nella porta 8000, nei programmi client bisogna impostare l'indirizzo ip e la porta del server al quale si vuole connettersi.

</br>

# Librerie

Come librerie ho utilizzato Node.js, Cylon.js per utilizzare il leapmotion, SocketIO per inviare i dati:

- [Cylon.js - Leap Motion](https://cylonjs.com/documentation/platforms/leapmotion/)
- [SocketIO](https://socket.io/)

Per installare le librerie:

- Cylon.js

    Aprire un terminale e digitare:
  
    ```code
    npm install cylon cylon-leapmotion
    ````

- SocketIO

    Per SocketIO ho installato due librerie:

    ```code
    npm install socket.io@3.1.1
    npm install socket.io-client@3.1.1 
    ```

</br>

# Testato

System:

- Windows (Windows 10)
- OSX (non testato ancora)
- Linux
  
</br>

# Licenza

[MIT](https://choosealicense.com/licenses/mit/)