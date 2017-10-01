const isMobile = {
  android: () => navigator.userAgent.match(/Android/i),
  blackBerry: () => navigator.userAgent.match(/BlackBerry/i),
  iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
  opera: () => navigator.userAgent.match(/Opera Mini/i),
  windows: () => navigator.userAgent.match(/IEMobile/i),
  any: () => {
    if (isMobile.android()) return 1;
    if (isMobile.blackBerry()) return 1;
    if (isMobile.iOS()) return 1;
    if (isMobile.opera()) return 1;
    if (isMobile.windows()) return 1;
    return 0;
  },
};

export default isMobile;
