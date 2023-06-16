const btns =
  document.querySelectorAll(".pageBtn");
let lastBtn = null;

const scrollIntoView = (dom) => {
  const parentElem = dom.offsetParent;

  const childRect = dom.getBoundingClientRect();

  const parentRect =
    parentElem.getBoundingClientRect();

  let scrollAmt;

  if (childRect.left < parentRect.left) {
    scrollAmt =
      childRect.left - parentRect.left - 32;
  } else if (childRect.right > parentRect.right) {
    scrollAmt =
      childRect.right - parentRect.right + 32;
  }

  if (
    scrollAmt !== undefined &&
    scrollAmt !== 0
  ) {
    parentElem.scrollBy({
      top: 0,
      left: scrollAmt,
      behavior: "smooth",
    });
  }
};

btns.forEach((eachBtn) => {
  eachBtn.onclick = (e) => {
    console.log("target", e.target);
    console.log("cTarget", e.currentTarget);
    lastBtn?.classList.remove("pressed");
    e.currentTarget.classList.add("pressed");
    // e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    scrollIntoView(e.currentTarget);
    lastBtn = e.currentTarget;
  };
});
