import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../store/user-slice/user-slice';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleSumbit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="user-page">
      <PageHeader className="user-page__head" isUserBlockShown={false}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </PageHeader>
      <div className="sign-in user-page__content">
        <form
          className="sign-in__form"
          onSubmit={handleSumbit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input ref={emailRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <PageFooter />
    </div>
  );
};

export default LoginPage;
