import React from 'react';
import Item from '../components/Item';

class ItemsList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.products.map(product => (
                        <Product
                            key={product.id}
                            product={product} />
                    ))
                }
            </div>
        )
    }
}

ItemsList.propTypes = {
    products: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

ProductList.defaultProps = {
    products: []
};

export default ItemsList;