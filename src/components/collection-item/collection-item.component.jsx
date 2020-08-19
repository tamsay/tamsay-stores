import React from 'react'
import './collection-item.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionItem=({name, price, imageUrl})=>{
    return(
        <div className = 'collection-item'>
            <div className = 'image' style = {
                {backgroundImage: `url(${imageUrl})`}
            }>
                <button>ADD TO CART</button>
            </div>
            <div className = 'collection-footer'>
                <span className = 'name'>{name}</span> <span>${price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;