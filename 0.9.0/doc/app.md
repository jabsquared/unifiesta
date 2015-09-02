# Raffle
 |---> get request and loading spinner

# Translation


# Homescreen Styling


# Adding Vibration on ios


# Playing around with booth icon


# Add warning to "not park at safeway!"



# Issues:

1 Home page is not very responsive... (Height will be squashed)

2 Color of the raffle is too dark, might blend into background.

3 Links to Sponsor

4 Sorting out Images directory

5 Update Event information

6 Test performance as well as the glitch with header bar.
  |---> Possible Resolution: Header bar with Univision Events app logo for the home page.

7 Android build | publish

8 iOS build | publish

# Done:

* Sponsor page style does not work on the phone
* Binding the parking lot information (Also in order to navigate from native map app), which will be shown on a card below
* Font on the homepage is wrong
* The header is scrollable <- will be very unstable, need different scroll div
* Return of Native Back button
* Binding the Booth's information into the info Card (Boothmap). OnEvent: On click, assign $scope

# Parking and Parade
  |---> 1 Special Marker for Parade location
  |---> Marker for each parking lot
    \---> Check for current location using GPS
      |---> Check for network connection
      |---> Redirect to Map with Route from Current Location

# Booth Map
  |---> Marker for each Booth
    \---> Check for current location
      |---> You are here... (Pointer or something)

# Sponsor (S)
  |---> Col-50 for each

  |---> Using Directive to Show stuff

# Sponsor Bar
  |---> Move the bar out-of-sight
    \---> When toggled back, Move the bar back again.
