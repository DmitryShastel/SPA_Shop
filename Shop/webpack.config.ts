import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode
    port: number
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: "build.js",
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devServer: {
            port: env.port ?? 3000,
            open: true,
            historyApiFallback: {
                index: '/index.html',
                rewrites: [
                    { from: /./, to: '/index.html' }
                ]
            },
        }
    }
    return config
}