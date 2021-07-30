import { Grid, Container , Typography  } from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";
import Banner from "../Banner";
import "./style.css";
import Services from "../Services";
const Products = ({ products, addProduct }) => {
  if (!products.length) return <Spinner />;

  return (
    <div>
      <Banner />
      <Services/>
      
      <p className="title">        Some Of The items in Our Store
      </p>    
      <Container id="products">
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <div className="divmany" >   
           <Typography className="title" variant="h6">
              And Many More...
              <a className="ll" href="store">Go To The Store Page</a>
            </Typography>
            <br></br>
     </div>

    </div>
  );
};

export default Products;
