/*********************************************************************************
 * WEB222 – Assignment 05
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
 * this assignment has been copied manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Name: Nisrein Hinnawi   Student ID: 130223183    Date: 7/8/2020
 *
 ********************************************************************************/

const cities = [
  {
    city: 'Toronto',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '3934421',
    iso2: 'CA',
    capital: 'admin',
    lat: '43.666667',
    lng: '-79.416667',
    population: '5213000'
  },
  {
    city: 'Montr\u00e9al',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '2356556',
    iso2: 'CA',
    capital: '',
    lat: '45.5',
    lng: '-73.583333',
    population: '3678000'
  },
  {
    city: 'Vancouver',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '603502',
    iso2: 'CA',
    capital: '',
    lat: '49.25',
    lng: '-123.133333',
    population: '2313328'
  },
  {
    city: 'Ottawa',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '812129',
    iso2: 'CA',
    capital: 'primary',
    lat: '45.416667',
    lng: '-75.7',
    population: '1145000'
  },
  {
    city: 'Calgary',
    admin: 'Alberta',
    country: 'Canada',
    population_proper: '915322',
    iso2: 'CA',
    capital: '',
    lat: '51.083333',
    lng: '-114.083333',
    population: '1110000'
  },
  {
    city: 'Edmonton',
    admin: 'Alberta',
    country: 'Canada',
    population_proper: '712391',
    iso2: 'CA',
    capital: 'admin',
    lat: '53.55',
    lng: '-113.5',
    population: '1058000'
  },
  {
    city: 'Hamilton',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '519949',
    iso2: 'CA',
    capital: '',
    lat: '43.256101',
    lng: '-79.857484',
    population: '721053'
  },
  {
    city: 'Winnipeg',
    admin: 'Manitoba',
    country: 'Canada',
    population_proper: '575313',
    iso2: 'CA',
    capital: 'admin',
    lat: '49.883333',
    lng: '-97.166667',
    population: '632063'
  },
  {
    city: 'Qu\u00e9bec',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '528595',
    iso2: 'CA',
    capital: 'admin',
    lat: '46.8',
    lng: '-71.25',
    population: '624177'
  },
  {
    city: 'Oshawa',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '247989',
    iso2: 'CA',
    capital: '',
    lat: '43.9',
    lng: '-78.866667',
    population: '450963'
  },
  {
    city: 'Kitchener',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '409112',
    iso2: 'CA',
    capital: '',
    lat: '43.446976',
    lng: '-80.472484',
    population: '417001'
  },
  {
    city: 'Halifax',
    admin: 'Nova Scotia',
    country: 'Canada',
    population_proper: '222874',
    iso2: 'CA',
    capital: 'admin',
    lat: '44.65',
    lng: '-63.6',
    population: '359111'
  },
  {
    city: 'London',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '335035',
    iso2: 'CA',
    capital: '',
    lat: '42.983333',
    lng: '-81.25',
    population: '346765'
  },
  {
    city: 'Windsor',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '210891',
    iso2: 'CA',
    capital: '',
    lat: '42.301649',
    lng: '-83.030744',
    population: '319246'
  },
  {
    city: 'Victoria',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '251358',
    iso2: 'CA',
    capital: 'admin',
    lat: '48.450234',
    lng: '-123.343529',
    population: '289625'
  },
  {
    city: 'Saskatoon',
    admin: 'Saskatchewan',
    country: 'Canada',
    population_proper: '189193',
    iso2: 'CA',
    capital: '',
    lat: '52.133333',
    lng: '-106.666667',
    population: '198958'
  },
  {
    city: 'Barrie',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '119732',
    iso2: 'CA',
    capital: '',
    lat: '44.383333',
    lng: '-79.7',
    population: '182041'
  },
  {
    city: 'Regina',
    admin: 'Saskatchewan',
    country: 'Canada',
    population_proper: '176183',
    iso2: 'CA',
    capital: 'admin',
    lat: '50.45',
    lng: '-104.616667',
    population: '176183'
  },
  {
    city: 'Sudbury',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '80507',
    iso2: 'CA',
    capital: '',
    lat: '46.5',
    lng: '-80.966667',
    population: '157857'
  },
  {
    city: 'Abbotsford',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '151683',
    iso2: 'CA',
    capital: '',
    lat: '49.05',
    lng: '-122.3',
    population: '151683'
  },
  {
    city: 'Sarnia',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '82998',
    iso2: 'CA',
    capital: '',
    lat: '42.978417',
    lng: '-82.388177',
    population: '144172'
  },
  {
    city: 'Sherbrooke',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '129447',
    iso2: 'CA',
    capital: '',
    lat: '45.4',
    lng: '-71.9',
    population: '139652'
  },
  {
    city: 'Saint John\u2019s',
    admin: 'Newfoundland and Labrador',
    country: 'Canada',
    population_proper: '99182',
    iso2: 'CA',
    capital: 'admin',
    lat: '47.55',
    lng: '-52.666667',
    population: '131469'
  },
  {
    city: 'Kelowna',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '95306',
    iso2: 'CA',
    capital: '',
    lat: '49.9',
    lng: '-119.483333',
    population: '125109'
  },
  {
    city: 'Trois-Rivi\u00e8res',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '116409',
    iso2: 'CA',
    capital: '',
    lat: '46.35',
    lng: '-72.55',
    population: '119693'
  },
  {
    city: 'Kingston',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '102400',
    iso2: 'CA',
    capital: '',
    lat: '44.3',
    lng: '-76.566667',
    population: '114195'
  },
  {
    city: 'Thunder Bay',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '97374',
    iso2: 'CA',
    capital: '',
    lat: '48.4',
    lng: '-89.233333',
    population: '99334'
  },
  {
    city: 'Moncton',
    admin: 'New Brunswick',
    country: 'Canada',
    population_proper: '87467',
    iso2: 'CA',
    capital: '',
    lat: '46.09652',
    lng: '-64.79757',
    population: '90635'
  },
  {
    city: 'Saint John',
    admin: 'New Brunswick',
    country: 'Canada',
    population_proper: '54449',
    iso2: 'CA',
    capital: '',
    lat: '45.230798',
    lng: '-66.095316',
    population: '87857'
  },
  {
    city: 'Nanaimo',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '80491',
    iso2: 'CA',
    capital: '',
    lat: '49.15',
    lng: '-123.916667',
    population: '84905'
  },
  {
    city: 'Peterborough',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '75877',
    iso2: 'CA',
    capital: '',
    lat: '44.3',
    lng: '-78.333333',
    population: '83627'
  },
  {
    city: 'Saint-J\u00e9r\u00f4me',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '54948',
    iso2: 'CA',
    capital: '',
    lat: '45.766667',
    lng: '-74.0',
    population: '78439'
  },
  {
    city: 'Red Deer',
    admin: 'Alberta',
    country: 'Canada',
    population_proper: '73593',
    iso2: 'CA',
    capital: '',
    lat: '52.266667',
    lng: '-113.8',
    population: '74857'
  },
  {
    city: 'Lethbridge',
    admin: 'Alberta',
    country: 'Canada',
    population_proper: '58571',
    iso2: 'CA',
    capital: '',
    lat: '49.7',
    lng: '-112.833333',
    population: '70617'
  },
  {
    city: 'Kamloops',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '68628',
    iso2: 'CA',
    capital: '',
    lat: '50.666667',
    lng: '-120.333333',
    population: '68714'
  },
  {
    city: 'Prince George',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '62707',
    iso2: 'CA',
    capital: '',
    lat: '53.916667',
    lng: '-122.766667',
    population: '65558'
  },
  {
    city: 'Medicine Hat',
    admin: 'Alberta',
    country: 'Canada',
    population_proper: '53626',
    iso2: 'CA',
    capital: '',
    lat: '50.033333',
    lng: '-110.683333',
    population: '63138'
  },
  {
    city: 'Drummondville',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '54123',
    iso2: 'CA',
    capital: '',
    lat: '45.883333',
    lng: '-72.483333',
    population: '59489'
  },
  {
    city: 'Chicoutimi',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '53940',
    iso2: 'CA',
    capital: '',
    lat: '48.45',
    lng: '-71.066667',
    population: '53940'
  },
  {
    city: 'Fredericton',
    admin: 'New Brunswick',
    country: 'Canada',
    population_proper: '36713',
    iso2: 'CA',
    capital: 'admin',
    lat: '45.910648',
    lng: '-66.658649',
    population: '52337'
  },
  {
    city: 'Chilliwack',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '51942',
    iso2: 'CA',
    capital: '',
    lat: '49.166667',
    lng: '-121.95',
    population: '51942'
  },
  {
    city: 'North Bay',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '41807',
    iso2: 'CA',
    capital: '',
    lat: '46.3',
    lng: '-79.45',
    population: '50170'
  },
  {
    city: 'Shawinigan-Sud',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '34342',
    iso2: 'CA',
    capital: '',
    lat: '46.528557',
    lng: '-72.751453',
    population: '49161'
  },
  {
    city: 'Cornwall',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '46382',
    iso2: 'CA',
    capital: '',
    lat: '45.016667',
    lng: '-74.733333',
    population: '48821'
  },
  {
    city: 'Joliette',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '34772',
    iso2: 'CA',
    capital: '',
    lat: '46.034',
    lng: '-73.441',
    population: '45361'
  },
  {
    city: 'Belleville',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '43990',
    iso2: 'CA',
    capital: '',
    lat: '44.166667',
    lng: '-77.383333',
    population: '43990'
  },
  {
    city: 'Charlottetown',
    admin: 'Prince Edward Island',
    country: 'Canada',
    population_proper: '31293',
    iso2: 'CA',
    capital: 'admin',
    lat: '46.238225',
    lng: '-63.139481',
    population: '42402'
  },
  {
    city: 'Victoriaville',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '34426',
    iso2: 'CA',
    capital: '',
    lat: '46.063106',
    lng: '-71.958802',
    population: '41500'
  },
  {
    city: 'Grande Prairie',
    admin: 'Alberta',
    country: 'Canada',
    population_proper: '40845',
    iso2: 'CA',
    capital: '',
    lat: '55.166667',
    lng: '-118.8',
    population: '41462'
  },
  {
    city: 'Penticton',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '30349',
    iso2: 'CA',
    capital: '',
    lat: '49.5',
    lng: '-119.583333',
    population: '37721'
  },
  {
    city: 'Sydney',
    admin: 'Nova Scotia',
    country: 'Canada',
    population_proper: '37538',
    iso2: 'CA',
    capital: '',
    lat: '46.15',
    lng: '-60.166667',
    population: '37538'
  },
  {
    city: 'Orillia',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '30178',
    iso2: 'CA',
    capital: '',
    lat: '44.6',
    lng: '-79.416667',
    population: '37483'
  },
  {
    city: 'Rimouski',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '35584',
    iso2: 'CA',
    capital: '',
    lat: '48.433333',
    lng: '-68.516667',
    population: '35584'
  },
  {
    city: 'Timmins',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '32901',
    iso2: 'CA',
    capital: '',
    lat: '48.466667',
    lng: '-81.333333',
    population: '34974'
  },
  {
    city: 'Prince Albert',
    admin: 'Saskatchewan',
    country: 'Canada',
    population_proper: '24678',
    iso2: 'CA',
    capital: '',
    lat: '53.2',
    lng: '-105.75',
    population: '34609'
  },
  {
    city: 'Campbell River',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '26453',
    iso2: 'CA',
    capital: '',
    lat: '50.016667',
    lng: '-125.25',
    population: '33430'
  },
  {
    city: 'Courtenay',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '25099',
    iso2: 'CA',
    capital: '',
    lat: '49.683333',
    lng: '-125.0',
    population: '32793'
  },
  {
    city: 'Orangeville',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '28984',
    iso2: 'CA',
    capital: '',
    lat: '43.916366',
    lng: '-80.096671',
    population: '32640'
  },
  {
    city: 'Moose Jaw',
    admin: 'Saskatchewan',
    country: 'Canada',
    population_proper: '30707',
    iso2: 'CA',
    capital: '',
    lat: '50.4',
    lng: '-105.55',
    population: '32166'
  },
  {
    city: 'Brandon',
    admin: 'Manitoba',
    country: 'Canada',
    population_proper: '26234',
    iso2: 'CA',
    capital: '',
    lat: '49.833333',
    lng: '-99.95',
    population: '28418'
  },
  {
    city: 'Brockville',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '23886',
    iso2: 'CA',
    capital: '',
    lat: '44.594958',
    lng: '-75.682133',
    population: '26458'
  },
  {
    city: 'Saint-Georges',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '26149',
    iso2: 'CA',
    capital: '',
    lat: '46.116667',
    lng: '-70.683333',
    population: '26149'
  },
  {
    city: 'Sept-\u00celes',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '25686',
    iso2: 'CA',
    capital: '',
    lat: '50.2',
    lng: '-66.383333',
    population: '25686'
  },
  {
    city: 'Rouyn-Noranda',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '24023',
    iso2: 'CA',
    capital: '',
    lat: '48.25',
    lng: '-79.016667',
    population: '24602'
  },
  {
    city: 'Whitehorse',
    admin: 'Yukon',
    country: 'Canada',
    population_proper: '23272',
    iso2: 'CA',
    capital: 'admin',
    lat: '60.716667',
    lng: '-135.05',
    population: '23276'
  },
  {
    city: 'Owen Sound',
    admin: 'Ontario',
    country: 'Canada',
    population_proper: '22625',
    iso2: 'CA',
    capital: '',
    lat: '44.566667',
    lng: '-80.85',
    population: '22625'
  },
  {
    city: 'Fort McMurray',
    admin: 'Alberta',
    country: 'Canada',
    population_proper: '21863',
    iso2: 'CA',
    capital: '',
    lat: '56.733333',
    lng: '-111.383333',
    population: '21863'
  },
  {
    city: 'Corner Brook',
    admin: 'Newfoundland and Labrador',
    country: 'Canada',
    population_proper: '18693',
    iso2: 'CA',
    capital: '',
    lat: '48.95',
    lng: '-57.933333',
    population: '20791'
  },
  {
    city: 'Val-d\u2019Or',
    admin: 'Qu\u00e9bec',
    country: 'Canada',
    population_proper: '20625',
    iso2: 'CA',
    capital: '',
    lat: '48.116667',
    lng: '-77.766667',
    population: '20625'
  },
  {
    city: 'New Glasgow',
    admin: 'Nova Scotia',
    country: 'Canada',
    population_proper: '19445',
    iso2: 'CA',
    capital: '',
    lat: '45.583333',
    lng: '-62.633333',
    population: '20322'
  },
  {
    city: 'Terrace',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '10101',
    iso2: 'CA',
    capital: '',
    lat: '54.5',
    lng: '-128.583333',
    population: '19443'
  },
  {
    city: 'North Battleford',
    admin: 'Saskatchewan',
    country: 'Canada',
    population_proper: '12003',
    iso2: 'CA',
    capital: '',
    lat: '52.766667',
    lng: '-108.283333',
    population: '19440'
  },
  {
    city: 'Yellowknife',
    admin: 'Northwest Territories',
    country: 'Canada',
    population_proper: '18083',
    iso2: 'CA',
    capital: 'admin',
    lat: '62.45',
    lng: '-114.35',
    population: '19234'
  },
  {
    city: 'Fort Saint John',
    admin: 'British Columbia',
    country: 'Canada',
    population_proper: '17402',
    iso2: 'CA',
    capital: '',
    lat: '56.25',
    lng: '-120.833333',
    population: '18776'
  }
];
