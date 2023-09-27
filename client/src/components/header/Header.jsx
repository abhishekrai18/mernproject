import {AppBar , Toolbar,InputBase,Box ,Typography, styled} from '@mui/material';
import Search from './Search';
import Custombutton from './Custombutton';
import {Link} from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
    display: flex;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height:0;
    text-textDecoration: none;
    color: inherit;
`;

const SubHeading = styled(Typography)`
    font-size:10px;
    font-style: italic;
`;

const CustomButtonWrapper = styled(Box)`
  margin: 0 0 0 auto;
`;

const Header = () =>{

    const logoURL = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
      <StyledHeader>
        <Toolbar style={{minHeight: 55}}>
          <Component to='/'>
            <img src={logoURL} alt="logo" style={{ width: 75 }} />
            <Box>
              <SubHeading>
                Explore&nbsp;
                <Box component="span" style={{ color: "#FFE500" }}>
                  Plus
                  <img
                    src={subURL}
                    alt="sub-logo"
                    style={{ width: 10, height: 10, marginLeft: 4 }}
                  />
                </Box>
              </SubHeading>
            </Box>
          </Component>
          <Search/>
          <CustomButtonWrapper>
            <Custombutton/>
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    );
}

export default Header;