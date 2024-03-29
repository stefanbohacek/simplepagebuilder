import tourGuide from "./tour.js";

export default () => {
  const editor = grapesjs.init({
    container: "#gjs",
    //components: '<div class="txt-red">Hello world!</div>',
    plugins: [
      "grapesjs-preset-webpage",
      "gjs-blocks-basic",
      "grapesjs-custom-code",
      "grapesjs-plugin-export",
      "grapesjs-touch",
    ],
    autorender: false,
    pluginsOpts: {
      "gjs-blocks-basic": {},
      "grapesjs-preset-webpage": {
        textCleanCanvas: "Are you sure you want to remove everything?",
      },
      "grapesjs-custom-code": {},
      "grapesjs-plugin-export": {
        filenamePfx: "my-personal-site",
        root: {
          files: {
            "index.html": (ed) =>
              html_beautify(/* html */ `
                <!DOCTYPE html>
                  <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>My personal site</title>
                      <link href="./css/style.css" rel="stylesheet">
                    </head>
                    ${ed.getHtml()}
                </html>          
                `),
            css: {
              "style.css": (ed) => ed.getCss(),
            },
            "README.md": "Made with https://simplepagebuilder.app/",
            // img: async ed => {
            //   const images = await fetchImagesByStructue(ed.getComponents());
            //   return images;
            //   // { 'img1.png': '...png content', 'img2.jpg': '...jpg content' }
            // },
          },
        },
      },
      "grapesjs-touch": {},
    },
  });

  /* Hide buttons. */

  [
    ["views", "open-layers"],
    // ["views", "open-tm"],
    ["options", "sw-visibility"],
    ["options", "fullscreen"],
    ["options", "gjs-open-import-webpage"],
    // ["options", "export-template"]
  ].forEach((item) => {
    const btn = editor.Panels.getButton(item[0], item[1]);
    btn.collection.remove(btn);
  });

  /* Allow editing the HTML code. */
  // source: https://github.com/GrapesJS/grapesjs/issues/324

  const pfx = editor.getConfig().stylePrefix;
  const modal = editor.Modal;
  const cmdm = editor.Commands;
  const htmlCodeViewer = editor.CodeManager.getViewer("CodeMirror").clone();
  const cssCodeViewer = editor.CodeManager.getViewer("CodeMirror").clone();
  const pnm = editor.Panels;
  const container = document.createElement("div");
  const btnEdit = document.createElement("button");

  htmlCodeViewer.set({
    codeName: "htmlmixed",
    readOnly: 0,
    theme: "hopscotch",
    autoBeautify: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    smartIndent: true,
    indentWithTabs: true,
  });

  cssCodeViewer.set({
    codeName: "css",
    readOnly: 0,
    theme: "hopscotch",
    autoBeautify: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    smartIndent: true,
    indentWithTabs: true,
  });

  btnEdit.innerHTML = "Save";
  btnEdit.className = pfx + "btn-prim " + pfx + "btn-import";
  btnEdit.onclick = () => {
    const html = htmlCodeViewer.editor.getValue();
    const css = cssCodeViewer.editor.getValue();
    editor.DomComponents.getWrapper().set("content", "");
    editor.setComponents(html.trim());
    editor.setStyle(css);
    modal.close();
  };

  cmdm.add("edit-code", {
    run: (editor, sender) => {
      sender && sender.set("active", 0);
      let htmlViewer = htmlCodeViewer.editor;
      let cssViewer = cssCodeViewer.editor;
      modal.setTitle("Edit code");
      if (!htmlViewer && !cssViewer) {
        const txtarea = document.createElement("textarea");
        const cssarea = document.createElement("textarea");
        container.appendChild(txtarea);
        container.appendChild(cssarea);
        container.appendChild(btnEdit);
        htmlCodeViewer.init(txtarea);
        cssCodeViewer.init(cssarea);
        htmlViewer = htmlCodeViewer.editor;
        cssViewer = cssCodeViewer.editor;
      }
      const InnerHtml = editor.getHtml();
      const Css = editor.getCss();
      modal.setContent("");
      modal.setContent(container);
      htmlCodeViewer.setContent(InnerHtml);
      cssCodeViewer.setContent(Css);
      modal.open();
      htmlViewer.refresh();
      cssViewer.refresh();
    },
  });

  pnm.addButton("options", [
    {
      id: "edit",
      className: "fa fa-edit",
      command: "edit-code",
      attributes: {
        title: "Edit Code",
      },
    },
  ]);

  /* Add "Help" button. */

  editor.Panels.addButton("options", [
    {
      id: "save",
      className: "fa fa-question icon-blank",
      command: (editor, sender) => {
        document.documentElement.style.overflow = "hidden";
        tourGuide.start();
      },
      attributes: { title: "Help" },
    },
  ]);

  // const importBtn = editor.Panels.getButton(
  //   "options",
  //   "gjs-open-import-webpage"
  // );

  // importBtn.set({
  //   className: "fa fa-upload icon-blank",
  //   label: "",
  // });

  editor.on("load", () => {
    editor.Panels.getButton("views", "open-blocks").set("active", true);
    // editor.Panels.removePanel('devices-c')
  });

  // const bm = editor.Blocks;
  // const imageBlock = bm.get('image');

  // imageBlock.set({
  //   label: 'Updated block',
  // });

  // bm.add('image2', {
  //   // category,
  //   // select: true,
  //   // activate: true,
  //   label: "IMAGE2",
  //   media: `<svg viewBox="0 0 24 24">
  //     <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
  //   </svg>`,
  //   content: {
  //     style: { color: 'black' },
  //     type: 'image',
  //   }
  // });

  editor.render();
};
