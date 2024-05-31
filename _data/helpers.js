module.exports = {
  /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    if (itemUrl === pageUrl) {
      response = 'class="nav-link link-secondary active fw-bold" aria-current="page"';
    } else {
      response = 'class="nav-link link-secondary"';
    }

    return response;
  },
};
