let regex = /_0_([0-9a-zA-Z\-_]+)\.html$/;

// Obtener la URL actual
let url = window?.location?.href ?? "";

// Verificar si la URL coincide con la expresión regular
if (regex.test(url) || url.includes("/juegos") || url.includes("/claringrilla")) {
  function valueFromCookie(cookieName) {
    var reg = cookieName + "\\=([^\\;]+)";
    var matches = document.cookie.match(new RegExp(reg));
    return matches != null && matches.length > 1 ? matches[1] : "";
  }

  const meterScript = () => {
    let scriptMeter = document.createElement("script");
    scriptMeter.type = "text/javascript";
    scriptMeter.async = true;
    scriptMeter.src =
      "https://st-wzb.clarin.com/weizenbock/amazon/min.js?v=0002";
    document.head.append(scriptMeter);
    console.log("METER!");
  };

  let user = window.localStorage.getItem("wads_userProfile")
    ? window.localStorage.getItem("wads_userProfile")
    : null;
  if (user === null) {
    meterScript();
  }

  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  if (isJsonString(user)) {
    user = JSON.parse(user);
  }

  if (user?.value != undefined) {
    user = user.value;
  }

  if (user?.subscriptionStatus != "subscribed") {
    if (valueFromCookie("susTemp") == "") {
      meterScript();
    } else {
      let expDate = getExpireDate(5);
      document.cookie =
        "statusSus=1; expires=" + expDate.toUTCString() + "; path=/";
    }
  } else {
    meterScript();
  }

  function getExpireDate(expire) {
    let expDate = new Date();
    expDate.setHours(expDate.getHours() + expire);
    return expDate;
  }
}
