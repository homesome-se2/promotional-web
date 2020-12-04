import card from '../../images/cards/PublicServer_cards/card.png'
import card1 from '../../images/cards/PublicServer_cards/card1.png'

/*Patterns: pointy, wave, wave2, square */
export const HeroInfo = {
    topLine: 'homesome',
    heading:'Public Server',
    description:'The public server is envisioned as the backbone of the system. The public server shall provide services and grants access or reclines to requests. It can be thought of as the bridge of connection between all the devices. The vision of the server is to have a public server that can accept and handle many clients at the same time. The server can do so by simply utilizing web sockets that will manage the multi-client in the background after the three handshake process is done and the client logged in to the server. ' ,
    pattern: 'wave2',
  
}


export const InfoSectionInfo = {
    items:[
{
    image: card,
    alt:'Client TCP-connection requests' ,
    heading: 'Client TCP-connection requests',
    intro: 'TCP communication',
    text: 'Launch connecting clients and initiating a session for that client and then adding it to a hashmap which will store that client and its session . The client request  will be then handled by the websockets connection. ',

},
{
    image: card1,
    alt:'Multi-session management' ,
    heading: 'Multi-session management',
    intro: 'Handle multiple client connections',
    text: 'The server shall handle multiple client connections and multiple requests  using a multithreading feature that will be managed by the use of  websockets. ',
},
{
    image: card,
    alt:'Database (MySQL)' ,
    heading: 'Database',
    intro: 'MySQL',
    text: 'The database will take the rule of authenticating the client and then connect it to the hub, which it will give the user the ability to access the gadgets associated with the hub. the database will contain the corresponding tables for example user and hub.',
},
{
    image: card1,
    alt:'. Execute gadget state changes from requests' ,
    heading: 'Execute gadget state changes from requests',
    intro: 'Request gadget state',
    text: 'The gadgets should be able to handle requests sent from the local hub.',
},
{
    image: card,
    alt:'Run as Linux daemon on VPS' ,
    heading: 'Run as Linux daemon on VPS',
    intro: 'Run on linux machine',
    text: 'After developing the server in Java code and packaging it. The server shall run on a linux machine. Further, the linux machine security precautions could be configured to guarantee the best and safest performance to the server supposedly by limiting the communication ports of the linux machine and only accept communication from a specific port.',
},
{
    image: card1,
    alt:'Filter client outputs' ,
    heading: 'Filter client outputs',
    intro: 'Filter data',
    text: 'Filter the outputs of the clients e.g the hub and user in order to separate the data received to pass it later to the right method. .',
},
{
    image: card,
    alt:'Encryption' ,
    heading: 'Encryption',
    intro: 'Integrity and confidentiality',
    text: 'The public server is the heart of the system, communication between the public server and the database as well as the other parts of the system should be secured. In order to guarantee the integrity and confidentiality of the system.',
},

]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'wave12',
    items: [
        {
        src: 'https://picsum.photos/seed/picsum/500/600',
        width: 4,
        height: 3
        },
        
        {
        src: 'https://picsum.photos/500/600?grayscale',
        width: 3,
        height: 3
        },
        
        {
        src: 'https://picsum.photos/500/600.jpg',
        width: 5,
        height: 3
        },
        
        {
        src: 'https://picsum.photos/id/1/500/600',
        width: 5,
        height: 6
        },
        
        {
        src: 'https://picsum.photos/seed/picsum/500/600',
        width: 5,
        height: 6
        },
        
        {
        src: 'https://picsum.photos/500/600?grayscale',
        width: 5,
        height: 6
        },
        
        {
        src: 'https://picsum.photos/500/600.jpg',
        width: 5,
        height: 6
        },
        
        {
        src: 'https://picsum.photos/id/1/500/600',
        width: 5,
        height: 6
        },
        
            ]
}