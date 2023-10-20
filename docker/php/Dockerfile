FROM php:8.2-fpm
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
RUN apt-get update -y && apt-get upgrade -y && apt-get install -y \
		libfreetype-dev \
		libjpeg62-turbo-dev \
		libpng-dev \
		libzip-dev \
	&& docker-php-ext-configure gd --with-freetype --with-jpeg \
	&& docker-php-ext-install -j$(nproc) gd zip
		