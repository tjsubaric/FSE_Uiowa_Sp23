import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FaceIcon from '@mui/icons-material/Face';
import ScienceIcon from '@mui/icons-material/Science';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import MedicationIcon from '@mui/icons-material/Medication';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';


export default function PatientMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CalendarTodayIcon/>
          </ListItemIcon>
          <Link to="/appointments">Appointments</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MessageIcon/>
          </ListItemIcon>
          <Link to="/messages">Messages</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ScienceIcon/>
          </ListItemIcon>
          <Link to="/labresults">Lab Results</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FilePresentIcon/>
          </ListItemIcon>
          <Link to="/medrecords">Medical Records</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MedicationIcon/>
          </ListItemIcon>
          <Link to="/prescriptions">Prescriptions</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <AttachMoneyIcon/>
          </ListItemIcon>
          <Link to="/billing">Billing</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FaceIcon/>
          </ListItemIcon>
          <Link to="/findadoc">Find a Doctor</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AccessTimeIcon/>
          </ListItemIcon>
          <ListItemText>History</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon/>
          </ListItemIcon>
          <Link to="/settings">Settings</Link>
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