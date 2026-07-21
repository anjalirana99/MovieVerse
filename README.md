
## MovieVerse - Netflix-AI

## Setup - 
    vite setup 
    tailwind installation and  configuration
    install react-router-dom


## Feature
        1. Signup/Signin Page-
            redirection to Browser page on submit 
        2. Browser Page-
            -Header
            -Main Movie
                ->trailer in background
                ->title and description
            -Movie Suggestions
                ->MovieList *N
        3. NextFlix-AI
            -search bar
            -Movie Suggestions



## CODE FLOW 
Header
Routing of App
Login Form
Sign up Form
Form Validation
useRef Hook
Firebase Setup
Deploying our app to production
Create SignUp User Account
Implement Sign In user Api
Created Redux Store with userSlice
Implemented Sign out
Update Profile
BugFix: Sign up user displayName and profile picture update
BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
Unsubscibed to the onAuthStateChanged callback
Regiter TMDB API & create an app & get access token
Get Data from TMDB now playing movies list API
Custom Hook for Now Playing Movies
Create movieSlice
Update Store with movies Data
Planning for MainContauiner & secondary container
Fetch Data for Trailer Video
Update Store with Trailer Video Data
Embedded the Yotube video and make it autoplay and mute
Tailwind Classes to make Main Container look awesome
Build Secondary Component
Build Movie List
build Movie Card
TMDB Image CDN URL
Made the Browsre page amazing with Tailwind CSS
usePopularMovies Custom hook