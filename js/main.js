function addCommas(nStr) {
  nStr = nStr.split(',').join('');
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }

  return x1 + x2;
}

function addZero(value) {
  var amountOriginal = parseInt($('#amount-original').val().split(',').join(''));
  var amountOld = amountOriginal;
  var zeros_str = '';
  if ($('#zeros-add').html()!= '-') {
    amountOld = parseInt(amountOriginal.toString()+$('#zeros-add').html());
    zeros_str = $('#zeros-add').html();
  } else {
    amountOld = parseInt(amountOriginal.toString());
    zeros_str = '';
  }

  if (value == 1) {
    zeros_str = zeros_str+'0';
    $('#zeros-add').html(zeros_str);
  } else if (value == -1) {
    zeros_str = zeros_str.substr(0,zeros_str.length-1);
    if (zeros_str == '') {
      $('#zeros-add').html('-');
    } else {
      $('#zeros-add').html(zeros_str);
    }
  }

  var amountNew = parseInt(amountOriginal.toString()+zeros_str);
  $('#bd-amount-new').html(addCommas(amountNew.toString()));

  var diffSubstraction = amountNew - amountOriginal;
  var diffLaptops = Math.floor(diffSubstraction/50000);
  var diffEmployees = Math.floor(diffSubstraction/(50000*12));
  var diffMercedes = Math.floor(diffSubstraction/19197500);
  $('#bd-diff-subtraction').html(addCommas(diffSubstraction.toString()));
  $('#bd-diff-laptops').html(addCommas(diffLaptops.toString()));
  $('#bd-diff-employees').html(addCommas(diffEmployees.toString()));
  $('#bd-diff-mercedes').html(addCommas(diffMercedes.toString()));
}

window.onload = function () {
  addCommas($('#amount-original').val());
  $('#bd-amount-original').html($('#amount-original').val());
  addZero(1);
};