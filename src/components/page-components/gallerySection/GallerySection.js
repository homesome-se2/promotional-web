import React from 'react'
import './GallerySection.css'
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { PreviewContainer , Gallerys, Inner }  from './GallerySectionElement';
import Gallery from "react-photo-gallery";

function GallerySection({
    items, pattern
}) {

    const options = {
        settings: {
          slideAnimationType: 'fade',
          autoplaySpeed: 3500,
          transitionSpeed: 900,
        },
        buttons: {
          backgroundColor: "#744BFD",
        },
        caption: {
          captionColor: "#ffff",
          captionFontFamily: "Raleway, sans-serif",
          captionFontWeight: "700",
          captionTextTransform: "uppercase",
        }
      };

    return (
        <>
        <SimpleReactLightbox> 
        <PreviewContainer>
         
        <div className={`${pattern}`}>
        <Inner>
        <SRLWrapper options={options}>
   
        <div className="galleryContainer">
        <h6 id="galleryTitle" >Click image to see gallery</h6>
        <Gallery  photos={items} direction={"row"}/>
        </div>

        </SRLWrapper>
        </Inner>  
        </div>  
        </PreviewContainer>
        </SimpleReactLightbox> 
        </>
    )
}

export default GallerySection
