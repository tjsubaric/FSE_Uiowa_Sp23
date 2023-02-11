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
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArticleIcon from '@mui/icons-material/Article';
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
        <MenuItem>
          <ListItemIcon>
            <FaceIcon/>
          </ListItemIcon>
          <Link to="/findadoc">Find_a_Doc</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <ScienceIcon/>
          </ListItemIcon>
          <ListItemText>Lab Results</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FilePresentIcon/>
          </ListItemIcon>
          <ListItemText>Medical Records</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MedicationIcon/>
          </ListItemIcon>
          <ListItemText>Prescriptions</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <HealthAndSafetyIcon/>
          </ListItemIcon>
          <ListItemText>Care Plans</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <AttachMoneyIcon/>
          </ListItemIcon>
          <ListItemText>Billing</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AccessTimeIcon/>
          </ListItemIcon>
          <ListItemText>History</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ArticleIcon/>
          </ListItemIcon>
          <ListItemText>Reports</ListItemText>
        </MenuItem>
        <Divider />
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