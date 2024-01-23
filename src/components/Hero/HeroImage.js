import React from 'react';
import styled from 'styled-components/macro';

const HeroImage = () => {
  return (
    <picture>
      <source srcSet="
        /images/hero-img.avif 1x,
        /images/hero-img@2x.avif 2x,
        /images/hero-img@3x avif 3x
      " />
      <source srcSet="
        /images/hero-img.jpg 1x,
        /images/hero-img@2x.jpg 2x,
        /images/hero-img@3x.jpg 3x
      "/>
      <Image src="/images/hero-img.jpg" alt="" />
    </picture>
  );
};

const Image = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

export default HeroImage;
