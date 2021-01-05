import card from '../../images/cards/Gadget_cards/card.png'
import card1 from '../../images/cards/Gadget_cards/card1.png'
//gallery
import img from '../../images/designArtifact/gadget/overview.png'
import img1 from '../../images/designArtifact/gadget/preliminary-local-hub.png'
import img2 from '../../images/designArtifact/gadget/startup-sequence.png'
import img3 from '../../images/designArtifact/gadget/use-case.png'




/*Patterns: pointy, wave, wave2, square */
export const HeroInfo = {
    topLine: 'homesome',
    heading:' Gadgets & Local Hub; The key components of the system.',
    description:'The gadgets & local hub are the key components in the system. They are communicating by using TCP sockets and sending strings according to the HOSO protocol.' ,
    pattern: 'pointy',
  
}


export const InfoSectionInfo = {
    pattern: 'wave',

    items:[
{
    image: card,
    alt:'TCP-connection to hardware gadgets' ,
    heading: 'TCP-connection to hardware gadgets',
    intro: 'TCP communication',
    text: 'There should be a consistent TCP-connection between the hardware gadgets and the local hub. The local hub will act as a client and the gadget will act as a server, this leads to a better battery consumption and the local hub can connect to the gadget at any given time.',

},
{
    image: card1,
    alt:' TCP-connection to a public server using websockets' ,
    heading: 'TCP-connection to a public server using websockets',
    intro: 'TCP communication (Websockets)',
    text: 'There should be a consistent TCP-connection between the public server and the local hub. In this case the local hub will be acting as client and the public server will be acting as server.',
},
{
    image: card,
    alt:'Poll states from gadgets' ,
    heading: 'Poll states from gadgets',
    intro: 'Request gadget state at a certain interval',
    text: 'The local hub should be able to poll from gadgets. This will be done by requesting the gadgets state for example; every 5 minutes.',
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
    alt:'Process requests from public server' ,
    heading: 'Process requests from public server',
    intro: '',
    text: 'The local hub should be able to process the requests sent from the public server. This will most often mean that it forwards the message to a specific gadget. This will be done by having a thread that listens for incoming requests.',
},
{
    image: card1,
    alt:'LogSystem/Exception Handling' ,
    heading: 'LogSystem/Exception Handling',
    intro: 'Exception handling',
    text: 'Both the hub and the gadgets should have good exception handling, this could be forwarded to the public server or to a text file on the local hub. If needed the messages should display something on the android/web device.',
},
{
    image: card,
    alt:'Respond to the public server.' ,
    heading: 'Respond to the public server.',
    intro: '',
    text: 'The local hub also has the responsibility to respond to the public server, this can be done when a sensor gadget wants to tell that the temperature has changed. This means that the local hub sends the message to the public server and the public server sends it out to active clients. This will be done by using a thread that listens for outgoing requests.',
},
{
    image: card1,
    alt:'XOR cipher encryption' ,
    heading: 'XOR cipher encryption',
    intro: '',
    text: 'Encryption should be implemented between the local-hub and gadgets. The encryption method used is XOR cipher.',
},
{
    image: card,
    alt:'Executable file/runnable file' ,
    heading: 'Executable file/runnable file',
    intro: '',
    text: 'One good thing would be if we could create an executable file that contains the local hub, gadgets and all libraries. This would give the user a premium experience with almost no preparation needed except than connecting and configuring gadgets.',
},

]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'pointy1',
    items: [
        {
        src: img,
        width: 6,
        height: 3,
        alt: 'Displays an overview over the system and where the local-hub and gadgets are located.'
        },
        
        {
        src: img1,
        width: 6,
        height: 3,
        alt: 'Preliminary local-hub design'
        },
        
        {
        src: img2,
        width: 6,
        height: 4,
        alt: 'displays the startup sequence of the local-hub.'
        },
        
        {
        src: img3,
        width: 5,
        height: 3,
        alt: 'Displays a use-case diagram over the local-hub, public server and gadgets.'
        }
        
            ]
}