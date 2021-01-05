import card from '../../images/cards/WebServer_cards/card.png'
import card1 from '../../images/cards/WebServer_cards/card1.png'
//gallery
import img from '../../images/designArtifact/webServer/3-step.png'
import img1 from '../../images/designArtifact/webServer/component-structure.png'
import img2 from '../../images/designArtifact/webServer/component-structure1.png'
import img3 from '../../images/designArtifact/webServer/flow-chart.png'
import img4 from '../../images/designArtifact/webServer/hoso-layer-design.png'
import img5 from '../../images/designArtifact/webServer/linear-design.png'
import img6 from '../../images/designArtifact/webServer/protocol-stack.png'
import img7 from '../../images/designArtifact/webServer/use-case-overview.png'








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
    alt:' Interact with gadgets in real time' ,
    heading: ' Interact with gadgets in real time',
    intro: '',
    text: 'The web client must provide a real-time representation of the gadgets state and allows the user to interact with it. The goal of the homesome system is to have communication from source node to destination node and all the way back to the source to be in real time.',

},
{
    image:card1,
    alt:'Toggle list of rooms' ,
    heading: 'Toggle list of rooms ',
    intro: '',
    text: ' The user can switch between the rooms and see the list of the available rooms. Not all the users have access to all the gadgets.',
},
{
    image:card,
    alt:'Toggle list of  gadgets ' ,
    heading: 'Toggle list of  gadgets ',
    intro: '',
    text: 'The web client must provide a means for the user to interact and toggle the gadget’s state. Upon user interaction the update has to be automatically propagated to the remote endpoint, and it’s result visualized as a response to the user.',
},
{
    image:card1,
    alt:'Display gadget details' ,
    heading: 'Display gadget details',
    intro: '',
    text: 'The user can see the gadget’s details including their name, states and their current value. The gadget’s details are shown based on their usage and type. For instance, in case of an actuator which is used to show the state for a door, the user can see those values.',
},
{
    image:card,
    alt:'Client request list of gadget groups' ,
    heading: 'Client request list of gadget groups',
    intro: '',
    text: 'The web client must automatically request, fetch and process the list of gadgets and update the User Interface accordingly.',
},
{
    image:card1,
    alt:'Successful result of client automatic login attempt' ,
    heading: 'Successful result of client automatic login attempt',
    intro: '',
    text: 'The web client has to be able to process a successful result of automatic login, process the response, notify the user and authorize the logged in session to proceed to the dashboard page automatically without forcing the user to enter any data. The required data has to be taken by the application from the local storage.',
},
{
    image:card,
    alt:'User authentication' ,
    heading: 'User authentication',
    intro: '',
    text: 'The web client upon user authentication has to provide visual feedback of the sign in result, with the use of labels and tooltips if necessary.',
},
{
    image:card1,
    alt:'Ping the server for a solid connection',
    heading: 'Ping the server for a solid connection',
    intro: '',
    text: 'The web client may be able to ping at fixed intervals on the public server to keep the connection alive, even if the user is not actively interacting with the web app.',
},
{
    image:card,
    alt:'Client request to alter the gadget’s states',
    heading: 'Client request to alter the gadget’s states',
    intro: '',
    text: 'Client requests to alter a gadgets state and the gadgets state is changed based on the client’s request and the updated state will be shown to the user.',
},
{
    image:card1,
    alt:'Real-time representation of the gadgets',
    heading: 'Real-time representation of the gadgets',
    intro: '',
    text: 'The web client gadget list must at any moment reflect the public server state, providing a real-time representation of the gadgets. When the gadget state updates, the user interface has to automatically update accordingly.',
},
{
    image:card,
    alt:'Forwarding gadget removal request through public server',
    heading: 'Forwarding gadget removal request through public server',
    intro: '',
    text:'Public Server forwards gadget removal request. The public server takes care of the removal of the gadgets based on the request received and forward that specific request.',
},

]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'wave1',
    items: [
        {
        src: img,
        width: 4,
        height: 3,
        alt: '3-Step design'
        },
        
        {
        src: img1,
        width: 3,
        height: 3,
        alt: 'Component structure - overview'
        },
        
        {
        src: img2,
        width: 5,
        height: 3,
        alt: 'Component structure – panes'
        },
        
        {
        src: img3,
        width: 5,
        height: 6,
        alt: 'Flow chart - Abstract system overview.'
        },
        
        {
        src: img4,
        width: 5,
        height: 6,
        alt: 'HoSo Protocol layer design '
        },
        
        {
        src: img5,
        width: 5,
        height: 6,
        alt: 'Left-to-Right linear design with pane section highlighted'
        },
        
        {
        src: img6,
        width: 5,
        height: 6,
        alt: 'HoSo Protocol stack design'
        },
        
        {
        src: img7,
        width: 5,
        height: 6,
        alt: 'Use case -  System overview'
        },
        
            ]
    
}