import card from '../../images/cards/WebServer_cards/card.png'
import card1 from '../../images/cards/WebServer_cards/card1.png'

/*Patterns: pointy, wave, wave2, square */
export const HeroInfo = {
    topLine: 'homesome',
    heading:'Web Server',
    description:'The web client is a user friendly interface for controlling the gadgets of the hoso system . The system is focused on the user experience aswell as user convenience. The web client allows users to control the smart home from client endpoint to gadget node.' ,
    websiteBtn: true,
    pattern: 'wave',
  
}


export const InfoSectionInfo = {
    pattern: 'wave',

    items:[
{
    image: card,
    alt:'Toggle list of rooms' ,
    heading: 'Toggle list of rooms',
    intro: 'Choose between a list of rooms',
    text: 'The user can switch between the rooms and see the list of the available rooms. Not all the users have access to all the gadgets.',

},
{
    image:card1,
    alt:'Toggle list of  gadgets' ,
    heading: 'Toggle list of  gadgets',
    intro: 'Choose between a list of gadgets',
    text: 'The web client must provide a means for the user to interact and toggle the gadget’s state. Upon user interaction the update has to be automatically propagated to the remote endpoint, and it’s result visualized as a response to the user.',
},
{
    image:card,
    alt:'Client automatic login (reconnect)' ,
    heading: 'Client automatic login (reconnect)',
    intro: 'Reconnect automatically',
    text: 'TThe web client has to provide an auto-login functionality through the recconnect feature, effectively allowing a user to easily restore a session. In order for the system to reconnect it requires the user to own a set of valid C_nameID and C_sessionKey.',
},
{
    image:card1,
    alt:'. Application’s error handling' ,
    heading: 'Application’s error handling',
    intro: 'Error handling',
    text: 'The web client must intercept the server error and act accordingly updating the user interface and notifying the user. The application has to provide error handling for specific errors as well as a generic exception.',
},
{
    image:card,
    alt:'Run as Linux daemon on VPS' ,
    heading: 'Run as Linux daemon on VPS',
    intro: 'Run on linux machine',
    text: 'After developing the server in Java code and packaging it. The server shall run on a linux machine. Further, the linux machine security precautions could be configured to guarantee the best and safest performance to the server supposedly by limiting the communication ports of the linux machine and only accept communication from a specific port.',
},
{
    image:card1,
    alt:'User authentication' ,
    heading: 'User authentication',
    intro: 'Authentication',
    text: 'The web client upon user authentication has to provide visual feedback of the sign in result, with the use of labels and tooltips if necessary.',
},
{
    image:card,
    alt:'Real-time representation of the gadgets' ,
    heading: 'Real-time representation of the gadgets',
    intro: 'Representating the gadget by updating UI',
    text: 'The web client gadget list must at any moment reflect the public server state, providing a real-time representation of the gadgets. When the gadget state updates, the user interface has to automatically update accordingly.',
},

]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'wave1',
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