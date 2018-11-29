import React , {Component} from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fastfood from '@material-ui/icons/Fastfood';
import PersonPin from '@material-ui/icons/PersonPin';
import LocalShipping from '@material-ui/icons/LocalShipping';
import LocalAtm from '@material-ui/icons/LocalAtm';
import LocalAirport from '@material-ui/icons/LocalAirport';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Home from '@material-ui/icons/Home';
import StoreMallDirectory from '@material-ui/icons/StoreMallDirectory';

import {Box} from 'gestalt';

import '../styles/App.css';
import '../styles/gestalt.css';

export default class ListItemComposition extends Component {
  render() {
  return (
  <div>
    <Paper>
    <div dir="rtl" >

      <MenuList>
      <MenuItem>
        <ListItemIcon>
          <Home/>
        </ListItemIcon>
        <ListItemText><div class="font0">صفحه اصلی</div></ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <StoreMallDirectory/>
        </ListItemIcon>
        <ListItemText><div class="font0">معرفی ما</div></ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Fastfood/>
        </ListItemIcon>
        <ListItemText><div class="font0">رستوران و فست فود</div></ListItemText>
      </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonPin/>
          </ListItemIcon>
          <ListItemText><div class="font0">آرایشگاه زنانه</div></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalShipping/>
          </ListItemIcon>
          <ListItemText><div class="font0">حمل بار</div></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalAtm/>
          </ListItemIcon>
          <ListItemText><div class="font0">بانک و امور مالی</div></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalAirport/>
          </ListItemIcon>
          <ListItemText><div class="font0">آژانس هواپیمایی</div></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LocalOffer/>
          </ListItemIcon>
          <ListItemText><div class="font0">سایر نیازمندی ها</div></ListItemText>
        </MenuItem>
      </MenuList>
        </div>
      </Paper>
      <Box color="darkGray" height={37}>
          sdsd
      </Box>
    </div>

  );
 }
}
