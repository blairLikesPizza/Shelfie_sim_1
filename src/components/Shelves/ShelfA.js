import React, { Component } from 'react';
import './Shelf.css';
import HeaderShelfA from '../Header/HeaderShelfA.js';
// 42E
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShelfA extends Component {
// 36I
    constructor(props){
        super(props);

        this.state = {
            id: [],
            Bin1: null,
            Bin2: null,
            Bin3: null,
            Bin4: null,
            Bin5: null
            
        }
        // 37C
        this.getBins = this.getBins.bind(this)
        this.getBin1 = this.getBin1.bind(this);
        this.getBin2 = this.getBin2.bind(this);
        this.getBin3 = this.getBin3.bind(this);
        this.getBin4 = this.getBin4.bind(this);
        this.getBin5 = this.getBin5.bind(this);
    }

    componentDidMount(){
        this.getBins()
        this.getBin1()
        this.getBin2()
        this.getBin3()
        this.getBin4()
        this.getBin5()
    }

    getBins(){
       axios.get('/api/bins/Shelf A')
            .then((response) => {
                console.log(response)
               response.data.map((element) => {
                   console.log(element.binname)
                   this.setState({
                       [element.binname]: element
                   })
               })
                console.log(this.state)
            })
    }

    getBin1(){
        if (this.state.Bin1){
          return <Link to='/bins/A1'><p className="bin">Bin 1</p></Link>
        } else if (!this.state.Bin1){
          return <Link to='/addinventoryA/A1' ><p className="add-inventory-button">+ Add inventory to bin</p></Link>
        }
    }
    getBin2(){
        if (this.state.Bin2){
          return <Link to='/bins/A2'><p className="bin">Bin 2</p></Link>
        } else if (!this.state.Bin2){
          return <Link to='/addinventoryA/A2'><p className="add-inventory-button">+ Add inventory to bin</p></Link>
        }
    }
    getBin3(){
        if (this.state.Bin3){
          return <Link to='/bins/A3'><p className="bin">Bin 3</p></Link>
        } else if (!this.state.Bin3){
          return <Link to='/addinventoryA/A3'><p className="add-inventory-button">+ Add inventory to bin</p></Link>
        }
    }
    getBin4(){   
        if (this.state.Bin4){
          return <Link to='/bins/A4'><p className="bin">Bin 4</p></Link>
        } else if (!this.state.Bin4){
          return <Link to='/addinventoryA/A4'><p className="add-inventory-button">+ Add inventory to bin</p></Link>
        }
    }
    getBin5(){
        if (this.state.Bin5){
          return <Link to='/bins/A5'><p className="bin">Bin 5</p></Link>
        } else if (!this.state.Bin5){
          return <Link to='/addinventoryA/A5'><p className="add-inventory-button">+ Add inventory to bin</p></Link>
        }
    }

    render() {
        return (
            // 36H
            <div> 
                <HeaderShelfA />
                    
                        <div className="bin_link_container">
                            
                            {this.getBin1()}
                            {this.getBin2()}
                            {this.getBin3()}
                            {this.getBin4()}
                            {this.getBin5()}

                        </div>
                    
                
            </div>
        )
    }
}

export default ShelfA;