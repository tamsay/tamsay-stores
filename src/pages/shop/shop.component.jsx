import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA,
        }
    }

    render(){
        return(
            <div className = 'shop-page'>
            {this.state.collections.map(({id, ...otherCollectionProps}) =>{
               return(<CollectionPreview {...otherCollectionProps} key = {id}/>
               )
            })}
            </div>
        )
    }
}


export default ShopPage;