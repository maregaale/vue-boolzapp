const app = new Vue (
  {
    el: "#root",
    data: {
      newMessageText: "",
      messagesInserted: [],
      contactsIndex: 0,
      dateNow: {
        day: dayjs().format('DD'),
        mounth: dayjs().format('MM'),
        year: dayjs().format('YYYY'),
        hour: dayjs().format('HH'),
        minute: dayjs().format('mm'),
        second: dayjs().format('ss'),
      },
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_4',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
          ],
        },
      ],
    },
    methods: {
      // FUNZIONE che mostra la pagina dei messaggi corrispondente alla chat
      active: function (genericIndex) {
        this.contactsIndex = genericIndex;
      },
      // FUNZIONE che aggiunge nuovo messaggio
      addNewMessage: function () {

        // controllo che la stringa di input sia non vuota
        if (this.newMessageText != "") {
          // aggiungo il nuovo testo del messaggio all'array dei testi dei nuovi messaggi
          this.messagesInserted.push(this.newMessageText);
            // pusho il nuovo messaggio nella rispettiva pagina di messaggistica
            this.contacts[this.contactsIndex].messages.push(
              {
                date: `${this.dateNow.day}/${this.dateNow.mounth}/${this.dateNow.year} ${this.dateNow.hour}:${this.dateNow.minute}:${this.dateNow.second}`,
                message: this.messagesInserted[this.messagesInserted.length - 1],
                status: 'sent'
              },
            );
            // azzero il valore dell'input
            this.newMessageText = "";
        },
      }
    },
  }
);
