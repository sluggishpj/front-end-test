var config = require('../nightwatch.config.js')

module.exports = {
    'basic test': browser => {
        browser
            .url('http://localhost:8080/example/basic')
            .waitForElementVisible('body')

            // 取得网页标题
            .getTitle(function (title) {
                this.assert.equal(title, 'I am a page title - Sauce Labs')
            })

            // 判断是否含类名
            .assert.cssClassPresent("#i_am_an_id", "i_am_a_class")

            // 设置value
            .setValue('#fbemail', '123@qq.com')

            // 截图
            .saveScreenshot(config.imgpath(browser, 'email.png'))

            // 取得元素
            .getValue("#fbemail", function (result) {
                this.assert.equal(result.value, '123@qq.com')
            })

            // 点击事件
            .click('#submit')

            // 截图
            .saveScreenshot(config.imgpath(browser, 'submit.png'))

            // 结束
            .end()
    }
}