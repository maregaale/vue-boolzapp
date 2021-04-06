const app = new Vue (
  {
    el: "#root",
    data: {
      emoji: [
        {
          category: "smileys",
          emojies: ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "🙁", "☹️",],
        },
        {
          category: "symbols",
          emojies: ["❤️", "🧡", "💛", "💚", "💙", "💜"],
        },
        {
          category: "gesture and body parts",
          emojies: ["👋", "🤚", "🖐", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤙",],
        },
        {
          category: "people",
          emojies: ["👶", "👧", "🧒", "👦", "👩", "🧑", "👨", "👩‍🦱",],
        },
      ],
      show: false,
      inputVal: "",
      newMessageText: "",
      contactsIndex: 0,
      contacts: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
      active: function (itemId) {
        this.contactsIndex = this.contacts.findIndex( (contact) => itemId == contact.id);
      },
            // FUNZIONE che trova la prima chat di chat filtrate
      check: function () {
        // array di indici
        const indexes = [];
        // pusho gli indici
        this.contacts.forEach((item, i) => {
          if (item.name.toLowerCase().includes(this.inputVal.toLowerCase())) {
            indexes.push(i);
          }
        });
        // se array non vuoto, prendo l'indice minore e lo eguaglio a contactsIndex
        if (indexes.length != 0) {
          this.contactsIndex = Math.min.apply( Math, indexes);
        }
        // pulisco valore input
        this.inputVal = "";
      },

      // FUNZIONE che aggiunge nuovo messaggio
      addNewMessage: function () {
        // controllo che la stringa di input sia non vuota
        if (this.newMessageText != "") {

          // pusho il nuovo messaggio nella rispettiva pagina di messaggistica
          this.contacts[this.contactsIndex].messages.push(
            {
              date: `${dayjs().format('DD')}/${dayjs().format('MM')}/${dayjs().format('YY')} ${dayjs().format('HH')}:${dayjs().format('mm')}:${dayjs().format('ss')}`,
              message: this.newMessageText,
              status: 'sent',
            },
          );
          // azzero il valore dell'input
          this.newMessageText = "";
        }
        // risposta dopo un secondo
        setTimeout( () => {
          // pusho il nuovo messaggio nella rispettiva pagina di messaggistica
          this.contacts[this.contactsIndex].messages.push(
            {
              date: `${dayjs().format('DD')}/${dayjs().format('MM')}/${dayjs().format('YY')} ${dayjs().format('HH')}:${dayjs().format('mm')}:${dayjs().format('ss')}`,
              message: 'ok',
              status: 'received',
            },
          );
        }, 1000);
      },

      // FUNZIONE che aggiunge emoji a nuovo messaggio
      insertEmoji: function (emoji) {
        this.newMessageText += emoji;
      }
    },
    computed: {
      // filtro sull'array dei contatti
      filteredList() {
        return this.contacts.filter((item, index) => {
          return item.name.toLowerCase().includes(this.inputVal.toLowerCase());
        })
      }
    },
  }
);
