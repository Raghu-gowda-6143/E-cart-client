import { Router, Switch, Route } from 'react-router-dom';
import TemplateProvider from './templates/TemplateProvider';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
import Mobile from './components/Pages/Mobile';
import Electronics from './components/Pages/Electronics';
import Fashion from './components/Pages/Fashion';
import Appliances from './components/Pages/Appliances';
import history from './history';

import useStyles from './style';


const App = () => {

  const classes = useStyles();

  return (
    <TemplateProvider>
      <Router history={history}>
        <div className={classes.root}>
          <Header />
          <section className={classes.section}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:id" component={Product} />
              <Route exact path="/mobiles" component={Mobile} />
              <Route exact path="/electronics" component={Electronics} />
              <Route exact path="/fashion" component={Fashion} />
              <Route exact path="/appliances" component={Appliances} />
            </Switch>
          </section>
        </div>
      </Router>
    </TemplateProvider>
  );
}

export default App;
