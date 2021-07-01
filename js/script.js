const app = new Vue({
    el: '#app',
    data: {
        lastChat:'',
        tempText:'',
        currentChat:'none',
        filtro:'',
        contacts: [    
            {        
                name: 'Michele',        
                avatar: '_1',        
                visible: true,    
                messages: [            
                    {                
                        date: '10/01/2020 15:30:55',                
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'            
                    },            
                    {                
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'            
                    },            
                    {                
                        date: '10/01/2020 16:15:22',                
                        text: 'Tutto fatto!',
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
                        text: 'Ciao come stai?',                
                        status: 'sent'
                    },            
                    {                
                        date: '20/03/2020 16:30:55',                
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'            
                    },            
                    {                
                        date: '20/03/2020 16:35:00',                
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',                
                        status: 'sent'            
                    }        
                ]    
            }
        ],
    },
    beforeMount(){
        this.currentChat = this.contacts[0];
        this.lastChat = this.currentChat;
    },
    // beforeUpdate(){
    //     this.contacts.sort(function(a,b){
    //         // let date1 = a.messages[this.contacts[a].messages.length - 1];
    //         // let date2 = b.messages[this.contacts[b].messages.length - 1];
    //         // return date1.diff(date2)
    //         let contactA = a.messages[a.messages.length - 1].date;
    //         let contactB = b.messages[b.messages.length - 1].date;
            
    //         console.log(contactA );
    //         console.log(contactB );
    //         if (parseInt(contactA.$y) < parseInt(contactB.$y)){
    //             if (parseInt(contactA.$M) < parseInt(contactB.$M)){
    //                 if (parseInt(contactA.$D) < parseInt(contactB.$D)){
    //                     if(parseInt(contactA.$H) < parseInt(contactB.$H)){
    //                         if(parseInt(contactA.$m) < parseInt(contactB.$m)){
    //                             if(parseInt(contactA.$s) < parseInt(contactB.$s)){
    //                                 if(parseInt(contactA.$ms) < parseInt(contactB.$ms)){
    //                                     this.lastChat = b;
    //                                     return -1
    //                                 }
    //                                 this.lastChat = a;
    //                                 return 1
    //                             }
    //                             this.lastChat = a;
    //                             return 1
    //                         }
    //                         this.lastChat = a;
    //                         return 1
    //                     }
    //                     this.lastChat = a;
    //                     return 1
    //                 }
    //                 this.lastChat = a;
    //                 return 1
    //             }
    //             this.lastChat = a;
    //             return 1
    //         }
    //         this.lastChat = a;
    //         return 1
    //     });
    // },
    methods: {
        getAvatar(contact){
            let img = contact.avatar;
            let dir = 'img/avatar'+ img +'.jpg';
            return dir;
        },
        changeLastChat(indice){
            this.lastChat = this.contacts[indice];
        },
        changeCurrentChat(indice){
            this.currentChat = this.contacts[indice];
        },
        getDate(){
            let date = dayjs();
            console.log(date);
            return date
            
            // let today = new Date();
            // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            // let time = today.getHours() + ":" + today.getMinutes() + ":" + 
            // today.getSeconds();
            // let dateTime = date+' '+time;
            // return dateTime
        },

        timer(){
            let timer = setTimeout(this.autoMsg, 3000);
        },
        
        autoMsg(){
            let newMsg = {
                date: this.getDate(),
                text: 'ok',
                status: 'received'
            };
            this.currentChat.messages.push(newMsg);
        },

        sendMsg(){
            
            let newMsg = {
                date: this.getDate(),
                text: this.tempText,
                status: 'sent'
            };
            this.currentChat.messages.push(newMsg);
            this.tempText = '';
            this.timer();
            // let timer = setTimeout(() => {
                
            //     let newMsg = {
            //         date: this.getDate(),
            //         text: 'ok',
            //         status: 'received'
            //     };
            //     this.currentChat.messages.push(newMsg);
            // }, 3000);
            console.log(this.currentChat);
            
        },
        filter(){
            
            let filtroMin = this.filtro.toLowerCase();
            // this.filtro = this.filtro.toLowerCase()
            for(let i = 0; i < this.contacts.length; i++){
                let nomeMin = this.contacts[i].name.toLowerCase();
                if (!nomeMin.includes(filtroMin)){
                    this.contacts[i].visible = false;

                }
                else{
                    this.contacts[i].visible = true;
                }
            }
        }
    }
})