import { AppBar, Toolbar, Typography } from '@mui/material';
import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <AppBar position="static" sx={{backgroundColor:"black" ,boxShadow:"2px 2px 20px skyblue"}}>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NotesApp
          </Typography>
          
        </Toolbar>
      </AppBar>
  );
};

export default Header;
