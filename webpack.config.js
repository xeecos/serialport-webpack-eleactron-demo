var path = require("path");
var webpack = require("webpack");
module.exports = [
    {
        mode:"production",
        entry: ["./src/main.js"],
        output: {
            path: path.resolve(__dirname, "./dist/"),
            publicPath: "/dist/",
            filename: "app.bundle.js"
        },
        target: "electron-main",
        externals:  {
            serialport: 'commonjs serialport'
        },
        module: {
            exprContextCritical: true,
            wrappedContextCritical: true,
            wrappedContextRecursive: true,
            wrappedContextRegExp: /^\.\//,
            exprContextRegExp: /^\.\//,
            unknownContextRegExp: /^\.\//,
            rules: [
                {
                test: /\.js$/,
                loader: "babel-loader",
                include: [path.resolve(__dirname, "src/")],
                exclude: [/node_modules/]
                },
                {
                    test: /\.node$/,
                    use: "node-loader"
                }
            ]
        },
        resolve: {
            modules: [path.resolve("./node_modules")]
        },
        plugins: [
            new webpack.DefinePlugin({
                $dirname: "__dirname"
            })
        ]
    }
];