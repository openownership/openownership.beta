// 1. Foundation
// --------------------

Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

$(document).foundation();

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// 2. Cookies Policy
// --------------------

$(function() {
  if($.cookie('showed_modal') != "true") {

setTimeout(
  function()
  {
    //do something special
$("#cookiesPolicy").foundation("open")
  }, 2000);

//     $("#cookiesPolicy").foundation("open");
//     $.cookie('showed_modal', 'true', { expires: 365, path: '/'});


    $.cookie('showed_modal', 'true', { expires: 365 });
  }
});

// 3. Map page
// --------------------

$(function(){
  var countryCentroids = {
    "AW": [12.52088038, -69.98267711],
    "AF": [33.83523073, 66.00473366],
    "AO": [12.29336054, 17.53736768],
    "AI": [18.2239595, -63.06498927],
    "AL": [41.14244989, 20.04983396],
    "AX": [60.21488688, 19.95328768],
    "AD": [42.54229102, 1.56054378],
    "AE": [23.90528188, 54.3001671],
    "AR": [35.3813488, -65.17980692],
    "AM": [40.28952569, 44.92993276],
    "AS": [14.30445997, -170.71802575],
    "AQ": [80.50857913, 19.92108951],
    "TF": [49.24895485, 69.22666758],
    "AG": [17.2774996, -61.79469343],
    "AU": [25.73288704, 134.49100008],
    "AT": [47.58549439, 14.1264761],
    "AZ": [40.28827235, 47.54599879],
    "BI": [3.35939666, 29.87512156],
    "BE": [50.63981576, 4.64065114],
    "BJ": [9.6417597, 2.32785254],
    "BF": [12.26953846, -1.75456601],
    "BD": [23.86731158, 90.23812743],
    "BG": [42.76890318, 25.21552909],
    "BH": [26.04205135, 50.54196932],
    "CA": [61.36206324, -98.30777028],
    "BS": [24.29036702, -76.62843038],
    "BA": [44.17450125, 17.76876733],
    "BL": [17.89880451, -62.84067779],
    "BY": [53.53131377, 28.03209307],
    "BZ": [17.20027509, -88.71010486],
    "BM": [32.31367802, -64.7545589],
    "BO": [16.70814787, -64.68538645],
    "BR": [10.78777702, -53.09783113],
    "BB": [13.18145428, -59.559797],
    "BN": [4.51968958, 114.72203035],
    "BT": [27.41106589, 90.40188155],
    "BW": [22.18403213, 23.79853368],
    "CF": [6.56823297, 20.46826831],
    "CH": [46.79785878, 8.20867471],
    "CL": [37.73070989, -71.38256213],
    "CN": [36.56176546, 103.81907349],
    "CI": [7.6284262, -5.5692157],
    "CM": [5.69109849, 12.73964156],
    "CD": [2.87746289, 23.64396107],
    "CG": [0.83787463, 15.21965762],
    "CK": [21.21927288, -159.78724218],
    "CO": [3.91383431, -73.08114582],
    "KM": [11.87783444, 43.68253968],
    "CV": [15.95523324, -23.9598882],
    "CR": [9.97634464, -84.19208768],
    "CU": [21.62289528, -79.01605384],
    "CW": [12.19551675, -68.97119369],
    "KY": [19.42896497, -80.91213321],
    "CY": [34.91667211, 33.0060022],
    "CZ": [49.73341233, 15.31240163],
    "DE": [51.10698181, 10.38578051],
    "DJ": [11.74871806, 42.5606754],
    "DM": [15.4394702, -61.357726],
    "DK": [55.98125296, 10.02800992],
    "DO": [18.89433082, -70.50568896],
    "DZ": [28.15893849, 2.61732301],
    "EC": [1.42381612, -78.75201922],
    "EG": [26.49593311, 29.86190099],
    "ER": [15.36186618, 38.84617011],
    "ES": [40.24448698, -3.64755047],
    "EE": [58.67192972, 25.54248537],
    "ET": [8.62278679, 39.60080098],
    "FI": [64.49884603, 26.2746656],
    "FJ": [17.42858032, 165.45195432],
    "FK": [51.74483954, -59.35238956],
    "FR": [42.17344011, -2.76172945],
    "FO": [62.05385403, -6.88095423],
    "FM": [7.45246814, 153.23943792],
    "GA": [0.58660025, 11.7886287],
    "GB": [54.12387156, -2.86563164],
    "GE": [42.16855755, 43.50780252],
    "GG": [49.46809761, -2.57239064],
    "GH": [7.95345644, -1.21676566],
    "GN": [10.43621593, -10.94066612],
    "GM": [13.44965244, -15.39601295],
    "GW": [12.04744948, -14.94972445],
    "GQ": [1.70555135, 10.34137924],
    "GR": [39.07469623, 22.95555794],
    "GD": [12.11725044, -61.68220189],
    "GL": [74.71051289, -41.34191127],
    "GT": [15.69403664, -90.36482009],
    "GU": [13.44165626, 144.76791022],
    "GY": [4.79378034, -58.98202459],
    "HK": [22.39827737, 114.11380454],
    "HM": [53.08724656, 73.5205171],
    "HN": [14.82688165, -86.6151661],
    "HR": [45.08047631, 16.40412899],
    "HT": [18.93502563, -72.68527509],
    "HU": [47.16277506, 19.39559116],
    "ID": [2.21505456, 117.24011366],
    "IM": [54.22418911, -4.53873952],
    "IN": [22.88578212, 79.6119761],
    "IO": [7.33059751, 72.44541229],
    "IE": [53.1754487, -8.13793569],
    "IR": [32.57503292, 54.27407004],
    "IQ": [33.03970582, 43.74353149],
    "IS": [64.99575386, -18.57396167],
    "IL": [31.46110101, 35.00444693],
    "IT": [42.79662641, 12.07001339],
    "JM": [18.15694878, -77.31482593],
    "JE": [49.21837377, -2.12689938],
    "JO": [31.24579091, 36.77136104],
    "JP": [37.59230135, 138.03089558],
    "KZ": [48.15688067, 67.29149357],
    "KE": [0.59988022, 37.79593973],
    "KG": [41.46221943, 74.54165513],
    "KH": [12.72004786, 104.90694325],
    "KI": [0.86001503, -45.61110513],
    "KN": [17.2645995, -62.68755265],
    "KR": [36.38523983, 127.83916086],
    "KW": [29.33431262, 47.58700459],
    "LA": [18.50217433, 103.73772412],
    "LB": [33.92306631, 35.88016072],
    "LR": [6.45278492, -9.32207573],
    "LY": [27.03094495, 18.00866169],
    "LC": [13.89479481, -60.96969923],
    "LI": [47.13665835, 9.53574312],
    "LK": [7.61266509, 80.70108238],
    "LS": [29.58003188, 28.22723131],
    "LT": [55.32610984, 23.88719355],
    "LU": [49.76725361, 6.07182201],
    "LV": [56.85085163, 24.91235983],
    "MO": [22.22311688, 113.50932116],
    "MF": [18.08888611, -63.05972851],
    "MA": [29.83762955, -8.45615795],
    "MC": [43.75274627, 7.40627677],
    "MD": [47.19498804, 28.45673372],
    "MG": [19.37189587, 46.70473674],
    "MV": [3.7287092, 73.45713004],
    "MX": [23.94753724, -102.52345169],
    "MH": [7.00376358, 170.33976122],
    "MK": [41.59530893, 21.68211346],
    "ML": [17.34581581, -3.54269065],
    "MT": [35.92149632, 14.40523316],
    "MM": [21.18566599, 96.48843321],
    "ME": [42.78890259, 19.23883939],
    "MN": [46.82681544, 103.05299765],
    "MP": [15.82927563, 145.61969651],
    "MZ": [17.27381643, 35.53367543],
    "MR": [20.25736706, -10.34779815],
    "MS": [16.73941406, -62.18518546],
    "MU": [20.27768704, 57.57120551],
    "MW": [13.21808088, 34.28935599],
    "MY": [3.78986846, 109.69762284],
    "NA": [22.13032568, 17.20963567],
    "NC": [21.29991806, 165.68492374],
    "NE": [17.41912493, 9.38545882],
    "NF": [29.0514609, 167.94921678],
    "NG": [9.59411452, 8.08943895],
    "NI": [12.84709429, -85.0305297],
    "NU": [19.04945708, -169.86994682],
    "NL": [52.1007899, 5.28144793],
    "NO": [68.75015572, 15.34834656],
    "NP": [28.24891365, 83.9158264],
    "NR": [0.51912639, 166.93256823],
    "NZ": [41.81113557, 171.48492347],
    "OM": [20.60515333, 56.09166155],
    "PK": [29.9497515, 69.33957937],
    "PA": [8.51750797, -80.11915156],
    "PN": [24.36500535, -128.31704202],
    "PE": [9.15280381, -74.38242685],
    "PH": [11.77536778, 122.88393253],
    "PW": [7.28742784, 134.40807966],
    "PG": [6.46416646, 145.20744752],
    "PL": [52.12759564, 19.39012835],
    "PR": [18.22813055, -66.47307604],
    "KP": [40.15350311, 127.19247973],
    "PT": [39.59550671, -8.50104361],
    "PY": [23.22823913, -58.40013703],
    "PS": [31.91613893, 35.19628705],
    "PF": [14.72227409, -144.90494387],
    "QA": [25.30601188, 51.18479632],
    "RO": [45.85243127, 24.97293039],
    "RU": [61.98052209, 96.68656112],
    "RW": [1.99033832, 29.91988515],
    "EH": [24.22956739, -12.21982755],
    "SA": [24.12245841, 44.53686271],
    "SD": [15.99035669, 29.94046812],
    "SS": [7.30877945, 30.24790002],
    "SN": [14.36624173, -14.4734924],
    "SG": [1.35876087, 103.81725592],
    "GS": [54.46488248, -36.43318388],
    "SH": [12.40355951, -9.54779416],
    "SB": [8.92178022, 159.63287668],
    "SL": [8.56329593, -11.79271247],
    "SV": [13.73943744, -88.87164469],
    "SM": [43.94186747, 12.45922334],
    "SO": [4.75062876, 45.70714487],
    "PM": [46.91918789, -56.30319779],
    "RS": [44.2215032, 20.78958334],
    "ST": [0.44391445, 6.72429658],
    "SR": [4.13055413, -55.9123457],
    "SK": [48.70547528, 19.47905218],
    "SI": [46.11554772, 14.80444238],
    "SE": [62.77966519, 16.74558049],
    "SZ": [26.55843045, 31.4819369],
    "SX": [18.05081728, -63.05713363],
    "SC": [4.66099094, 55.47603279],
    "SY": [35.02547389, 38.50788204],
    "TC": [21.83047572, -71.97387881],
    "TD": [15.33333758, 18.64492513],
    "TG": [8.52531356, 0.96232845],
    "TH": [15.11815794, 101.0028813],
    "TJ": [38.5304539, 71.01362631],
    "TM": [39.11554137, 59.37100021],
    "TL": [8.82889162, 125.84438982],
    "TO": [20.42843174, -174.80987341],
    "TT": [10.45733408, -61.26567923],
    "TN": [34.11956246, 9.55288359],
    "TR": [39.0616029, 35.16895346],
    "TW": [23.7539928, 120.95427281],
    "TZ": [6.27565408, 34.81309981],
    "UG": [1.27469299, 32.36907971],
    "UA": [48.99656673, 31.38326469],
    "UY": [32.79951534, -56.01807053],
    "US": [45.6795472, -112.4616737],
    "UZ": [41.75554225, 63.14001528],
    "VA": [41.90174985, 12.43387177],
    "VC": [13.22472269, -61.20129695],
    "VE": [7.12422421, -66.18184123],
    "VG": [18.52585755, -64.47146992],
    "VI": [17.95500624, -64.80301538],
    "VN": [16.6460167, 106.29914698],
    "VU": [16.22640909, 167.68644636],
    "WF": [13.88737039, -177.34834825],
    "WS": [13.75324346, -172.16485064],
    "YE": [15.90928005, 47.58676189],
    "ZA": [29.00034095, 25.08390093],
    "ZM": [13.45824152, 27.77475946],
    "ZW": [19.00420419, 29.8514412]
  };

  function validInvolvement(text) {
    var validInvolvements = [
      'Standard',
      'Medium',
      'High',
      'Past engagement'
    ]
    return validInvolvements.includes(text);
  }

  function involvedCountries() {
    var countries = [];
    $('.country').each(function(index, country) {
      var $country = $(country);
      var iso2 = $country.attr('id');
      var name = $country.find('h2').first().text();
      var $involvement = $country.find('.country_involvement');
      if($involvement.length > 0 && validInvolvement($involvement.first().data('involvement'))) {
        countries.push({name: name, iso2: iso2});
      }
    });
    return countries;
  };

  function countryMarkers() {
    var countries = involvedCountries();
    return countries.map(function(country) {
      return {
        latLng: countryCentroids[country.iso2],
        name: country.name
      }
    });
  };

  /**
   * @description determine if an array contains one or more items from another array.
   * @param {array} haystack the array to search.
   * @param {array} arr the array providing items to check for in the haystack.
   * @return {boolean} true|false if haystack contains at least one item from arr.
   */
  var findOne = function (haystack, arr) {
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
  };

  function commitmentLevel(commitmentsText) {
    var commitments = commitmentsText.split(', ');
    var centralCommitments = [
      '2016 ACS: Central register',
      'OGP: Central register',
      'EU: All sectors'
    ];
    var allSectorCommitments = [
      'EU: All sectors',
      '2016 ACS: All sectors',
      'OGP: All sectors'
    ];
    var publicCommitments = [
      '2016 ACS: Public register',
      'OGP: Public register'
    ];
    var otherCommitments = [
      'EITI',
      'Other',
      'BOLG',
      'FSI'
    ];

    var score = 0;
    if(findOne(commitments, centralCommitments)) {
      score += 1;
    }
    if(findOne(commitments, allSectorCommitments)) {
      score += 1;
    }
    if(findOne(commitments, publicCommitments)) {
      score += 1;
    }

    // We map to a 0-1-2 scale, where you have to make 2/3 of central, public
    // and all sectors to get 1, or all three to get 2.
    var level = 0;
    if(score == 2) {
      level = 1;
    }
    if(score == 3) {
      level = 2;
    }
    return level;
  }

  function countryCommitmentLevels() {
    var levels = {};
    $('.country').each(function(index, country) {
      var $country = $(country);
      var iso2 = $country.attr('id');
      var $commitments = $country.find('.country_commitments');
      if($commitments.length > 0) {
        levels[iso2] = commitmentLevel($commitments.data('commitments'));
      }
    });
    return levels;
  }

  $('.world-map').vectorMap({
    map: 'world_merc',
    zoomOnScroll: false,
    panOnDrag: false,
    backgroundColor: '#fefefe',
    regionStyle: {
      initial: {
        fill: '#DCDCDC',
        stroke: '#fefefe',
        'stroke-width': 1
      },
    },
    markerStyle: {
      initial: {
        fill: '#B20F47',
        stroke: '#fefefe',
        'stroke-width': 1
      }
    },
    markers: countryMarkers(),
    series: {
      regions: [
        {
          values: countryCommitmentLevels(),
          attribute: 'fill',
          scale: ['#DCDCDC', '#3596f2', '#31408c'],
          min: 0,
          max: 2
        }
      ],
    }
  });
});
