var closur = (() => {
  var cleardata = () => {
    document.querySelector("#fval").value = "";
    document.querySelector("#sval").value = "";
  };

  var getsum = (fval, sval) => {
    var value = convertValues(fval, sval);
    fval = value[0];
    sval = value[1];
    var result = fval + sval;
    return result;
  };

  var getmul = (fval, sval) => {
    var value = convertValues(fval, sval);
    fval = value[0];
    sval = value[1];
    var result = fval * sval;
    return result;
  };

  var getminus = (fval, sval) => {
    var value = convertValues(fval, sval);
    fval = value[0];
    sval = value[1];
    var result = fval - sval;
    return result;
  };

  var getdiv = (fval, sval) => {
    var value = convertValues(fval, sval);
    fval = value[0];
    sval = value[1];
    var result = fval / sval;
    return result;
  };

  var convertValues = (a, b) => {
    var fval = parseInt(a);
    var sval = parseInt(b);
    return [sval, fval];
  };
  return {
    gs: (a, b) => {
      return getsum(a, b);
    },
    gm: (a, b) => {
      return getminus(a, b);
    },
    gmn: (a, b) => {
      return getmul(a, b);
    },
    gd: (a, b) => {
      return getdiv(a, b);
    },
    gc: (a, b) => {
      return convertValues(a, b);
    },
  };
})();
