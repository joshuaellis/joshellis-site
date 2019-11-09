export default () => {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.classList.add('body__modal--active');
  return () => {
    const scrollY = document.body.style.top;
    document.body.classList.remove('body__modal--active');
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  };
};
