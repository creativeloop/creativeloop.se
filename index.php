<?php
	require('lib/altorouter/AltoRouter.php');

	$router = new AltoRouter();
	$router->setBasePath('');

	// Routes
	$router->map('GET','/', 'views/home.php', 'home');
	$router->map('GET','/priser/', 'views/pricing.php', 'pricing');
	$router->map('GET','/bilder/', 'views/images.php', 'images');
	$router->map('GET','/kontakt/', 'views/contact.php', 'contact');
	$router->map('GET','/aktuellt/', 'views/events.php', 'events');

	/* Match the current request */
	$match = $router->match();

	if( $match && is_callable( $match['target'] ) ) {
		call_user_func_array( $match['target'], $match['params'] );
	}
	elseif($match) {
		require('views/partials/header.php');
		require $match['target'];
		require('views/partials/footer.php');
	}
	else {
		header("HTTP/1.0 404 Not Found");
		require('views/partials/header.php');
		echo "404";
		require('views/partials/footer.php');
	}
?>