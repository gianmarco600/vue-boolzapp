const app = new Vue({
    el: '#app',
    data: {
        tempText:'',
        currentChat:'none',
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
    mounted(){
        this.currentChat = this.contacts[0];
    },
    methods: {
        getAvatar(contact){
            let img = contact.avatar;
            let dir = 'img/avatar'+ img +'.jpg';
            return dir;
        },
        changeCurrentChat(indice){
            this.currentChat = this.contacts[indice];
        },
        getH(string){
            let a = string.split("");
            return a[1]
        },
        sendMsg(){
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + 
            today.getSeconds();
            let dateTime = date+' '+time;
            let newMsg = {
                date: dateTime,
                text: this.tempText,
                status: 'sent'
            };
            this.currentChat.messages.push(newMsg);
            this.tempText = '';

        }
        
    }
})