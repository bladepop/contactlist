import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import Citizen from './citizen.svg';
import Professional from './professional.svg';

export const DriverTypeIcon = styled.img`
  margin-top: -30px;
  margin-left: 16px;
  margin-bottom: 0;
`;

export const DriverType = ({ driverType, ...props }) => {
  let src;
  switch (driverType) {
    case 'Professional': src = Professional; break;
    case 'Citizen':
    default: src = Citizen; break;
  }
  return <DriverTypeIcon src={src} {...props} />;
};

DriverType.propTypes = { driverType: PropTypes.string.isRequired };


export const ProfileImage = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: ${(props) => props.size}px;
  height:${(props) => props.size}px;
  margin: 0 auto 0px;
  transition: 0.15s all linear;
`;


export const CardText = styled.div`
  color: ${(props) => props.theme.mainText};
  font-size: 0.7em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContactName = CardText.extend`
  font-size: 0.9em;
  font-weight: bold;
`;

export const CardHiddenText = CardText.extend`
  visibility: hidden;
  opacity: 0;
  transition: all 0.1s linear;
`;

export const CardWrapper = styled.div`
  height: 240px;
  width: 174px;
  background: white;
  border-radius: 10px;
  padding: 14px 10px;

  &:hover {
    box-shadow: 0px 0px 10px #c0c0c0;
  }

  &:hover ${ProfileImage} {
    height: 112px;
  }

  &:hover ${CardHiddenText} {
    visibility: visible;
    opacity: 1;
  }
`;
