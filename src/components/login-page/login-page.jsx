import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../store/user/user';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import browserHistory from '../../browser-history';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const [isLoginError, setIsLoginError] = useState(false);

  const handleSumbit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }))
    .unwrap()
    .then(() => browserHistory.push(`/`))
    .catch(() => setIsLoginError(true));
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
          {isLoginError && <div className="sign-in__message">
            <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
          </div>}
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
