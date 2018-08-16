const seleniumServer = require('selenium-server')
const chromedriver = require('chromedriver')
const SCREENSHOT_PATH = 'test/e2e/screenshots'

module.exports = {
    'src_folders': [
        'test/e2e/specs'
    ],
    'output_folder': 'test/e2e/reports',

    'selenium': {
        'start_process': true,
        'server_path': seleniumServer.path,
        'host': '127.0.0.1',
        'port': 4444,
        'cli_args': {
            'webdriver.chrome.driver': chromedriver.path
        }
    },

    'test_settings': {
        'default': {
            'selenium_port': 4444,
            'selenium_host': 'localhost',
            'silent': true,
            'screenshots': {
                'enabled': true, // if you want to keep screenshots
                'on_failure': true,
                'on_error': false,
                'path': SCREENSHOT_PATH // save screenshots here
            },
            'globals': {
                'waitForConditionTimeout': 10000
            }
        },
        'chrome': {
            'desiredCapabilities': {
                'browserName': 'chrome',
                'javascriptEnabled': true,
                'acceptSslCerts': true
            }
        },

        'firefox': {
            'desiredCapabilities': {
                'browserName': 'firefox',
                'javascriptEnabled': true,
                'acceptSslCerts': true,
                'marionette': true
            }
        },

        // 'phantomjs': {
        //     'desiredCapabilities': {
        //         'browserName': 'phantomjs',
        //         'javascriptEnabled': true,
        //         'acceptSslCerts': true
        //     }
        // }
    }
}

function padLeft(count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
    return count < 10 ? '0' + count : count.toString()
}

var FILECOUNT = 0 // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath(browser, filename) {
    var a = browser.options.desiredCapabilities
    var meta = [a.platform]
    meta.push(a.browserName ? a.browserName : 'any')
    meta.push(a.version ? a.version : 'any')
    meta.push(a.name) // this is the test filename so always exists.
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '')
    return SCREENSHOT_PATH + '/'+ metadata + '_' + padLeft(FILECOUNT++) + '_' + filename
}

module.exports.imgpath = imgpath
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH