# Nigerian Phone Number Validator (JS)
 
[![HitCount](http://hits.dwyl.io/djunehor/js_validate_nigerian_phone.svg)](http://hits.dwyl.io/djunehor/js_validate_nigerian_phone)
[![CircleCI](https://circleci.com/gh/djunehor/js_validate_nigerian_phone.svg?style=svg)](https://circleci.com/gh/djunehor/js_validate_nigerian_phone)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/djunehor/js_validate_nigerian_phone)
[![GitHub license](https://img.shields.io/github/license/djunehor/js_validate_nigerian_phone.svg)](https://github.com/djunehor/js_validate_nigerian_phone/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/djunehor/js_validate_nigerian_phone.svg)](https://GitHub.com/djunehor/js_validate_nigerian_phone/issues/)
[![Only 32 Kb](https://badge-size.herokuapp.com/djunehor/js_validate_nigerian_phone/master/build/index.js)](https://github.com/djunehor/js_validate_nigerian_phone/blob/master/build/index.js)


#### Issues and pull requests welcome.
## NOTE: The network resolution function can't be accurate because Nigeria implemented [Mobile Number Portability](https://en.wikipedia.org/wiki/Mobile_number_portability) in 2013, so the number prefix cannot be reliably used to determine operator anymore.
A JS package to validate and format a Nigerian phone number as well as deduce the network provider or area code.

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Contribute](#contribute)
* [Run Tests](#tests)

## Installation
You will need [yarn](https://yarnpkg.com/lang/en/docs/install/) and [npm](https://www.npmjs.com/get-npm).

Install using npm: `npm install validate_nigerian_phone`
Install using yarn: `yarn add validate_nigerian_phone`

## Usage

```js
const NigerianPhone = require('validate_nigerian_phone');
const phone = new NigerianPhone('+2348135087966');

// Check if is valid
phone.isValid(); // true

// Get formatted
phone.formatted(); // 08135087966

// Get Network
phone.getNetwork(); // mtn

// Check if is mtn
phone.isMtn(); // True


// Get network from phone number prefix e.g
phone.getNetworkByPrefix('0703'); // mtn

```

## Features
### Currently implemented
* isValid
* formatted
* getNetwork
* getAreaCode
* isMtn
* isGlo
* isAirtel
* is9mobile
* isSmile
* isMultilinks
* isVisafone
* isNtel
* isStarcomms
* isZoom
* getPrefixesByNetwork
* getNetworkByPrefix
* getAreaCodeByName

### Tests


## Contribute
Check out the issues on GitHub and/or make a pull request to contribute!
