const app = new Vue (
  {
    el: "#root",
    data: {
      newMessageText: "",
      messagesInserted: [],
      contactsIndex: 0,
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
                date: `${dayjs().format('DD')}/${dayjs().format('MM')}/${dayjs().format('YY')} ${dayjs().format('HH')}:${dayjs().format('mm')}:${dayjs().format('ss')}`,
                message: this.messagesInserted[this.messagesInserted.length - 1],
                status: 'sent'
              },
            );
            // azzero il valore dell'input
            this.newMessageText = "";
        }
      },
      focus: function (index) {
        // rimuovo le classi dai list-items
        for (var i = 0; i < this.$refs.list_item.length; i++) {

          if (this.$refs.list_item[i].classList.contains("list_item_color") == true) {

            this.$refs.list_item[i].classList.remove("list_item_color");
          }
        }
        this.$refs.list_item[index].classList.add("list_item_color");
      }
    },
  }
);
