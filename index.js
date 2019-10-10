/*
    Package Name: Nigerian Phone Number Validator
    Description: Class to validate a Nigerian phone number as well as attempt to deduce the network.
    Version: 1.0
    Author: Zacchaeus (Djunehor) Bolaji
    Author URI: https://github.com/djunehor
    */
class NigerianPhone {

    allPrefixes = {
        'mtn': [
            '0803',
            '0703',
            '0903',
            '0806',
            '0706',
            '0813',
            '0814',
            '0816',
            '0810',
            '0906',
            '07025',
            '07026',
            '0704'
        ],
        'glo': ['0805', '0705', '0905', '0807', '0815', '0905', '0811'],
        'airtel': ['0802', '0902', '0701', '0808', '0708', '0812', '0901', '0907'],
        '9mobile': ['0809', '0909', '0817', '0818', '0908'],
        'ntel': ['0804'],
        'smile': ['0702'],
        'multilinks': ['0709', '07027'],
        'visafone': ['07025', '07026', '0704'],
        'starcomms': ['07028', '07029', '0819'],
        'zoom': ['0707'],
    }

    allAreaCodes = {
        'Lagos': '01',
        'Ibadan': '02',
        'Abuja': '09',
        'Ado-Ekiti': '30',
        'Ilorin': '31',
        'New Bussa': '33',
        'Akure': '34',
        'Oshogbo': '35',
        'Ile-Ife': '36',
        'Ijebu-Ode': '37',
        'Oyo': '38',
        'Abeokuta': '39',
        'Wukari': '41',
        'Enugu': '42',
        'Abakaliki': '43',
        'Makurdi': '44',
        'Ogoja': '45',
        'Onitsha': '46',
        'Lafia': '47',
        'Awka': '48',
        'Ikare': '50',
        'Owo': '51',
        'Benin City': '52',
        'Warri': '53',
        'Sapele': '54',
        'Agbor': '55',
        'Asaba': '56',
        'Auchi': '57',
        'Lokoja': '58',
        'Okitipupa': '59',
        'Sokoto': '60',
        'Kafanchan': '61',
        'Kaduna': '62',
        'Gusau': '63',
        'Kano': '64',
        'Katsina': '65',
        'Minna': '66',
        'Kontagora': '67',
        'Birnin-Kebbi': '68',
        'Zaria': '69',
        'Pankshin': '73',
        'Azare': '71',
        'Gombe': '72',
        'Jos': '73',
        'Yola': '75',
        'Maiduguri': '76',
        'Bauchi': '77',
        'Hadejia': '78',
        'Jalingo': '79',
        'Aba, Nigeria': '82',
        'Owerri': '83',
        'Port Harcourt': '84',
        'Uyo': '85',
        'Ahoada': '86',
        'Calabar': '87',
        'Umuahia': '88',
        'Yenagoa': '89',
        'Ubiaja': '55',
        'Kwara': '31',
        'Igarra': '57',
        'Ughelli': '53',
        'Uromi': '57'
    };

    prefixes = [];

    areaCodes = [];

    isValidPhone = false;

    isValidLandLine = false;

    line = '';

    constructor(line = null) {
        for (var i in this.allPrefixes) {
            for (var j in this.allPrefixes[i]) {
                this.prefixes.push(this.allPrefixes[i][j]);
            }
        }

        for (var k in this.allAreaCodes) {
            this.areaCodes.push(this.allAreaCodes[k]);
        }

        if (line) {
            this.setLine(line);
            this.isValid();
        }

    }

    setLine(line) {
        this.line = line.replace(/\D/g, '');;
    }

    isValid() {
        // contains country calling code
        if (this.line.substring(0, 3) == '234') {
            //phone number
            if (this.line.length == 13) {
                //replace country code 234 with 0 for further analysis
                let stripCcc = this.line.replace('234', '0');

                //contains valid phone prefix
                if (this.prefixes.includes(stripCcc.substring(0, 5)) || this.prefixes.includes(stripCcc.substring(0, 4))) {
                    this.isValidPhone = true;

                    return true;
                }
            }

            // is a land line
            else if (this.line.length == 11) {
                // replace country code (234)
                let stripCcc = this.line.replace(this.line.substring(0, 3), '');

                // contains valid 2-digit area code
                if (this.areaCodes.includes(this.line.substring(0, 2))
                    && stripCcc.length == 7) {
                    this.isValidLandLine = true;

                    return true;
                }
            }
        }
        // doesn't contain country calling code
        else {
            // check if it starts with any prefix [0807,0906 etc..]
            if (this.line.substring(0, 1) == '0' && this.line.length == 11 && (this.prefixes.includes(this.line.substring(0, 5)) || this.prefixes.includes(this.line.substring(0, 4)))) {
                this.isValidPhone = true;

                return true;
            }
            // check if it starts with any prefix without 0 e.g [807,906, 701 etc..]
            else if (this.line.length == 10 && (this.prefixes.includes(this.line.substring(0, 4)) || this.prefixes.includes(this.line.substring(0, 3)))) {
                // add the missing zero for completion
                this.line = '0' + this.line;
                this.isValidPhone = true;

                return true;
            }
            // check if it's a land line starting with 0
            else if (this.line.substring(0, 1) == 0
                && this.areaCodes.includes(this.line.replace(this.line.substring(0, 1), '').substring(0, 2))
                && this.line.length == 8) {
                this.isValidLandLine = true;

                return true;
            }
        }

        return false;
    }


    formatted() {
        if (this.line.substring(0, 3) == '234') {
            return this.line.replace(this.line.substring(0, 3), '0');
        }

        return this.line;
    }

    getNetwork() {
        if (this.isMtn()) {
            return 'mtn';
        } else if (this.isGlo()) {
            return 'glo';
        } else if (this.isAirtel()) {
            return 'airtel';
        } else if (this.is9mobile()) {
            return '9mobile';
        } else if (this.isSmile()) {
            return 'smile';
        } else if (this.isMultilinks()) {
            return 'multilinks';
        } else if (this.isVisafone()) {
            return 'visafone';
        } else if (this.isNtel()) {
            return 'ntel';
        } else if (this.isStarcomms()) {
            return 'starcomms';
        } else if (this.isZoom()) {
            return 'zoom';
        } else {
            return 'unknown';
        }
    }

    getAreaCode() {
        let formatted = this.formatted();
        let removedZero = formatted.replace('0', '');
        let areaCode = removedZero.substring(0, 2);
        for (var i in this.allAreaCodes.length) {
            if (areaCode == this.allAreaCodes[i]) {
                return this.allAreaCodes[i];
            }

        }
        return null;
    }

    isMtn() {
        return (this.allPrefixes['visafone'].includes(this.formatted().substring(0, 5)) ||
            this.allPrefixes['mtn'].includes(this.formatted().substring(0, 4)));
    }

    isGlo() {
        return (this.allPrefixes['glo'].includes(this.formatted().substring(0, 4)));
    }

    isAirtel() {
        return (this.allPrefixes['airtel'].includes(this.formatted().substring(0, 4)));
    }

    is9mobile() {
        return (this.allPrefixes['9mobile'].includes(this.formatted().substring(0, 4)));
    }

    isSmile() {
        return (this.allPrefixes['smile'].includes(this.formatted().substring(0, 4)));
    }

    isMultilinks() {
        return (this.allPrefixes['multilinks'].includes(this.formatted().substring(0, 5))
            || this.allPrefixes['multilinks'].includes(this.formatted().substring(0, 4)));
    }

    isVisafone() {
        return (this.allPrefixes['visafone'].includes(this.formatted().substring(0, 5))
            || this.allPrefixes['visafone'].includes(this.formatted().substring(0, 4)));
    }

    isNtel() {
        return (this.allPrefixes['ntel'].includes(this.formatted().substring(0, 4)));
    }

    isStarcomms() {
        return (this.allPrefixes['starcomms'].includes(this.formatted().substring(0, 5))
            || this.allPrefixes['starcomms'].includes(this.formatted().substring(0, 4)));
    }

    isZoom() {
        return (this.allPrefixes['zoom'].includes(this.formatted().substring(0, 4)));
    }

    getPrefixesByNetwork(network) {
        return this.allPrefixes[network];
    }

    getNetworkByPrefix(area) {
        for (var i in this.allPrefixes) {
            if (this.allPrefixes[i].includes(area)) {
                return i;
            }
        }

        return null;
    }

    getAreaCodeByName(area) {
        for (var i in this.areaCodes) {
            if (i == area) {
                return this.areaCodes[i];
            }
        }

        return null;
    }
}

module.exports = NigerianPhone;