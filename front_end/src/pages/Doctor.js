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

export default function Patient() {
  return (
    <Paper sx={{ width: 320 }}>
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