---
layout: layout-main.njk
title: Tutorial
permalink: /tutorial/
eleventyNavigation:
  key: Tutorial
  order: 2
---

<div class="p-5 mb-5 text-center bg-body-tertiary rounded-3">
    <h1 class="mt-0 mb-3 text-body-emphasis">
        <a href="/" class="text-decoration-none">A simple page builder app ✨</a>
    </h1>
    <p class="mt-2 mb-0 fs-5 muted">
        Created by <a href="https://stefanbohacek.online/@stefan">Stefan Bohacek</a>. <a href="https://github.com/stefanbohacek/simplepagebuilder">View source.</a>
    </p>
</div>

<p class="lead mt-5 mb-5">
    Making your own personal website is a fun way to own a piece of the web that is just yours, and that you can use
    to tell the world about yourself, the things you like, and that matter to you.
</p>
<p class="mt-5">
    <a href="/app" class="d-inline-flex align-items-center btn btn-dark btn-lg px-4 rounded-pill">
        Open the page builder
    </a>
</p>
<p class="mt-5">
    There are many ways to make and host a website, and some of the tools even let you do that for free. This guide
    will show you how to make a website with a simple drag and drop interface (you can still edit the code later!),
    and host it for free.
</p>
<ul class="mt-5 mb-5">
    <li>
        <a href="#pick-hosting">Pick your hosting</a>
    </li>
    <li>
        <a href="#make">Make your website</a>
    </li>
    <li>
        <a href="#hosting">Upload your website</a>
    </li>
    <li>
        <a href="#next">What's next?</a>
    </li>
    <li>
        <a href="#attributions">Attributions</a>
    </li>
</ul>
<h2 class="mb-3" id="pick-hosting">
    <a href="#pick-hosting">Pick your hosting</a>
</h2>
<p class="mt-2">
    Before we begin, let's pick where we'll host our site. The steps on how to upload the finished site will come
    later, but we will need to upload any images we want to use here.
</p>
<p class="mt-2">
    My favorite place to recommend for hosting simple web pages right now is <a href="#hosting-neocities">Neocities</a>; it's free and very easy to use.
</p>
<h2 class="mb-3" id="make">
    <a href="#make">Make your website</a>
</h2>
<p class="mt-2">
    Let's <a href="/app" target="_blank">open up the page builder tool</a>. The main interface consists of a blank canvas on the
    left, and a sidebar which by default lists all available blocks we can use to put our web page together.
</p>
<p class="mt-2">
    Let's start by dragging the <mark>1 Column</mark> block onto the canvas.
</p>
<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/add-column.mp4" type="video/mp4">
</video>

<p class="mt-2">
    I gave the column a <mark>max-width</mark>, or maximum width, of 920 pixels. This will prevent the content of
    our page from becoming too wide.
</p>

<p class="mt-2">
    Next, let's add a <mark>Text section</mark> block, which comes with a title and a paragraph. Go ahead and write
    a little introduction about yourself.
</p>

<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/text.mp4" type="video/mp4">
</video>

<p class="mt-2">
    You can play around with some of the settings of each block. I tweaked a few things myself to make the text
    centered, and made the font a bit larger.
</p>

<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/fonts.mp4" type="video/mp4">
</video>
<p class="mt-2">
    Now I'm going to add an image that we will need to upload to <a href="#hosting">one of the services</a> we will
    later use to host our
    finished site.
</p>

<p class="mt-2">
    Be sure to add alt text to your image. (<a href="https://alttexthalloffame.org/">See why that's important.</a>)
</p>

<p class="mt-2">
    <a href="/images/screenshots/alt-text.png">
        <img loading="lazy" class="w-100 screenshot" src="/images/screenshots/alt-text.png" alt="Screenshot of the page builder interface showing how to add alt text to an image.">
    </a>
</p>

<p class="mt-2">
    Feel free to resize it if it's too large on the page. You can set the <mark>width</mark> to <mark>100%</mark> to
    make it responsive, and give
    it a fixed <mark>max-width</mark> to limit how large it can become.
</p>
<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/image.mp4" type="video/mp4">
</video>
<p class="mt-2">
    Here's a little trick on how to get the image to center. Make sure that the <mark>display</mark> property is set
    to <mark>block</mark> (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow">see
        the difference</a> between <mark>block</mark>, <mark>inline</mark> elements), and set both the left and
    right <mark>margin</mark> to <mark>auto</mark>.
</p>
<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/image-center.mp4" type="video/mp4">
</video>
<p class="mt-2">
    You can play a bit more with the look of your image. I am giving it a bit more space on top by adjusting the
    <mark>top-margin</mark> and adjusting the <mark>border-radius</mark>.
</p>
<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/image-styles.mp4" type="video/mp4">
</video>
<p class="mt-2">
    We're nearly done making our web page! Let me go back to the text real quick to add a link to a website that
    lists my personal side projects. You could also link to your social media profiles, or just any website that you
    like and want to share with others.
</p>
<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/add-link.mp4" type="video/mp4">
</video>
<p class="mt-2">
    Time for some final tweaks, like changing the page <mark>background-color</mark>.
</p>
<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/body-background.mp4" type="video/mp4">
</video>
<p class="mt-2">
    We can also center the content using the <mark>margin</mark> trick we applied to our image.
</p>
<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/center-content.mp4" type="video/mp4">
</video>
<p class="mt-2">
    Great, and we're done! Time to get the code and upload it online for the world to see.
</p>
<p class="mt-2">
    To do that, click the <mark>&lt;/&gt;</mark> icon in the main toolbar and then click the <mark>Export to
        ZIP</mark> button.
</p>
<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/download-code.mp4" type="video/mp4">
</video>
<h2 class="mb-3" id="hosting">
    <a href="#hosting">Upload your website</a>
</h2>
<ul class="mt-5 mb-5">
    <li>
        <a href="#hosting-neocities">Neocities</a>
    </li>
    <li>
        <a href="https://stefanbohacek.com/blog/so-long-glitch-and-thanks-for-all-the-apps/"><s>Glitch</s></a>
    </li>
</ul>
<h3 class="mb-3" id="hosting-neocities">
    <a href="#hosting-neocities">Neocities</a>
</h3>
<p class="mt-2">
    <a href="https://neocities.org/">Neocities</a> set out on a mission to "[bring] back the lost individual
    creativity of the web". You can host your site for free (with a <a href="https://neocities.org/supporter">few
        extra perks</a> if you decide to upgrade), and follow folks making their websites here.
</p>
<h4 class="mb-3" id="hosting-neocities-images">
    <a href="#hosting-neocities-images">Upload images to Neocities</a>
</h4>
<p class="mt-2">
    Once you sign up, you can head to the <a href="https://neocities.org/dashboard">dashboard</a> and upload your
    images here.
</p>

<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/neocities-upload-image.mp4" type="video/mp4">
</video>

<p class="mt-2">
    Clicking the uploaded image will open it in a new browser tab, allowing you to copy the URL of the image.
</p>

<h4 class="mb-3" id="hosting-neocities-site">
    <a href="#hosting-neocities-site">Upload your site to Neocities</a>
</h4>
<p class="mt-2">
    To upload your site, go to the <a href="https://neocities.org/dashboard">dashboard</a>, and edit
    <mark>index.html</mark> using the contents of your own exported <mark>index.html</mark> file.
</p>

<p class="mt-2">
    Next, create a new folder <mark>css</mark>, and inside it, a file called <mark>style.css</mark>. Updated this
    file using the <mark>style.css</mark> file from your export.
</p>

<video controls="" width="720" class="mw-100 mt-3 mb-3">
    <source src="/videos/walkthrough/neocities-upload-site.mp4" type="video/mp4">
</video>

<p class="mt-2">
    When you're done, click the <mark>View</mark> button when editing your <mark>index.html</mark> file, or the name
    of the file if you're back in the dashboard, and you will see your finished web page. Congratulations!
</p>

<h2 class="mb-3" id="next">
    <a href="#next">What's next?</a>
</h2>

<p class="mt-2">
    I hope you enjoyed making your (first) website!
</p>

<p class="mt-2">
    You can now relax and enjoy being a contributor to the shared world of <a href="https://maggieappleton.com/garden-history">digital gardens</a>. You can also do more fun things with
    your website, like:
</p>

<ul class="mt-2">
    <li>
        make sure your site is <a href="https://dap.berkeley.edu/testing/checklist-manual-reviews">accessible to
            everyone</a>
    </li>
    <li>
        make your site <a href="https://stefanbohacek.com/blog/resources-for-keeping-the-web-free-open-and-poetic/#make-your-website-fediverse-ready">fediverse-ready</a>
    </li>
    <li>
        find inspiration with sites like
        <a href="https://personalsit.es/">personalsit.es</a>,
        <a href="https://deadsimplesites.com/">deadsimplesites.com</a>,
        <a href="https://ooh.directory/">ooh.directory</a>, or
        <a href="https://whimsical.club/">whimsical.club</a>
    </li>
    <li>
        set up <a href="https://indieweb.org/personal-domain">your own domain</a>
    </li>
    <li>
        learn about <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML">HTML</a>,
        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">JavaScript</a>
        , and
        <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a>
    </li>
    <li>
        create a <a href="https://indieweb.org/blog">blog</a>
    </li>
    <li>
        learn about <a href="https://www.home.cern/science/computing/birth-web/short-history-web">the history of the
            web</a>
    </li>
    <li>
        help others to make their own website
    </li>
    <li>
        <a href="https://jamesg.blog/2024/02/19/personal-website-ideas/">and a lot more!</a>
    </li>
</ul>

<h2 class="mb-3" id="attributions">
    <a href="#attributions">Attributions</a>
</h2>

<ul class="mt-2">
    <li>the page builder was made with <a href="https://grapesjs.com/">GrapeJS</a>, created by <a href="https://github.com/artf">Artur Arseniev</a></li>
    <li>color palette from <a href="https://www.happyhues.co/">Happy Hues</a>, created by <a href="https://www.mackenziechild.me/">Mackenzie Child</a></li>
    <li>the source of this site is <a href="https://github.com/stefanbohacek/simplepagebuilder">available on
            GitHub</a></li>
</ul>

<p class="mt-2">
    See more of my work on <a href="https://stefanbohacek.com/">stefanbohacek.com</a>.
</p>
