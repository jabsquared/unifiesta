# Issues:

* Home page is not very responsive... (Width will be squashed) (edited)

* Color of the raffle is too dark, might blend into background.

* Links to Sponsor

* Sorting out Images directory

* Update Event information

* Binding the parking lot information (Also in order to navigate from native map app), which will be shown on a card below


# Done:

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
