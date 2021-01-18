const path = require('path')

module.exports = {
    webpackFinal: async (config) => {

        // modules
        config.module.rules.push({
            test: /\.sass$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        prependData: `@import "${path.resolve(__dirname, '../src/styles')}"`,
                        sassOptions: {
                            indentedSyntax: true
                        }
                    }
                },
            ],
            include: path.resolve(__dirname, '../'),
        })
        config.module.rules.push({
            test: /\.pug$/,
            use: ['pug-plain-loader'],
        })

        // resolve
        config.resolve.alias['@'] = path.resolve(__dirname, '../src')

        return config
    },
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials'
    ]
}
