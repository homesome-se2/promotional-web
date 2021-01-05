import card from '../../images/cards/Home_card/card.png'
import card1 from '../../images/cards/Home_card/card1.png'
//gallery
import img from '../../images/designArtifact/home/gadget_development_comp.png';
import img1 from '../../images/designArtifact/home/hoso_dataflow.png';
import img2 from '../../images/designArtifact/home/hoso_structure.png';
import img3 from '../../images/designArtifact/home/hoso_tasks.png';

/*Patterns: pointy, wave, wave2, square */
export const HeroInfo = {
    topLine: 'homesome',
    heading:'Full-scale smart home system',
    description:'HomeSome is a full-scale smart home system providing remote access to IoT devices inside a user’s home. A user can conveniently configure, monitor, and control devices remotely using either the dedicated Android companion-app or a web browser.' ,
    androidBtn: true,
    websiteBtn: true,
    pattern: 'wave',
  
}

export const InfoSectionInfo = {
    items:[
{
    image: card,
    alt:'Getting started',
    heading: 'Getting started',
    intro: 'Setup your own HomeSome smart home',
    text: 'All you need to get started with your smart home is a <strong>HomeSome hub</strong>. This is a free software designed to be deployed on a local machine, such as a Raspberry Pi inside your home. Next step is to include gadgets and automations. HomeSome offers a <strong>wide range of plug-and-play gadgets</strong>, meaning they are easy to include and configure - with no coding needed. The gadgets can optionally be grouped on any criteria you wish. Get gadgets to talk with each other by setting up <strong>automation rules</strong>. This way, your home will act as you wish based on certain triggers, without you needing to physically interact with it. You now have a smart home!',

},
{
    image: card1,
    alt:'Remote access' ,
    heading: 'Remote access',
    intro: 'Access your local hub remotely',
    text: 'Your local hub can optionally be accessible from outside your home. By enabling this feature, and acquiring remote credentials, you can use either the dedicated <strong>Android companion-app</strong>, or a <strong>web browser</strong>, to monitor and control your smart home remotely. Remote access is realized via the dedicated <strong>HomeSome public server</strong>, which securely maps remote clients to their associated hubs.',
},
{
    image: card,
    alt:'Notable features' ,
    heading: 'Notable features',
    intro: 'A selection of HomeSome specifics',
    text: '<strong>Wide range of gadgets</strong>: From switches and sensors to GPS. <strong>Gadget Home/Away</strong>: A special software gadget that uses coordinates from Android devices to calculate who in the family are home and away. This is very useful for setting up smart automations. <strong>Plug-and-play gadgets</strong>: No coding needed to add new gadgets. <strong>Automations</strong>: Make your home autonomous ( = smart). <strong>Full-duplex</strong>: Remote communication is reported in real-time, assuring you always see the latest state of your smart home.<strong> Manual/Automatic login</strong>: For remote access, once a successful manual login has occured from a device, the device will receive credentials to use for automatic login henceforth (no user interaction).',
},
{
    image: card1,
    alt:'Platform components' ,
    heading: 'Platform components',
    intro: 'The instances of HomeSome',
    text: '<strong>Hub</strong>: The logical brain of each user’s smart home. Responsible for managing gadgets and automations, and responding to requests from remote clients. <strong>Gadgets</strong>: The smart home devices being managed via the hub. <strong>Web client</strong>: A web interface for remote access to a user’s smart home. Has additional support for admin users to configure gadgets. <strong>Android client</strong>: Companion app for remote access to a user’s smart home. <strong>Public server</strong>: Maps remote clients (Android or web) to associated hubs. Inspects and forwards data, and verifies privileges. ',
},

]

}
/*Patterns: pointy1, wave1, wave12, square1 */
export const PreviewImg = {
    pattern: 'wave1',
    items: [
{
src: img,
width: 15,
height: 9,
alt: "Gadget development process"
},

{
src: img1,
width: 15,
height: 9,
alt: "Data flow example"
},

{
src: img2,
width: 9,
height: 6,
alt: "HomeSome platform architecture"
},

{
src: img3,
width: 9,
height: 6,
alt: "Instance responsibilities"
},

]

}