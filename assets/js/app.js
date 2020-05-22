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
  // Jquery object for the map container
  var $map = $('.world-map');
  // Object for the jvectormap map object
  var map;
  // Jquery object for the country dom nodes where our initial data lives
  var $countries = $('.country');
  // Object for our parsed country data, will be indexed by ISO2 code
  var countries = {};
  // Dom nodes for markers, so that we can attach tooltips to them
  var markerNodes = {};

  // Parse the countries data from the given dom nodes (as a JQuery selection)
  function parseCountries($countries) {
    var parsed = {};

    $countries.each(function(index, country) {
      var $country = $(country);
      var data = $country.data();
      var tooltip = $($country.find('.callout').first()[0].outerHTML)
        .removeClass('large shadow')[0].outerHTML;
      parsed[data.iso2] = Object.assign(data, {tooltip: tooltip});
    });

    return parsed;
  };

  // Build jvector map marker data for every country given
  function countryMarkers(countries) {
    return Object.keys(countries)
      .filter(function(iso2) { return countries[iso2].involved })
      .map(function(iso2) {
        return {
          latLng: [countries[iso2].capitalLat, countries[iso2].capitalLon],
          name: countries[iso2].name,
          iso2: iso2
        };
      });
  };



  // Build jvector map series data for each country to control region colouring
  // based on commitment level
  function countryCommitmentLevels(countries) {
    levels = {};
    $.each(countries, function(index, country) {
      levels[country.iso2] = country.commitmentLevel;
    });
    return levels;
  };

  // Build baseline jvector map series data for each country, i.e. to set
  // everything to zero
  function baselineCountryCommitmentLevels() {
    levels = {};
    $.each(countries, function(index, country) {
      levels[country.iso2] = 0;
    });
    return levels;
  };

  // Parse the data from the DOM
  countries = parseCountries($countries);

  // Initialise the jvector map
  $map.vectorMap({
    map: 'world_merc',
    zoomOnScroll: false,
    panOnDrag: false,
    backgroundColor: '#fefefe',
    regionStyle: {
      initial: {
        fill: '#DCDCDC',
        stroke: '#fefefe',
        'stroke-width': 1
      }
    },
    markerStyle: {
      initial: {
        fill: '#B20F47',
        stroke: '#fefefe',
        'stroke-width': 1
      }
    },
    markers: countryMarkers(countries),
    series: {
      regions: [
        {
          values: countryCommitmentLevels(countries),
          attribute: 'fill',
          scale: ['#DCDCDC', '#3596f2', '#31408c'],
          min: 0,
          max: 2
        }
      ],
    },
    // Disable jvectormap tooltips, we'll use our own library for them
    onRegionTipShow: function(e) { e.preventDefault(); },
    onMarkerTipShow: function(e) { e.preventDefault(); },
  });

  map = $map.vectorMap('get', 'mapObject');

  // Markers are not indexed by country code, so build our own index of
  // iso code -> dom node for ease of initialising tooltips
  $.each(map.markers, function(index, marker) {
    markerNodes[marker.config.iso2] = marker.element.shape.node;
  });

  $.each(countries, function(index, country) {
    var region = map.regions[country.iso2];
    var markerNode = markerNodes[country.iso2];
    if(region) {
      tippy(region.element.shape.node, {
        theme: 'light',
        content: country.tooltip,
        allowHTML: true
      });
    }
    if(markerNode) {
      tippy(markerNode, {
        theme: 'light',
        content: country.tooltip,
        allowHTML: true
      });
    }
  });

  // Wire up filters to hide/show map countries and cards
  $('.map-filters select').on('change', function() {
    var $select = $(this);
    var filter = $select.val();
    if (filter === '') {
      $countries.show();

      map.series.regions[0].setValues(countryCommitmentLevels(countries));
      map.series.regions[0].setValues(countryCommitmentLevels(countries));

      map.removeAllMarkers();
      map.addMarkers(countryMarkers(countries));
    } else {
      // Get countries that match the filter
      var $filteredCountries = $countries.filter('[data-'+ filter + '=true]');
      var filteredCountries = {};
      $filteredCountries.each(function(index, country) {
        var iso2 = $(country).data('iso2');
        filteredCountries[iso2] = countries[iso2];
      });

      // Update map with regions and markers for those countries
      map.series.regions[0].setValues(baselineCountryCommitmentLevels());
      map.series.regions[0].setValues(countryCommitmentLevels(filteredCountries));

      map.removeAllMarkers();
      map.addMarkers(countryMarkers(filteredCountries));

      $countries.hide();
      $filteredCountries.show();
    }
  });
});
