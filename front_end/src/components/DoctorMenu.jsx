import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TransformText from "./TransformText";
import { Link } from 'react-router-dom';

export default function DoctorMenu() {
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
          <Link to="/myschedule">My Schedule</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon/>
          </ListItemIcon>
          <Link to="/mypatients">My Patients</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MessageIcon/>
          </ListItemIcon>
          <Link to="/chats">Chats</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PowerSettingsNewIcon/>
          </ListItemIcon>
          <Link to="/logout">Logout</Link>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}