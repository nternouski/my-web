"use strict";
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = {
	entry: path.join(path.resolve(__dirname, "src"), "index.ts"),
	output: {
		path: path.join(__dirname, "lib"),
		filename: "index.js", // <-- Important
		libraryTarget: "this" // <-- Important
	},
	target: "node", // <-- Important
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader",
				options: {
					transpileOnly: true
				}
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		plugins: [new TsConfigPathsPlugin(/* { configFileName, compiler } */)]
	},
	externals: [nodeExternals()] // <-- Important
};
