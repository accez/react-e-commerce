import React from 'react'
import { connect } from 'react-redux'
import { selectCategory } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './category.styles.scss'

const CategoryPage = ({ category }) => {
  console.log(category)
  return (
    <div className='category'>
      <h2>CategoryPage</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage)