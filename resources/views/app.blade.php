<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @vite(['resources/css/app.css', 'resources/js/app.ts'])

        <title>Laravel</title>

        <!-- Fonts -->
        
        <!-- Icons -->
        <script src="https://kit.fontawesome.com/f4668b2343.js" crossorigin="anonymous"></script>
    </head>

    <body class="h-full bg-white">
        <div id="app"></div>
    </body>
</html>