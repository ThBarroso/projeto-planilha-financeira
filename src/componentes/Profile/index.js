import React from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import styled from 'styled-components';


const ProfileContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  list-style: none;
`;

const ProfileLink = styled.a`
  height: auto;
  gap: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #114934;
  font-size: 20px;

  &:hover {
    color: #00b894;
  }

  span {
    font-size: 14px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;



function Profile() {
return(
        <ProfileContainer>
                <li><ProfileLink href="/"><MdOutlineAccountCircle /><span>Perfil</span></ProfileLink></li>
        </ProfileContainer>
);

}

export default Profile;