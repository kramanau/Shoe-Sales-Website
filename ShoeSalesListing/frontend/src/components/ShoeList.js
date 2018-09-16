import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import { connect } from 'react-redux';
import { getShoes } from '../actions/shoeActions';
import PropTypes from 'prop-types';

class ShoeList extends Component {

  componentDidMount() {
    this.props.getShoes();
  }

  render(){
    const { shoes } = this.props.shoe;
    return(
      <ListGroup>
            {shoes.map(({ _id, Brand, Description, OriginalPrice, SalesPrice }) => (
                <ListGroupItem>
                  <strong>Brand</strong>: {Brand},
                  <strong>Description</strong>: {Description},
                  <strong>Original Price</strong>: ${OriginalPrice},
                  <strong>Sales Price</strong>: ${SalesPrice}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
  }
}

ShoeList.propTypes = {
  getShoes: PropTypes.func.isRequired,
  shoe: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  shoe: state.shoe
});

export default connect(mapStateToProps, { getShoes })(ShoeList);
