import type { LinksFunction } from "@remix-run/node";
import {
  NavLink,
  Links,
  Link,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStyleHref from 'semantic-ui-css/semantic.min.css';

import {
  SidebarPushable,
  ButtonGroup,
  MenuItem,
  GridRow,
  GridColumn,
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
} from 'semantic-ui-react';

export const links: LinksFunction = () => [
  ...(appStyleHref ? [{ rel: "stylesheet", href: appStyleHref }] : []),
];

const VerticalSidebar = () => (
  <Sidebar       
    as={Menu} 
    icon='labeled'
    direction='left'
    inverted
    vertical
    visible={true}
    width='thin'
  >
  <Header as='h2' color='grey'>人群密度监测系统</Header>
    <NavLink to={'imageinput/'}>
      <MenuItem as='a'>
        <Icon name='image' />
          <Link to={'imageinput/'}>
            图片输入
          </Link>
      </MenuItem>
    </NavLink>
    <NavLink to={'videoinput'}>
      <MenuItem as='a'>
        <Icon name='video' />
          <Link to={'videoinput/'}>
            视频输入
          </Link>
      </MenuItem>
    </NavLink>
    <NavLink to={'setting/'}>
      <MenuItem as='a'>
        <Icon name='setting' />
          <Link to={'setting/'}>
            设置
          </Link>
      </MenuItem>
    </NavLink>
  </Sidebar>
);

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SidebarPushable>
          <VerticalSidebar/>
            <Container textAlign="left">
              <Outlet />
            </Container>
        </SidebarPushable>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
