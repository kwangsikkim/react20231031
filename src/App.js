import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      공통된 요소들
      <Outlet /> // 하위컴포넌트의 내용을 상위컴포넌트 공통요소에 더불어 나타나게 함
    </Box>
  );
}

function AComp() {
  return <Box>에이 컴포넌트</Box>;
}

function BComp() {
  return <Box>비 컴포넌트</Box>;
}

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeComponent />}>
      <Route path="apath" element={<AComp />} />
      <Route path="bpath" element={<BComp />} />
    </Route>,
  ),
);

function App(props) {
  return <RouterProvider router={routes} />;
}

export default App;
