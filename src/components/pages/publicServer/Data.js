import card from '../../images/cards/PublicServer_cards/card.png'
import card1 from '../../images/cards/PublicServer_cards/card1.png'
//gallery
import img from '../../images/designArtifact/publicServer/class-diagram.png'
import img1 from '../../images/designArtifact/publicServer/consumer.png'
import img2 from '../../images/designArtifact/publicServer/EER.png'
import img3 from '../../images/designArtifact/publicServer/overview.png'
import img4 from '../../images/designArtifact/publicServer/producer.png'
import img5 from '../../images/designArtifact/publicServer/system-boot-interactions.png'
import img6 from '../../images/designArtifact/publicServer/use-case.png'







/*Patterns: pointy, wave, wave2, square */
export const HeroInfo = {
    topLine: 'homesome',
    heading:' Public server & Database the backbone of the system',
    description:'The public server & database shall provide services and grants access or reclines to requests. The server can do so by simply utilizing web sockets that will manage the multi-client in the background after the three handshake process is done and the client logged in to the server.' ,
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
    alt:'MySQL Database' ,
    heading: 'Database',
    intro: 'Securing the system by giving the permission access.',
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
    alt:'Running as Linux demon on VPS' ,
    heading: 'Run as Linux daemon on VPS',
    intro: 'The security precautions in the safe performance to the server.',
    text: ' The linux machine security precautions could be configured to guarantee the best and safest performance to the server supposedly by limiting the communication ports of the linux machine and only accept communication from a specific port.',
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
{
    image: card1,
    alt:'JSON config file' ,
    heading: ' JSON config file',
    intro: '',
    text: 'JSON configuration file will hold all the data needed to connect with the Database, as well as the server port of the particular client that requests to connect with the server. Class Settings holds fields corresponding to the key-value pairs of a JSON configuration file (config.json) which is read in at system boot.',
},
{
    image: card,
    alt:'Producer-consumer pattern' ,
    heading: 'Producer-consumer pattern',
    intro: 'The bridge of connection between all the devices',
    text: 'Forward data between users and hubs (secure bridge).',
},
]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'wave12',
    items: [
        {
        src: img,
        width: 4,
        height: 3,
        alt: 'UML Class Diagram.'
        },
        
        {
        src: img1,
        width: 3,
        height: 3,
        alt: 'Consumer'
        },
        
        {
        src: img2,
        width: 5,
        height: 3,
        alt: 'Image of the EER diagram propose the database scheme used'
        },
        
        {
        src: img3,
        width: 5,
        height: 6,
        alt: 'communication scheme.'
        },
        
        {
        src: img4,
        width: 5,
        height: 6,
        alt: 'producer'
        },
        
        {
        src: img5,
        width: 5,
        height: 6,
        alt: 'System boot and overall interactions within the public server.'
        },
        
        {
        src: img6,
        width: 5,
        height: 6,
        alt: 'UML Use Case Diagram.'
        },
            ]
}