import React from 'react';

import {connect } from 'react-redux'; 
 
import  CartIcon from '../cart-icon/cart-icon.component';  
import  CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {signOutStart} from '../../redux/user/user.actions';

import {ReactComponent as Logo}  from '../../assets/crown.svg';

import './header.styles.scss';

import {
    HeaderContainer, 
    LogoContainer, 
    OptionContainer, 
    OptionLink} 
    from './header.styles';

 const Header = ({ currentUser, hidden, signOutStart }) => (
     <HeaderContainer>
     <LogoContainer to="/">
        <Logo className='logo'/>
     </LogoContainer>
    <OptionContainer>
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>

        <OptionLink to='/contact'>
            CONTACT
        </OptionLink>

    {
        currentUser ?(
        <OptionLink as='div' onClick={signOutStart} >
            SIGN OUT
        </OptionLink>
         ) :(
        <OptionLink to='/signin'>
            SIGN IN
        </OptionLink>
         )}
    <CartIcon/>
    </OptionContainer>
    {
    hidden ? null : 
    <CartDropdown/>
}
     </HeaderContainer>
 );

 const mapStateToProps = ({user:{currentUser}, cart: {hidden} }) => ({
    currentUser,
    hidden 

 });

 const mapDispatchToProps = dispatch => ({
     signOutStart: () => dispatch(signOutStart())
 });

 export default connect(mapStateToProps, mapDispatchToProps)(Header);    
 