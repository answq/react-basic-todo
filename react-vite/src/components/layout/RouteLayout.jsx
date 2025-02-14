import { Outlet } from "react-router";
import styled from "styled-components";


const RouteLayout = () => {
  return (<MainContainer>
    <MainContent>
      <Outlet />
    </MainContent>
  </MainContainer>);
};

export default RouteLayout;
