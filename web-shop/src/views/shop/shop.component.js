import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selectors'

import PreviewCollection from '../../components/preview-collection/preview-collection.component'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
)

const mapPropToState = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapPropToState)(ShopPage)