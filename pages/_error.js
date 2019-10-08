import Router from 'next/router';

function Error() {
  return null;
}

Error.getInitialProps = ({ res }) => {
  if (typeof window === 'undefined') res.redirect('/');
  else Router.push('/');
};

export default Error;
