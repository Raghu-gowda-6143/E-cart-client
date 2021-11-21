import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, List, ListItem, IconButton } from '@material-ui/core';
import { getProducts } from '../../redux/actions/publicAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import useStyle from './style';


const Search = ({ getProducts, products }) => {
  const classes = useStyle();
  const [text, setText] = useState();
  const [open, setOpen] = useState(true)

  const getText = (text) => {
    setText(text);
    setOpen(false)
  }


  useEffect(() => {
    getProducts()
  }, [getProducts])



  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => getText(e.target.value)}
      />
      <IconButton className={classes.searchIcon}>
        <SearchIcon style={{ color: '#0bb3b0'}} />
      </IconButton>
      {
        text &&
        < List className={classes.list__2} hidden={open}>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
              <ListItem key={product._id}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </List >
      }
    </div >
  )
}

const mapStateToProps = state => {
  return { products: state.products.products }
}
export default connect(mapStateToProps, { getProducts })(Search);