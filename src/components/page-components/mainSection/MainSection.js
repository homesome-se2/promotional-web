import React from 'react'
import {Container, CodeSection,Groups, About , textWrapper , Title, Title2} from './MainSectionElement';
import './MainSection.css'

function MainSection() {

    function codeBox(){
        var a = document.getElementById('groupSection'); 
        var b = document.getElementById('aboutSection'); 
        var c = document.getElementById('aboutSection');  
        a.classList.add('white');
        a.classList.add('groupTextWrapper');
        b.classList.add('white'); 
        b.classList.add('aboutTextWrapper');
      
    }

    function resetCodeBox(){
        var a = document.getElementById("groupSection"); 
        var b = document.getElementById("aboutSection"); 
        a.classList.remove('white');
        a.classList.remove('groupTextWrapper');
        b.classList.remove('white'); 
        b.classList.remove('aboutTextWrapper');
    }

    function groupsBox(){
        var a = document.getElementById('codeSection'); 
        var b = document.getElementById('aboutSection'); 
        a.classList.add('white');  
        a.classList.add('groupTextWrapper')
        b.classList.add('white'); 
        b.classList.add('aboutTextWrapper')
    }

    function resetGroupsBox(){
        var a = document.getElementById('codeSection'); 
        var b = document.getElementById('aboutSection'); 
        a.classList.remove('white');  
        a.classList.remove('groupTextWrapper')
        b.classList.remove('white'); 
        b.classList.remove('aboutTextWrapper')
    }

    function aboutBox(){
        var a = document.getElementById('codeSection'); 
        var b = document.getElementById('groupSection'); 
        a.classList.add('white');  
        a.classList.add('codeTextWrapper')
        b.classList.add('white');  
        b.classList.add('groupTextWrapper')
    }

    function resetAboutBox(){
        var a = document.getElementById('codeSection'); 
        var b = document.getElementById('groupSection'); 
        a.classList.remove('white');  
        a.classList.remove('codeTextWrapper')
        b.classList.remove('white'); 
        b.classList.remove('groupTextWrapper')
    }

    return (
        <>
            <Container id="container">

            <CodeSection id="codeSection" onMouseEnter={() => codeBox()} onMouseLeave={() => resetCodeBox()}>
            <textWrapper className="codeTextWrapper">  
            <Title>Code</Title>
            <Title2><a target="_blank" rel="noopener noreferrer" href="https://github.com/homesome-se2">Visit the github page</a></Title2>
            </textWrapper>  
            </CodeSection>


            <Groups id="groupSection" onMouseEnter={() => groupsBox()} onMouseLeave={() => resetGroupsBox()}>
            <textWrapper className="groupTextWrapper">
            <Title>Groups</Title>
            <Title2><a rel="noopener noreferrer"  href="/Home">Visit the group pages</a></Title2>
            </textWrapper> 
            </Groups>
          

            <About id="aboutSection" onMouseEnter={() => aboutBox()} onMouseLeave={() => resetAboutBox()}>      
            <textWrapper className="aboutTextWrapper">  
            <Title>About</Title>
            <Title2><a rel="noopener noreferrer" href="/About" >Visit the about page</a></Title2>
            </textWrapper>  
            </About>
            
            </Container>
        </>
    )
}

export default MainSection;
