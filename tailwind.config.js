/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
        extend: {
            backgroundImage: {
                'windows-dark': "url('/src/assets/wallpaper/default_dark.jpg')",
                'windows-light':"url('/src/assets/wallpaper/default_light.jpg')",
                'aeroplane': "url('https://calaero.edu/wp-content/uploads/2019/02/Runway-Distance-Requirements.jpg')",
                "windowsmobile":"url('/src/assets/icons/windowsmobile.jpg')",
                'notFound': "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
            }, colors: {
                'taskbar': ' rgba(3, 21, 41, 0.4)',
                'taskbar-hover': 'rgb(0, 17, 81)',
                'desktop-icons-hover': 'rgba(164,219,232,0.4)',
                'calender': 'rgb(58,131,251)'
            }
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
  ],
}

