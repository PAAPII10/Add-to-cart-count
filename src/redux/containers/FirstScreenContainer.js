import {connect} from 'react-redux';
import FirstScreen from '../../screens/FirstScreen';
import {addToCart, removeToCart} from '../Services/Actions/action';

const mapStateToProps = state => ({
  cardData: state.cardItems,
});
const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
  removeToCartHandler: data => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
