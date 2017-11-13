import React from 'react';
import Landing from './components/Landing/Landing.js';
import ShelfA from './components/Shelves/ShelfA.js';
import ShelfB from './components/Shelves/ShelfB.js';
import ShelfC from './components/Shelves/ShelfC.js';
import ShelfD from './components/Shelves/ShelfD.js';
import BinA1 from './components/Bins/BinA1.js';
import BinA2 from './components/Bins/BinA2.js';
import BinA3 from './components/Bins/BinA3.js';
import BinA4 from './components/Bins/BinA4.js';
import BinA5 from './components/Bins/BinA5.js';
import BinB1 from './components/Bins/BinB1.js';
import BinB2 from './components/Bins/BinB2.js';
import BinB3 from './components/Bins/BinB3.js';
import BinB4 from './components/Bins/BinB4.js';
import BinB5 from './components/Bins/BinB5.js';
import BinC1 from './components/Bins/BinC1.js';
import BinC2 from './components/Bins/BinC2.js';
import BinC3 from './components/Bins/BinC3.js';
import BinC4 from './components/Bins/BinC4.js';
import BinC5 from './components/Bins/BinC5.js';
import BinD1 from './components/Bins/BinD1.js';
import BinD2 from './components/Bins/BinD2.js';
import BinD3 from './components/Bins/BinD3.js';
import BinD4 from './components/Bins/BinD4.js';
import BinD5 from './components/Bins/BinD5.js';
import NewInventory from './components/NewInventory/NewInventory.js'


import { HashRouter as Router, Route } from 'react-router-dom';

export default(

           <Router>
               <div>
                   <Route component={Landing} exact path='/'/>
                   <Route component={ShelfA} path='/shelves/shelfA' />
                   <Route component={ShelfB} path='/shelves/shelfB' />
                   <Route component={ShelfC} path='/shelves/shelfC' />
                   <Route component={ShelfD} path='/shelves/shelfD' />
                   <Route component={BinA1} path='/bins/binA1' />
                   <Route component={BinA2} path='/bins/binA2' />
                   <Route component={BinA3} path='/bins/binA3' />
                   <Route component={BinA4} path='/bins/binA4' />
                   <Route component={BinA5} path='/bins/binA5' />
                   <Route component={BinB1} path='/bins/binB1' />
                   <Route component={BinB2} path='/bins/binB2' />
                   <Route component={BinB3} path='/bins/binB3' />
                   <Route component={BinB4} path='/bins/binB4' />
                   <Route component={BinB5} path='/bins/binB5' />
                   <Route component={BinC1} path='/bins/binC1' />
                   <Route component={BinC2} path='/bins/binC2' />
                   <Route component={BinC3} path='/bins/binC3' />
                   <Route component={BinC4} path='/bins/binC4' />
                   <Route component={BinC5} path='/bins/binC5' />
                   <Route component={BinD1} path='/bins/binD1' />
                   <Route component={BinD2} path='/bins/binD2' />
                   <Route component={BinD3} path='/bins/binD3' />
                   <Route component={BinD4} path='/bins/binD4' />
                   <Route component={BinD5} path='/bins/binD5' />
                   <Route component={NewInventory} path='/create/newinventory' />
               </div>
           </Router>
)