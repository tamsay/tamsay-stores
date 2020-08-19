import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview=({title, items})=>{

    let previewArray = [];
        for(let x=0; x < 4; x++){
            previewArray.push(items[x])
        }

        return (
            <div className = 'collection-preview'>
                <h1 className = 'title'>{title}</h1>
                <div className = 'preview'>
                    {   
                        previewArray.map(({id, ...otherProps})=>{
                            return (
                                <CollectionItem key = {id} {...otherProps} />
                                // <div >{item.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
}

export default CollectionPreview;