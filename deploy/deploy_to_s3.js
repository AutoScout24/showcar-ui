/**
 * Deploy the files from specified local dir to remote dir on S3
 * 
 * node deplpy_to_s3.js [local dir] [remote dir]
 * node deplpy_to_s3.js ../dist production
 */

var R = require('ramda');
var AWS = require('aws-sdk');
var chalk = require('chalk');
var H = require('./helper');

AWS.config.region = 'eu-west-1';

var localDirPath = H.joinPath(__dirname, process.argv[2]);
var remoteDirName = process.argv[3];

console.log(chalk.cyan('Local path is: ', localDirPath));
console.log(chalk.cyan('Remote path is: ', remoteDirName));

H.readLocalDir(localDirPath)
    .then(H.filterDotDirs)
    .then(H.appendFullPathToFiles(localDirPath))
    .then(H.mapFilesToStreams)
    .then(R.forEach(H.uploadFile(remoteDirName)))
    .catch(R.compose(console.log.bind(console), chalk.red.bind(chalk)));
