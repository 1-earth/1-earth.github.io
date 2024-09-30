(function () {
  const banner = document.querySelector('.cookie-banner');

  if (! banner) {
    return;
  }

  const cookieDuration = 28; // days
  const acceptBtn = document.querySelector('.cookie-banner__button-accept', banner);
  const rejectBtn = document.querySelector('.cookie-banner__button-reject', banner);

  acceptBtn.addEventListener('click', accepted);
  rejectBtn.addEventListener('click', rejected);

  function setCookie(name, value, days) {
    let expires = '';

    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires='+date.toGMTString();
    }

    document.cookie = name + '=' + value + expires + '; path=/';
  }

  function dismiss() {
    banner.classList.add('cookie-banner--dismiss');

    setTimeout(() => {
      banner.remove();
    }, 500);
  }

  function accepted() {
    setCookie('cookie-banner-consent', 'accepted', cookieDuration);
    window.location.reload();
  }

  function rejected() {
    setCookie('cookie-banner-consent', 'rejected', cookieDuration);
    dismiss();
  }
}());
