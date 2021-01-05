import card from '../../images/cards/Android_cards/card.png'
import card1 from '../../images/cards/Android_cards/card1.png'
//gallery
import img from '../../images/designArtifact/android/buttons.png'
import img1 from '../../images/designArtifact/android/mainFunctions.png'
import img2 from '../../images/designArtifact/android/sequence-diagram.png'
import img3 from '../../images/designArtifact/android/sequence-diagram1.png'
import img4 from '../../images/designArtifact/android/system-class-diagram.png'


export const HeroInfo = {
    topLine: 'homesome',
    heading:'Android Application',
    description:'The Android companion app is a convenient endpoint used for controlling the smart home. The android application provides a smooth and fast interaction with the gadgets connected to the homesome system.' ,
    androidBtn: true,
    pattern: 'square',
  
}


export const InfoSectionInfo = {
    pattern: 'wave',

    items:[
{
    image: card,
    alt:'WorkerThread update UI' ,
    heading: 'WorkerThread update UI',
    intro: '',
    text: ' Background thread is important because it refers to the execution of tasks in different threads.',

},
{
    image: card1,
    alt:'Login' ,
    heading: 'Login',
    intro: '',
    text: 'Log in to the application with the help of username and password, the user should only have to log in once to always use the application.',
},
{
    image:card,
    alt:'List Gadgets' ,
    heading: 'List Gadgets',
    intro: '',
    text: 'List of all the gadgets that are connected to the system.',
},

{
    image:card1,
    alt:'Interact with gadgets' ,
    heading: 'Interact with gadgets',
    intro: 'Interact with gadgets',
    text: 'Interact with the gadgets, turn them off and on.',
},

{
    image:card,
    alt:'Login' ,
    heading: 'Login',
    intro: 'User login',
    text: 'Log in to the application with the help of username and password, the user should only have to log in once to always use the application.',
},

{
    image:card1,
    alt:'Voice Commands & Voice Feedback' ,
    heading: 'Voice Commands & Voice Feedback',
    intro: '',
    text: 'Be able to give voice commands and get a voice respond when gadget changes happen. For example when a gadget changes state there will be some voice thats saying “Living room light, off”.',
},

{
    image:card,
    alt:'Background services (notifications, locations)' ,
    heading: 'Background services (notifications, locations)',
    intro: '',
    text: 'Be able to have services running in the background at all times, or in other words: A Service is an application component that can perform long-running operations in the background, and it does not provide a user interface.',
},
{
    image:card1,
    alt:'Encrypted Data communication.' ,
    heading: 'Encrypted Data communication.',
    intro: '',
    text: 'The system should have an encryption scheme for the data that it is sending and receiving to prevent hackers from accessing the gadgets at home.',
},

]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'square1',
    items: [
        {
        src: img,
        width: 4,
        height: 3,
        alt: 'preliminary design. Clickable buttons that show and switch the state off a gadget. '
        },
        
        {
        src: img1,
        width: 5,
        height: 3,
        alt: 'The design for the main functions'
        },
        
        {
        src: img2,
        width: 5,
        height: 3,
        alt: 'An overview of sequence diagram for input from server to application'
        },
        
        {
        src: img3,
        width: 3,
        height: 2,
        alt: 'An overview of sequence diagram for sending from application to server.'
        },
        
        {
        src: img4,
        width: 6,
        height: 6,
        alt: 'This is a diagram whose purpose is to give you as a viewer an overview of how the system is structured.'
        },
        
            ]
}