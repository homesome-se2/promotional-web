import card from '../../images/cards/Android_cards/card.png'
import card1 from '../../images/cards/Android_cards/card1.png'


export const HeroInfo = {
    topLine: 'homesome',
    heading:'Android client',
    description:'The Android companion app is a convenient endpoint used for controlling the smart home. The android application provides a smooth and fast interaction with the gadgets connected to the homesome system.' ,
    androidBtn: true,
    pattern: 'square',
  
}


export const InfoSectionInfo = {
    pattern: 'wave',

    items:[
{
    image: card,
    alt:'Request Procedure' ,
    heading: 'Request procedure',
    intro: 'Figure showing the request procedure used by hoso system',
    text: ' Explenation of the request procedure ',

},
{
    image: card1,
    alt:'Voice Commands' ,
    heading: 'Voice Commands',
    intro: 'Control gadget states with voice commands',
    text: 'Be able to give voice commands and get a voice respond when gadget changes happen. For example when a gadget changes state there will be some voice that`s saying "Living room light, off" ',
},
{
    image:card,
    alt:'GPS Track Position' ,
    heading: 'GPS track position',
    intro: 'GPS track position of user and enable automatic gadget responses',
    text: 'Picking up data automatically when selected sensors are changing state. Possibility to make this interaction with the Json class.',
},

{
    image:card1,
    alt:'Voice FeedBack' ,
    heading: 'Voice FeedBack',
    intro: 'Voice response',
    text: 'On gadget state change, voice feedback will be enabled and give the user the current gadget state information.',
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
    alt:'Background Services' ,
    heading: 'Background services',
    intro: 'Perform long-running operations in the background',
    text: 'Be able to have services running in the background at all times, or in other words: A Service is an application component that can perform long-running operations in the background, and it does not provide a user interface.',
},

{
    image:card,
    alt:'Plug and Play' ,
    heading: 'Plug and Play',
    intro: 'Plug and Play',
    text: 'Plug and Play.',
},

]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'square1',
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