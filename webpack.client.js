const path = require('path');

module.exports = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather then for the browser
    target: 'node',

    // Tell webpack the root file of our
    // server application 
    entry: './src/client.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react', 'stage-0', ['env', {
                            target: { browsers: ['last 2 versions']}
                        }]
                    ]
                } 
            },
        ]
    }

};