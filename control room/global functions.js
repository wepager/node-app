
module.exports = (function () {

    console.key = function (e, f) {
        if (f === true) {
            f = 'string boolean number'
        }
        console.log(`\n\n\n\n\n\n********************************\n************\n*********\n******\n****\n***\n**\n*\n`);
        if (!e && 'object' !== typeof e) {
            console.log(`|${typeof e}| - |${e}|`);
        }
        for (const key in e) {
            console.log(`${key} ==> |${typeof e[key]}| - |${typeof e[key] !== 'object' && f && f.includes(typeof e[key]) ? e[key] : ''}|\n`);
        }
    };

    redirector = function (id, obj, exe) {
        var rst = false;
        for (var key in obj) {
            var item = obj[key];
            if (!item && 'object' !== typeof item) {
                return rst;
            }
            var list = item[0];
            var act = item[1] || 'redirect';
            act = String(act);

            if (!list && 'object' !== typeof list && act in exe == false) {
                return rst;
            }

            list.forEach(function (e) {
                if ('string' === typeof id) {
                    e = id.replace(e, '\\');
                    e = e.trim();

                    e = e.replace(/[^\\]/img, '#')
                    e = e.replace(/\\/img, '')
                    if (!e.includes('#')) {
                        exe[act](key)
                        rst = true
                        return rst;
                    }
                }
            })
        }
        return rst;
    }


    parseString = function (str, max, ch, rst) {
        ch = ch || '.'
        str = str + '';

        var rst = rst || [];
        var i = str.lastIndexOf(ch)
        i = i < 0 ? str.length : i;
        var Sa = str.substring(0, i);

        str = str.substring(i + 1, str.length)

        rst.push(Sa)
        rst.push(str)
        return rst
    }

    path = function (name) {
        name = `${$__dirname}/${name}`
        return name
    }
    Base64 = function (str) {
        //translate strings
        str = String(str)
        this.encode = function () {
            str = new Buffer.from(str)
            str = str.toString('base64')
            return str;
        }
        this.decode = function () {
            str = new Buffer.from(str, 'base64')
            str = str.toString('ascii')
            return str;
        }
    }

    fetch = require('node-fetch');
    cors = require('cors');
})()
