const fs = require('fs');
const format = require('date-fns/format')

module.exports = function (config) {

    config.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->",
    });

    config.addFilter('date', function (date, dateFormat) {
        return format(date, dateFormat)
    });

    config.setTemplateFormats([
        // Templates:
        'html',
        'njk',
        'md',
        // Static Assets:
        'jpeg',
        'webp',
        'jpg',
        'png',
        'svg',
        'woff',
        'woff2',
    ]);

    return {
        dir: {
            
            input: 'src',
            //output ini diganti ke 'dist' klo mau deploy ke production, bagong memang ribet
            output: '_site',
        },
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}