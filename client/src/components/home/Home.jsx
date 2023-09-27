import NavBar from './NavBar';
import Banner from "./Banner";
import Slide from './Slide';
import MidSection from './MidSection';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

import { Fragment , styled, Box} from '@mui/material';

const Component= styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`;

const Home = () => {

  const { products } = useSelector((state) => state.getProducts);

  console.log(products);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])


    return (
      <>
        <NavBar />
        <Component>
          <Banner />
          <Slide products={products} title="Deal of the Day" timer={true} />
          <MidSection/>
          <Slide products={products} title="Discount for You" timer={false} />
          <Slide products={products} title="Suggested Items" timer={false} />
          <Slide products={products} title="Top Selection" timer={false} />
          <Slide products={products} title="Treanding Offers" timer={false} />
          <Slide products={products} title="Season's Top pics" timer={false} />
          <Slide
            products={products}
            title="Top Deal on Accessories"
            timer={false}
          />
        </Component>
      </>
    );
}

export default Home;