 Nigerian Phone Number Validator (JS)
[![HitCount](http://hits.dwyl.io/djunehor/js_validate_nigerian_phone.svg)](http://hits.dwyl.io/djunehor/js_validate_nigerian_phone)

#### Issues and pull requests welcome.

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
