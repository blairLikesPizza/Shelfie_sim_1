import React from 'react';
import Landing from './components/Landing/Landing.js';
import ShelfA from './components/Shelves/ShelfA.js';
import ShelfB from './components/Shelves/ShelfB.js';
import ShelfC from './components/Shelves/ShelfC.js';
import ShelfD from './components/Shelves/ShelfD.js';
import Bin from './components/Bins/Bin.js';
import NewInventoryShelfA from './components/NewInventory/NewInventoryShelfA.js';
import NewInventoryShelfB from './components/NewInventory/NewInventoryShelfB.js';
import NewInventoryShelfC from './components/NewInventory/NewInventoryShelfC.js';
import NewInventoryShelfD from './components/NewInventory/NewInventoryShelfD.js';


import { Switch, Route } from 'react-router-dom';

export default(
// 42G
           <Switch>
               <div>
                   {/* 42F, 42H */}
                   <Route component={Landing} exact path='/'/>
                   <Route component={ShelfA} path='/shelfA' />
                   <Route component={ShelfB} path='/shelfB' />
                   <Route component={ShelfC} path='/shelfC' />
                   <Route component={ShelfD} path='/shelfD' />
                   <Route component={Bin} path='/bins/:id' />
                   <Route component={NewInventoryShelfA} path='/addinventoryA/:id' />
                   <Route component={NewInventoryShelfB} path='/addinventoryB/:id' />
                   <Route component={NewInventoryShelfC} path='/addinventoryC/:id' />
                   <Route component={NewInventoryShelfD} path='/addinventoryD/:id' />
               </div>
           </Switch>
)