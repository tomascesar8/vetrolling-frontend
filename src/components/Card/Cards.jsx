import React from 'react';
import { Card, Image } from 'react-bootstrap';

export const CardImage = ({ children, title, urlImage, typeImg, clasesCardServices, imgServices, clasesCardPlans, imgPlans }) => {
  const cardClass = clasesCardServices || clasesCardPlans || '';
  const imgClass = imgServices || imgPlans || '';
  const isSvg = typeImg === 'svg';
  return (
    <Card className={cardClass}>
      {urlImage && (
        isSvg ? (
          <Image
            variant="top"
            src={urlImage}
            alt={title}
            width={60}
            height={60}
            className={`${imgClass} ${isSvg ? 'card-svg-img' : ''}`}
          />
        ) : (
          <Image
            variant="top"
            src={urlImage}
            roundedCircle
            alt={title}
            width={120}
            height={120}
            className={imgClass}
          />
        )
      )}
      <Card.Body className='text-center d-flex flex-column align-items-center justify-content-center'>
        <Card.Title><h3>{title}</h3></Card.Title>
        <div className={isSvg ? 'card-svg-text' : ''}>
          {children}
        </div>
      </Card.Body>
    </Card>
  );
};

