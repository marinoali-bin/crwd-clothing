import React from "react"
import "./collection-preview.style.scss"
import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({ title, items, name, price }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>

      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  )
}
export default CollectionPreview
