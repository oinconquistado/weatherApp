const darkModeManger = () => {
  let body: HTMLBodyElement | null;
  body = document.querySelector("body");
  body?.classList.toggle("dark");
};

export default darkModeManger;
