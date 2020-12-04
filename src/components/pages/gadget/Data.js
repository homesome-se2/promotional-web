import card from '../../images/cards/Gadget_cards/card.png'
import card1 from '../../images/cards/Gadget_cards/card1.png'

/*Patterns: pointy, wave, wave2, square */
export const HeroInfo = {
    topLine: 'homesome',
    heading:'Gadgets & Local hub',
    description:'The local hub is the main connection point between the server and gadgets therefore the hub manages the gadgets connected to it by being able to handle and process client requests to the different gadgets. Being able to notify the client if there are any state changes and handle some of the gadgets automation.' ,
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
    alt:'Background Services' ,
    heading: 'Background services',
    intro: 'Perform long-running operations in the background',
    text: 'Be able to have services running in the background at all times, or in other words: A Service is an application component that can perform long-running operations in the background, and it does not provide a user interface.',
},
{
    image: card1,
    alt:'LogSystem/Exception Handling' ,
    heading: 'LogSystem/Exception Handling',
    intro: 'Exception handling',
    text: 'Both the hub and the gadgets should have good exception handling, this could be forwarded to the public server or to a text file on the local hub. If needed the messages should display something on the android/web device.',
},

]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'pointy1',
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