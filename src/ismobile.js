const ismobile = {
  Android: () => navigator.userAgent.match(/Android/i),
  BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  Opera: () => navigator.userAgent.match(/Opera Mini/i),
  Windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () => (ismobile.Android() || ismobile.BlackBerry() || ismobile.iOS() ||
              ismobile.Opera() || ismobile.Windows()),
};

export default ismobile;
