<?php

return [
	'table' => 'oauth_identities',
	'providers' => [
		'facebook' => [
			'client_id' => '12345678',
			'client_secret' => 'y0ur53cr374ppk3y',
			'redirect_uri' => 'http://crowdbound.io/facebook/login',
			'scope' => [],
		],
		'google' => [
			'client_id' => '12345678',
			'client_secret' => 'y0ur53cr374ppk3y',
			'redirect_uri' => 'http://crowdbound.io/google/login',
			'scope' => [],
		],
		'github' => [
			'client_id' => '982b911437949ea297f4',
			'client_secret' => '00ff4b3f4ea6a351b9da533172b14e6ed6ec2dc9',
			'redirect_uri' => 'http://crowdbound.io/github/login',
			'scope' => [],
		],
		'linkedin' => [
			'client_id' => '12345678',
			'client_secret' => 'y0ur53cr374ppk3y',
			'redirect_uri' => 'http://crowdbound.io/linkedin/login',
			'scope' => [],
		],
	],
];
