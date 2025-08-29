window.onload = function () {
  const nav = document.querySelector('nav');
  const bodyHeight = document.body.clientHeight - window.innerHeight;

  document.addEventListener('scroll', () => {
    nav.style.transform = `rotate(${(window.scrollY / bodyHeight) * 360}deg)`;
  });
};
