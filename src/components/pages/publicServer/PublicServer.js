import React from 'react'
import HeroSection from '../../page-components/heroSection/HeroSection';
import FeatureSection from '../../page-components/featureSection/FeatureSection';
import GallerySection from '../../page-components/gallerySection/GallerySection';
import {HeroInfo, InfoSectionInfo, PreviewImg} from './Data';

function PublicServer() {
    return (
        <>
        <HeroSection  {...HeroInfo}         />
        <FeatureSection {...InfoSectionInfo} />
        <GallerySection {...PreviewImg}      />
        </>
    )
}

export default PublicServer
