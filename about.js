const AboutUs = (function () {
  const _showMore = function () {
    $('#readMore').fadeIn(1000);
    const readMoreButton = $('#readMoreBtn');
    readMoreButton.unbind('click').bind('click', _showLess);
    readMoreButton.text('Read Less');
  };

  const _showLess = function () {
    $('#readMore').fadeOut(500);
    const readMoreButton = $('#readMoreBtn');
    readMoreButton.unbind('click').bind('click', _showMore);
    readMoreButton.text('Read More');
  }

  const _init = function () {
    $('#readMore').hide();
    const readMoreButton = $('#readMoreBtn');
    readMoreButton.on('click', _showMore);
  };

  return {
    showMore: _showMore,
    init: _init,
  };
})();

AboutUs.init();
