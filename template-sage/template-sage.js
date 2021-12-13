/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});

	qlik.theme.apply('tema-sage');
	

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('App.qvf', config);

	
	//get objects -- inserted here --
	app.getObject('KPI-04','DLPfAE');
	app.getObject('KPI-06','qURNj');
	app.getObject('KPI-07','qURNj');
	app.getObject('KPI-05','DLPfAE');
	app.getObject('KPI-08','DLPfAE');
	
	app.getObject('QV1-03','WcYgxVn');
	app.getObject('QV1-02','dZUSLDN');
	app.getObject('QV1-01','jcjUB');
	
	
	app.getObject('KPI-03','qURNj');
	app.getObject('KPI-02','DLPfAE');
	app.getObject('KPI-01','EhDHKxZ');

	//create cubes and lists -- inserted here --


	if (app) {
		app.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
