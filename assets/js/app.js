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
      var location = $('#' + country.iso2)
        .find('.country_involvement')
        .first()
        .data('location')
        .split(',');
      return {
        latLng: location,
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
