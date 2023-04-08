import React from 'react';

import { Box, Collapse, Divider, useTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoodIcon from '@mui/icons-material/Mood';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';

const pages = [
  {
    name: 'Dashboard',
    Icon: SpeedIcon,
    path: '/dashboard',
  },
  {
    name: 'Components',
    Icon: SettingsIcon,
    path: '/components',
    isParent: true,
    childs: [
      {
        name: 'Cards',
        Icon: SpeedIcon,
        path: '/components/cards',
      },
      {
        name: 'Buttons',
        Icon: SpeedIcon,
        path: '/components/buttons',
      }
    ]
  },
  {
    name: 'Pages',
    Icon: FolderIcon,
    path: '/pages',
  },
  {
    name: 'Charts',
    Icon: BarChartIcon,
    path: '/charts',
  },
]

const CustomListItem = ({
  name, Icon, path, highLight = false,
  isParent = false, childs = [],
  handleClick
}) => {
  return (
    <Link
      to={path}
      style={{
        textDecoration: 'none'
      }}
    >
      <ListItemButton
        sx={{
          color: '#fff',
          paddingLeft: 0,
          paddingRight: 0
        }}
        onClick={() => {
          handleClick(name);
        }}
      >
        <ListItemIcon>
          <Icon
            sx={{
              color: '#fff',
              fontSize: highLight ? '44px' : '22px'
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={name}
          primaryTypographyProps={{
            color: '#fff',
            fontSize: '22px',
            fontWeight: highLight ? 'bold' : '400'
          }}
        />
      </ListItemButton>
      {isParent && <Collapse
        in={true}
        timeout="auto"
        unmountOnExit
        sx={{
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
        <List
          component="div"
          disablePadding
          sx={{
            color: 'black'
          }}
        >
          {childs.map((page) => (
            <>
              <ListItemButton
                sx={{
                  paddingLeft: '16px',
                  paddingRight: 0
                }}
              >
                <ListItemIcon>
                  <page.Icon
                    sx={{
                      fontSize: highLight ? '44px' : '22px'
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={page.name}
                  primaryTypographyProps={{
                    fontSize: '22px',
                    fontWeight: highLight ? 'bold' : '400'
                  }}
                />
              </ListItemButton>
            </>
          ))}
        </List>
      </Collapse>}
      <Divider
        sx={{
          backgroundColor: '#f2f2f2',
          margin: '8px'
        }}
      />
    </Link>
  )
}

const Sidebar = () => {
  const theme = useTheme();

  const [openedPage, setOpenedPage] = React.useState('');

  const handleClick = (name) => {
    setOpenedPage(name);
  };

  console.log(openedPage)
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: 'inline-block',
        width: '224px',
        minHeight: '100vh'
      }}
    >
      <Box
        sx={{
          padding: '16px',
        }}
      >
        <List
          sx={{ width: '100%', maxWidth: 360 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <CustomListItem name="SB ADMIN" Icon={MoodIcon} path={'/'} highLight={true} />
          {pages.map((page) => {
            return (
              <CustomListItem
                name={page.name}
                Icon={page.Icon}
                path={page.path}
                isParent={page.isParent}
                key={page.name}
                childs={page.childs}
                handleClick={handleClick}
                highLight={page.name === openedPage}
              />
            )
          })}
        </List>
      </Box>
    </Box>
  )
};

export default Sidebar;