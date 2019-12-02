import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import MediaQuery from 'react-responsive';

const breakpoints = {
  desktop: '(min-width: 1025px)',
  tablet: '(min-width: 768px) and (max-width: 1024px)',
  mobile: '(max-width: 767px)'
};


const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <MediaQuery query={breakpoints.desktop}>
        <NavBar style={barAnimation}>
          <FlexContainer>
            <NavLinks style={linkAnimation}>
              <a href="/">Home</a>
              <a href="/SkiArea">SkiArea</a>
              <a href="/gears">Others</a>
            </NavLinks>
          </FlexContainer>
        </NavBar>
      </MediaQuery>

      <MediaQuery query={breakpoints.tablet}>
        <NavBarTablet style={barAnimation}>
          <FlexContainerTablet>
            <NavLinksTablet style={linkAnimation}>
              <a href="/">Home</a>
              <a href="/SkiArea">SkiArea</a>
              <a href="/gears">Others</a>
            </NavLinksTablet>
          </FlexContainerTablet>
        </NavBarTablet>
      </MediaQuery>

      <MediaQuery query={breakpoints.mobile}>
        <NavBarMobile style={barAnimation}>
          <FlexContainerMobile>
            <NavLinksMobile style={linkAnimation}>
              <a href="/">Home</a>
              <a href="/SkiArea">SkiArea</a>
              <a href="/gears">Others</a>
            </NavLinksMobile>
          </FlexContainerMobile>
        </NavBarMobile>
      </MediaQuery>

   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #3B6690;
  z-index: 1;
  font-size: 1.4rem;
  text-align: center;

`;

const NavBarMobile = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #3B6690;
  z-index: 1;
  font-size: 1.4rem;
`;

const NavBarTablet = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #3B6690;
  z-index: 1;
  font-size: 1.4rem;
  text-align: center;
`;

const FlexContainerMobile = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  height: 3rem;
`;

const FlexContainerTablet = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  height: 3rem;
  padding: 0 2rem;;
  text-align: center;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
  text-align: center;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 10.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #BDDEFE;
      border-bottom: 1px solid #BDDEFE;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const NavLinksTablet = styled(animated.ul)`
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 300;
    border-bottom: 1px solid transparent;
    margin: auto 2.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #BDDEFE;
      border-bottom: 1px solid #BDDEFE;
    }
  }
`;


const NavLinksMobile = styled(animated.ul)`
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    margin: 0 0.3rem;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;