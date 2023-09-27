import {
  AppBar,
  Toolbar,
  InputBase,
  Box,
  Typography,
  styled,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const Searchcontainer = styled(Box)`
  background: white;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
  font-size: unset;
`;

const SearchIconbox = styled(Box)`
  display: flex;
  color: blue;
  padding: 5px;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;

const Search = () => {
  return (
    <Searchcontainer>
      <InputSearchBase placeholder="Search for products, brands and more" />
      <SearchIconbox>
        <SearchIcon />
      </SearchIconbox>
    </Searchcontainer>
  );
};

export default Search;
