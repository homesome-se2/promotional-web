import React from 'react'
import LinkBtn from '../buttons/LinkBtn';
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import Navbar from '../../header/Navbar';
import './HeroSection.css'
import hoso_icon from '../../images/hoso-icon.svg';
import {HeroContainer,HeroBackground,HeroContent,TopLine ,Heading, Text_content, Button_Wrapper,Divider }  from './HeroSectionElement';

function HeroSection({
    topLine,heading,description,androidBtn,websiteBtn,pattern
   }) {

    function upperPattern(type){
        switch(type){
          case 'wave':
            return (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#744BFD" fill-opacity="1" 
              d="M0,96L30,133.3C60,171,120,245,180,282.7C240,320,300,320,360,277.3C420,235,480,149,540,138.7C600,128
              ,660,192,720,213.3C780,235,840,213,900,176C960,139,1020,85,1080,58.7C1140,32,1200,32,1260,26.7C1320,21,
              1380,11,1410,5.3L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,
              780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            )
            break;
            case 'wave2':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#744BFD" fill-opacity="1" 
                d="M0,256L6.2,261.3C12.3,267,25,277,37,277.3C49.2,277,62,267,74,256C86.2,245,98,235,111,218.7C123.1,203,
                135,181,148,165.3C160,149,172,139,185,144C196.9,149,209,171,222,165.3C233.8,160,246,128,258,106.7C270.8,85,
                283,75,295,64C307.7,53,320,43,332,80C344.6,117,357,203,369,224C381.5,245,394,203,406,181.3C418.5,160,431,160,
                443,138.7C455.4,117,468,75,480,53.3C492.3,32,505,32,517,80C529.2,128,542,224,554,245.3C566.2,267,578,213,591,165.3C603.1,
                117,615,75,628,74.7C640,75,652,117,665,138.7C676.9,160,689,160,702,160C713.8,160,726,160,738,149.3C750.8,139,763,117,775,133.3C787.7,
                149,800,203,812,197.3C824.6,192,837,128,849,96C861.5,64,874,64,886,74.7C898.5,85,911,107,923,128C935.4,149,948,171,960,154.7C972.3,139,
                985,85,997,96C1009.2,107,1022,181,1034,202.7C1046.2,224,1058,192,1071,186.7C1083.1,181,1095,203,1108,224C1120,245,1132,267,1145,250.7C1156.9,
                235,1169,181,1182,138.7C1193.8,96,1206,64,1218,74.7C1230.8,85,1243,139,1255,154.7C1267.7,171,1280,149,1292,122.7C1304.6,96,1317,64,1329,69.3C1341.5,
                75,1354,117,1366,133.3C1378.5,149,1391,139,1403,133.3C1415.4,128,1428,128,1434,128L1440,128L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,
                0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,
                1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,
                0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,
                0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,
                0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>
              )
              break;
            case 'square':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#744BFD" fill-opacity="1"
                 d="M0,320L0,192L288,192L288,32L576,32L576,64L864,64L864,224L1152,224L1152,224L1440,224L1440,0L1152,
                 0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"></path></svg>
              )
              break;
              case 'pointy':
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#744BFD" fill-opacity="1" 
                  d="M0,320L288,192L576,32L864,64L1152,224L1440,224L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>
                )
                break;
            default:
              return "";  
        }
      }

      function lowerPattern(type){
        switch(type){
          case 'wave':
            return (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#744BFD" fill-opacity="1" 
              d="M0,96L30,133.3C60,171,120,245,180,282.7C240,320,300,320,360,277.3C420,235,480,149,540,138.7C600,
              128,660,192,720,213.3C780,235,840,213,900,176C960,139,1020,85,1080,58.7C1140,32,1200,32,1260,26.7C1320,
              21,1380,11,1410,5.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,
              320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,
              320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            )
            break;
            case 'wave2':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#744BFD" fill-opacity="1" 
                d="M0,160L6.2,133.3C12.3,107,25,53,37,42.7C49.2,32,62,64,74,101.3C86.2,139,98,181,111,181.3C123.1,181,
                135,139,148,138.7C160,139,172,181,185,192C196.9,203,209,181,222,186.7C233.8,192,246,224,258,202.7C270.8,
                181,283,107,295,96C307.7,85,320,139,332,149.3C344.6,160,357,128,369,133.3C381.5,139,394,181,406,186.7C418.5,
                192,431,160,443,176C455.4,192,468,256,480,234.7C492.3,213,505,107,517,96C529.2,85,542,171,554,202.7C566.2,235,
                578,213,591,208C603.1,203,615,213,628,208C640,203,652,181,665,165.3C676.9,149,689,139,702,144C713.8,149,726,171,
                738,181.3C750.8,192,763,192,775,213.3C787.7,235,800,277,812,288C824.6,299,837,277,849,245.3C861.5,213,874,171,886,
                165.3C898.5,160,911,192,923,192C935.4,192,948,160,960,176C972.3,192,985,256,997,261.3C1009.2,267,1022,213,1034,197.3C1046.2,
                181,1058,203,1071,181.3C1083.1,160,1095,96,1108,58.7C1120,21,1132,11,1145,53.3C1156.9,96,1169,192,1182,213.3C1193.8,235,1206,181,
                1218,170.7C1230.8,160,1243,192,1255,218.7C1267.7,245,1280,267,1292,272C1304.6,277,1317,267,1329,250.7C1341.5,235,1354,213,1366,186.7C1378.5,
                160,1391,128,1403,101.3C1415.4,75,1428,53,1434,42.7L1440,32L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,
                320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,
                1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,
                320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,
                640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,
                382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,
                320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
              )
              break;
            case 'square':
              return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#744BFD" fill-opacity="1"
                 d="M0,96L0,128L288,128L288,224L576,224L576,96L864,96L864,160L1152,160L1152,0L1440,0L1440,320L1152,
                 320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path></svg>
              )
              break;
              case 'pointy':
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#744BFD" fill-opacity="1"
                   d="M0,96L205.7,192L411.4,32L617.1,256L822.9,160L1028.6,64L1234.3,160L1440,64L1440,320L1234.3,320L1028.6,
                   320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"></path></svg>
                )
                break;
            default: return ""
        }
      }
    

    return (
        <>
        <div>
        <Navbar/>
  
        {upperPattern(pattern)}
      
         <HeroContainer>
          <HeroContent>
       
          <img className="hoso-icon" src={hoso_icon} alt="hoso-icon" /> 
         
          <TopLine>{topLine}</TopLine>
          <Heading>{heading}</Heading>
          <Text_content>{description}</Text_content>

          <Button_Wrapper>
          {androidBtn?
          <LinkBtn  icon={<AiIcons.AiFillAndroid size='40px'/>}
          src="https://github.com/homesome-se2/android"
           top='Download App'
           bottom='From Github'/> 
           : 
           ""
           }
           <Divider/>
          {websiteBtn? 
          <LinkBtn  icon={<FaIcons.FaReact size='40px'/>} 
          src="https://github.com/homesome-se2/public-web-server"
          top='Visit The Hoso'
          bottom='Web Client' />
          :
          ""
          }
          </Button_Wrapper>

          </HeroContent>
         
        </HeroContainer>
    
        {lowerPattern(pattern)}
          </div>
        </>
    )
}

export default HeroSection
