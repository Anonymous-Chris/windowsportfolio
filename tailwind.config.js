/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
        extend: {
            backgroundImage: {
                'windows-dark': "url('/src/assets/wallpaper/default_dark.jpg')",
                'windows-light':"url('/src/assets/wallpaper/default_light.jpg')",
                'aeroplane': "url('https://calaero.edu/wp-content/uploads/2019/02/Runway-Distance-Requirements.jpg')",
            },
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
  ],
}

