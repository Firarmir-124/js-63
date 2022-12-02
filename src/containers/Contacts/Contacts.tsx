import React from 'react';
import {Avatar, Box, Link, List, ListItem, ListItemAvatar} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';

const Contacts = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', mt: 10}} component='div'>
      <Box className='card' component='div'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2924.2541493991057!2d74.57113486322937!3d42.867479599999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7b45568f2b5%3A0xe8d2539efb2a15f1!2sConcord%20Hotel!5e0!3m2!1sru!2skg!4v1669903495444!5m2!1sru!2skg"
          width="600" height="450" style={{border: 0}} loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Box>

      <Box className='listLink' component='div'>
        <List sx={{bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <InstagramIcon />
              </Avatar>
            </ListItemAvatar>
            <Link underline="none" href="#">@nameCompany</Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WhatsAppIcon />
              </Avatar>
            </ListItemAvatar>
            <Link underline="none" href="#">0(555)-234-555</Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <Link underline="none" href="#">189 Chuikov St, Бишкек 720010</Link>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TelegramIcon />
              </Avatar>
            </ListItemAvatar>
            <Link underline="none" href="#">@nameCompany</Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Contacts;