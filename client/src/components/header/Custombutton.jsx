import {useState , useContext} from 'react';

import {Box, Button, Typography, styled} from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';

import LoginDialog from '../login/loginDialog';
import Profile from './Profile';

import { DataContext } from '../../context/DataProvider';

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button, &>p, &>div{
    margin-right: 40px;
    font-size : 16px;
  }
  align-items: center;
`;

const Container = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: white;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const Custombutton = () =>{
  const [open, setOpen]=useState(false);

  const {account, setAccount} = useContext(DataContext);

  const openDialog =()=>{
    setOpen(true);
}

    return (
      <Wrapper>
        {account ? (<Profile account={account} setAccount={setAccount}/>) : 
        (<LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>)
        }
        <Typography style={{ marginTop: 3, width: 135 }}>
          Become a seller
        </Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>
        <Container to="/cart">
          <ShoppingCartIcon />
          <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen} />
      </Wrapper>
    );
}

export default Custombutton;