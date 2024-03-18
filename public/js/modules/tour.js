window.showAboutPage = () => {
  window.open("/about", "_blank").focus();
};

window.showContactPage = () => {
  window.open("https://stefanbohacek.com/contact/", "_blank").focus();
};

const steps = [
  {
    title: "Welcome aboard 👋",
    content: /* html */ `
    <p>
        This is a short guide to get you familiar with the interface.
    </p>
    <p>
        For a more detailed walkthrough, please <a href='/about' onClick="window.showAboutPage()">visit the About page</a>.
    </p>
    `,
    order: "",
    group: "",
  },
  {
    title: "Building blocks",
    content: /*html*/ `
        Use the <span title="Help" class="fa fa-plus"></span> button to open the block menu.
    `,
    target: "[title='Open Blocks']",
    order: "",
    group: "",
  },
  {
    title: "Building blocks",
    content: /* html */ `
        From here you can add page sections and elements to your page.
    `,
    target: "[title='1 Column']",
    order: "",
    group: "",
  },
  {
    title: "Building blocks",
    content: /* html */ `
        Note that this editor does not provide hosting for your images, so please upload them elsewhere and use the URL field inside the image block to add them to your page.
    `,
    target: "[title='Image']",
    order: "",
    group: "",
  },
  {
    title: "Export your website",
    content: /* html */ `
        <p>
        Once you're happy with how your page looks, you can export it as a compressed ZIP file by clicking the <span title="Code" class="fa fa-code"></span> button and selecting the "Export to ZIP" option.
        </p>
        <p>
            The <a href='/about' onClick="window.showAboutPage()">full guide</a> will show you how you can host it completely for free.
        </p>
    `,
    target: "[title='View code']",
    order: "",
    group: "",
  },
  {
    title: "Revisit the guide",
    content: /* html */ `
        If you need a refresher, use the <span title="Help" class="fa fa-question"></span> button to bring back this walkthrough.
    `,
    target: ".gjs-pn-btn.fa.fa-question.icon-blank",
    order: "",
    group: "",
  },
  {
    title: "Have fun!",
    content: /* html */ `
        I hope you'll enjoy making your (first) web page, and feel free to <a href='/about' onClick="window.showContactPage()">reach out</a> to share it, or if you have any questions!
    `,
    order: "",
    group: "",
  },
];

const tg = new tourguide.TourGuideClient({
  steps: steps,
});

tg.onAfterExit(()=>{
    document.documentElement.style.overflow = "auto";
});
    

export default tg;
