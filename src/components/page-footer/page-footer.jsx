import React from 'react';
import Logo from '../logo/logo';

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <Logo isLight={true} />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default PageFooter;
