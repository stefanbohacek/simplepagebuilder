export default () => {
  const highlightCodeFn = () => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });

    let blocks = document.querySelectorAll("pre code.hljs");
    Array.prototype.forEach.call(blocks, (block) => {
      const language = block.result.language;
      block.insertAdjacentHTML("afterbegin", `<label>${language}</label>`);
    });
  };

  if (typeof hljs !== "undefined") {
    highlightCodeFn();
  } else {
    setTimeout(highlightCodeFn, 2000);
  }
};
