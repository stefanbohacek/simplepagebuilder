export default () => {

  [...document.querySelectorAll("h2")].forEach((heading) => {
    var id = heading.getAttribute('id');
    var link = document.createElement('a');
    link.setAttribute('href', '#' + id);
    link.classList.add("pilcrow-link");
    link.innerHTML = `${heading.innerHTML} <span class="pilcrow">¶</span>`;
    heading.innerHTML = link.outerHTML;
  });
  

  // [...document.querySelectorAll("h2")].forEach((heading) => {
  //   console.log(heading);
  //   const anchor = document.createElement("a");

  //   anchor.innerHTML = "¶";
  //   anchor.href = `#${heading.id}`;
  //   anchor.classList.add("pilcrow-link");
  //   // $span_pilcrow = $doc->createElement('span');
  //   // $span_pilcrow->setAttribute('class', 'pilcrow');
  //   // $span_pilcrow->nodeValue = '¶';

  //   heading.insertAdjacentElement("beforeend", anchor);

  //   // heading.after(anchor);

  //   // pilcrowLink.innerHTML += /* html */ `<span class="pilcrow">¶</span>`;
  // });
};
