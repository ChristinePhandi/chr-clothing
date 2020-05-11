import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from 'redux';
import { selectIsCollectionLoading } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from "./collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoading(state)
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionContainer