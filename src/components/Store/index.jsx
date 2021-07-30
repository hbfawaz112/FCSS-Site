import { Grid, Container   } from "@material-ui/core";
import Product from "../Product";
import Spinner from "../Spinner";

import "./style.css";

const Store = ({ store, addProduct }) => {
  if (!store.length) return <Spinner />;

  return (
    <div class="store">
      
      <a href="/" className="ll">Go Back</a>
      <p className="title">    The items in Our Store
      
      </p>    
      <Container id="products">
        <Grid container spacing={4}>
          {store.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    

    </div>
  );
};

export default Store;
