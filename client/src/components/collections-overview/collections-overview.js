import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from "../collection-preview/collection-preview";
import "./collections-overview.styles.scss";

function CollectionsOverview({ collections }) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
