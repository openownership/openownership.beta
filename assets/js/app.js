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

// 3. Map page
// --------------------

$(function(){
  // Jquery object for the map container
  var $map = $('.world-map');

  // Don't run on pages without a map
  if($map.length == 0) {
    return
  }

  // Object for the jvectormap map object
  var map;
  // Jquery object for the country dom nodes where our initial data lives
  var $countries = $('.country');
  // Object for our parsed country data, will be indexed by ISO2 code
  var countries = {};
  var $allCountriesButton = $('.see-all-countries-button');
  var $filters = $('.map-filters select');

  // Parse the countries data from the given dom nodes (as a JQuery selection)
  function parseCountries($countries) {
    var parsed = {};

    $countries.each(function(index, country) {
      var $country = $(country);
      var data = $country.data();
      var $tooltip = $($country.find('.callout').first()[0].outerHTML)
      $tooltip.removeClass('large shadow');
      $tooltip.find('.links').remove();
      $tooltip.find('.commitments').remove();
      $tooltip.find('.news').remove();
      $tooltip.find('.country-footer').remove();
      parsed[data.iso2] = Object.assign(data, {tooltipContent: $tooltip[0].outerHTML});
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

  function filterCountries(filter) {
    // Work out what we're showing
    var $filteredCountries = $countries;
    if(filter) {
      $filteredCountries = $filteredCountries.filter(filter);
    }
    var filteredCountries = {};
    $filteredCountries.each(function(index, country) {
      var iso2 = $(country).data('iso2');
      filteredCountries[iso2] = countries[iso2];
    });

    // Clear the map and grid out
    destroyTooltips(countries);
    map.series.regions[0].setValues(baselineCountryCommitmentLevels());
    map.removeAllMarkers();
    $countries.hide();

    // Rebuild it
    map.series.regions[0].setValues(countryCommitmentLevels(filteredCountries));
    map.addMarkers(countryMarkers(filteredCountries));
    buildTooltips(filteredCountries);
    $filteredCountries.show();
  }

  function indexMarkers() {
    indexed = {};
    // Markers are not indexed by country code, so build our own index of
    // iso code -> dom node for ease of initialising tooltips
    $.each(map.markers, function(index, marker) {
      indexed[marker.config.iso2] = marker.element.shape.node;
    });
    return indexed;
  }

  function destroyTooltips() {
    $.each(countries, function(index, country) {
      if(country.tooltip) {
        country.tooltip.destroy();
      }
    });
  }

  function buildTooltips(countries) {
    markers = indexMarkers();
    $.each(countries, function(index, country) {
      var region = map.regions[country.iso2];
      var marker = markers[country.iso2];
      var targets = []
      if(marker) {
        targets.push(marker)
      }
      if(region) {
        // In older jvectormap versions, the region held a direct reference to
        // DOM node we could attach an event to, but now it wraps that in an
        // invisible path which has a margin, to allow better UX, which isn't
        // stored in the region, so we have to find the DOM node ourself
        targets.push($('.jvectormap-region[data-code="' + country.iso2 + '"]')[0]);
      }
      if(targets.length === 0) {
        return;
      }
      options = {
        theme: 'light',
        content: country.tooltipContent,
        allowHTML: true,
        triggerTarget: targets,
        touch: false,
        appendTo: function() { return document.body; },
        delay: 0,
        duration: 0,
        maxWidth: 450
      };
      // We put the tooltip on the marker if we have both, so that it always
      // appears in the same place and we don't get duplicates
      country.tooltip = tippy(targets[0], options);
    });
  }

  function filterValues() {
    var values = {};
    $filters.each(function(index, select) {
      var value = $(select).val();
      if(value !== '') {
        values[$(select).attr('name')] = value;
      }
    });
    return values;
  }

  function filterBySelections() {
    var values = Object.values(filterValues());
    if(values.length === 0) {
      filterCountries();
    } else {
      // We AND together multiple filters so join them into one string:
      // https://api.jquery.com/multiple-attribute-selector/
      var filters = values.map(function(value) {
        return '[data-'+ value + '=true]';
      }).join('');
      filterCountries(filters);
    }
  }

  function filterByCountry(iso2) {
    filterCountries('[data-iso2="' + iso2 + '"]');
  }

  function selectCountry(iso2) {
    if(countries[iso2]) {
      window.location.hash = iso2;
      $filters.prop('disabled', 'disabled');
      filterByCountry(iso2);
      $allCountriesButton.show();
    }
  }

  function clearSelectedCountry() {
    window.location.hash = '#map';
    $filters.prop('disabled', false);
    $allCountriesButton.hide();
    filterBySelections();
  }

  function regionClick(e, iso2) {
    selectCountry(iso2);
  }

  function markerClick(e, index) {
    var iso2 = map.markers[index].config.iso2;
    selectCountry(iso2);
  }

  function setFiltersFromURL() {
    var urlParams = new URLSearchParams(location.search.substr(1));
    var commitment = urlParams.get('commitment');
    var register = urlParams.get('register');
    if(commitment) {
      $filters
        .filter('[name="commitment"]')
        .find('option[value="' + commitment + '"]')
        .prop('selected', true);
    }
    if(register) {
      $filters
        .filter('[name="register"]')
        .find('option[value="' + register + '"]')
        .prop('selected', true);
    }
    if(commitment || register) {
      $filters.trigger('change');
    }
  }

  function saveFiltersToURL() {
    var values = filterValues();
    var queryString = new URLSearchParams(values);
    var url = location.pathname;
    if(Object.keys(values).length > 0) {
      url = url + '?' + queryString.toString();
    }
    url = url + location.hash;
    history.replaceState({}, "", url)
  }

  // Parse the data from the DOM
  countries = parseCountries($countries);

  // Initialise the jvector map
  $map.vectorMap({
    map: 'world_merc',
    zoomOnScroll: false,
    panOnDrag: true,
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
    onRegionClick: regionClick,
    onMarkerClick: markerClick
  });

  map = $map.vectorMap('get', 'mapObject');

  // Wire up tooltips
  buildTooltips(countries);

  // Wire up filters to hide/show map countries and cards
  $filters.on('change', function() {
    filterBySelections();
    saveFiltersToURL();
  });

  // Hide the see all countries button and wire up clicks on it for future use
  $allCountriesButton.click(function(e) {
    e.preventDefault();
    clearSelectedCountry();
    return false;
  });

  // Wire up clicks on the map to clear selected countries
  $map.find('svg').on('click', function(e) {
    // We only want clicks on the svg, not on things (e.g. paths) inside it, as
    // those will be regions/markers whose clicks are handled separately
    if(e.target === e.currentTarget) {
      clearSelectedCountry();
    }
  });

  // Add a 'back-to-map' link to each country
  $countries.each(function(index, country) {
    $(country)
      .find('.country-footer')
      .append('<a class="button primary" href="#map">Back to map</a>')
  });

  // Have we got an initial selection or filters? We process both, even if we're
  // going to overwrite filters with a hash, so that we can set up the map for
  // if/when the user removes the country selection
  if(location.search) {
    setFiltersFromURL();
  }

  if(location.hash) {
    var iso2 = location.hash.substr(1);
    selectCountry(iso2);
  }
});

// 4. Resources page
// TODO - this is copy-pasted from the map filters
// with some improvements - make it generic and use the same code for both
// filters if we do any more work on this
$(function(){
  var $resources = $('.resource');
  if($resources.length == 0) {
    return;
  }

  var $filters = $('.resource-filters select');

  function selectedFilters() {
    var values = {};
    $filters.each(function(index, select) {
      var value = $(select).val();
      if(value !== '') {
        fType = $(select).attr('name');
        values[fType] = value;
      }
    });
    return values;
  }

  function filterBySelections() {
    var selected = selectedFilters();
    if(Object.values(selected).length === 0) {
      filterResources();
    } else {
      filterResources(selected);
    }
  }

  function filterResources(filter) {
    // Work out what we're showing
    var $filteredResources = $resources;
    if(filter) {
      // We AND together multiple filters so join them into one string:
      // https://api.jquery.com/multiple-attribute-selector/
      var filters = '';
      for (var filterType in filter) {
        filters = filters + '.resource-' + filterType + '-' + filter[filterType];
      }
      console.log('Filtering resources: ' + filters);
      $filteredResources = $filteredResources.filter(filters);
    }
    $resources.hide();
    $filteredResources.show();
  }

  function setFiltersFromURL() {
    var urlParams = new URLSearchParams(location.search.substr(1));
    urlParams.forEach(function(value, key) {
      $filters
        .filter('[name="' + key + '"]')
        .find('option[value="' + value + '"]')
        .prop('selected', true)
        .trigger('change');
    });

    // If a topic has been selected, display notice
    var selectedTopic = $('#topics-filter');
    if (selectedTopic.val() != "") {
      $('#topics-filter-selected').text(selectedTopic.find('option[value="' + selectedTopic.val() + '"]').text());
      $('#topics-filter-selected-notice').removeClass('hide').show();
    }
    
  }

  function saveFiltersToURL() {
    var values = selectedFilters();
    var queryString = new URLSearchParams(values);
    var url = location.pathname;
    if(Object.keys(values).length > 0) {
      url = url + '?' + queryString.toString();
    }
    url = url + location.hash;
    history.replaceState({}, "", url)
  }

  function toggleNoDataMessages() {
    $('.no-resources-message').hide();
    if($('.resources .resource:visible').length === 0) {
      $('.resources .no-resources-message').show();
    }
  }

  // Wire up filters to hide/show map countries and cards
  $filters.on('change', function() {
    filterBySelections();
    toggleNoDataMessages();
    saveFiltersToURL();
  });

  // Have we got an initial selection or filters? We process both, even if we're
  // going to overwrite filters with a hash, so that we can set up the map for
  // if/when the user removes the country selection
  if(location.search) {
    setFiltersFromURL();
  }
});
