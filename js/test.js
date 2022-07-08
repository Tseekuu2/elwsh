// import { window } from './jquery.js';
// importScripts("./jquery.min");
// import amazonjs from "./apstag.js";
// import amazonjs from "./pubads_impl_2022061501";
// import deliver from "bootstrap.min.css";
// loadScript("./jquery");

// const http = require("http");
// const fs = require("fs");
// const jsdom = require("jsdom");

// require("./jquery");
// require("./jquery.min");
// // require("./bootstrap.min.css");
// // require("./fabric");
// if( 'function' === typeof importScripts) {
//     importScripts('./jquery.min.js');
//     addEventListener('message', onMessage);
//
//     function onMessage(e) {
//         // do some work here
//     }
// }
//
//
// http.createServer(function (req, res){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     // fs.readFile("./test.html", function (error,data){
//     //     if(error){
//     //         res.writeHead(404)
//     //         res.write('errr')
//     //     } else{
//     //         res.write(data)
//     //     }
//     // });
//     var readStream = fs.createReadStream('test.html', 'utf8');
//
//     readStream.pipe(res);
//     // res.end('Hello World !!! HI')
// }).listen(8089);

console.log("Hello World");

// import express from 'express';
const express = require('express');
const app = express();
const port = 8089;

app.get('/',(req,res)=>{
    res.send('test.html')
    // res.write('test.html')
});

app.listen(port,()=>{
    console.log('Example app listening at http://localhost:${port}')
});


// app.static(root,[options]);

app.use(express.static('./'));
app.use(express.static('./util'));
app.use(express.static('./dom'));










// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
//
// //ga('create', 'UA-2079983-7', 'auto');
// //ga('send', 'pageview');
//
// var GA_LOCAL_STORAGE_KEY = 'ga:clientId';
//
// if (window.localStorage) {
//     ga('create', 'UA-2079983-7', {
//         'storage': 'none',
//         'clientId': localStorage.getItem(GA_LOCAL_STORAGE_KEY)
//     });
//     ga(function(tracker) {
//         localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
//     });
//     ga('send', 'pageview');
// }