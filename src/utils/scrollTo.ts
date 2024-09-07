export default function scrollTo(ID: string, offset: number) {
  const rectTop = document.querySelector(ID)?.getBoundingClientRect().top;

  window.scrollTo({
    top: rectTop! + window.scrollY - offset,
    left: 0,
    behavior: "smooth",
  });
}
