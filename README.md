# FD-React-Portfolio

# User Story

AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

# Acceptance Criteria
GIVEN a single-page application portfolio for a web developer [x]

WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer [x]

WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio  [x]

WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted [x]

WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted [x]

WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default [x]

WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them  [x]

WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository  [x]

WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message [x]

WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required [x]

WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address [x]

WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies [x]

WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) [x]


## Step 1 : install the libraries:
npm i 
@emailjs/browser (to implement the contact form)
@fortawesome/free-brands-svg-icons (to install free icons)
@fortawesome/free-solid-svg-icons (to install free solid icons for the navigation)
@fortawesome/react-fontawesome (to wrap up the fontawesome and use it in React)
@gsap-trial (for more advanced animations, this is the trial version to have it free)
animate.css (to animate the css fonts)
loader.css (for the css loaders)
react-loaders (for the react loaders)
react-leaflet (wrap up to use leaflet maps)
react-router-dom (to navigate through the pages)
sass (for styling easier and quicker css)

## Step 2: Global styling
style the main app on the index.css

## Step 3:
Working on the main Index.js, need to wrap the App component around the ReactDOM

## Step 4:
In the App.js, need to import Routes and wrap them.
From the (new) Layout folders (in src -> components), import the layout components that will serve as base for all layouts.

## Step 5:
Need to create components for 

Sidebar : adding toggle functions, logos, etc. Make sure it's mobile friendly.
Home 
Navigation []
About []
AnimatedLetters [x]
Contact [x]
Dashboard
Portfolio 
In each of these folders, create index.scss and index.js in each of these folders, and style.

## Step 6:
Using React capabilities to call upon a component numerous times, create the animation for the letters.

## Step 7:
Pacman loaders

## Step 8:
Contact component





Create a render of each route
then start adding to it all
