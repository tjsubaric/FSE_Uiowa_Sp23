import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIcon from '@mui/icons-material/Phone';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TransformText from "../components/TransformText";

export default function Doctor() {
  return (
    <Paper sx={{ width: 320 }}>
      <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}>
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 112, height: 112 }}
      />
    </Stack>
    <h1>Dr. Name</h1>
      <TransformText text="Type of specialist" />
    </div>
      <MenuList dense>
        <MenuItem>
          <ListItemIcon>
            <CalendarMonthIcon/>
          </ListItemIcon>
          <ListItemText>Appointments</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText>My Patients</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MessageIcon/>
          </ListItemIcon>
          <ListItemText>Chats</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PhoneIcon/>
          </ListItemIcon>
          <ListItemText>Call</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PowerSettingsNewIcon/>
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

/*
<Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 112, height: 112 }}
      />
    </Stack>
    <h1>Dr. Name</h1>
      <TransformText text="Type of specialist" />
    </div>
    */