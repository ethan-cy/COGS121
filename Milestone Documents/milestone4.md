For this milestone, we changed the old red background color to a gradient of light blue and light green. The red seemed too bright on users and we changed it to something lighter and gives a more comfortable feeling.
![](https://github.com/ethan-cy/COGS121/blob/master/images/Screen%20Shot%202019-05-22%20at%2010.49.10%20AM.png)

We also changed multiple input boxes and buttons to have a round corner to be more friendly.
![](https://github.com/ethan-cy/COGS121/blob/master/images/Screen%20Shot%202019-05-22%20at%2010.49.21%20AM.png)

As suggested, we put our information displayed into a box to make it clearer and easier to see.
![](https://github.com/ethan-cy/COGS121/blob/master/images/Screen%20Shot%202019-05-22%20at%2010.49.35%20AM.png)


The two actions can be performed are:
1. Prescrption renewal:
The prescription feature requires the user to input their prescription number (specifically rx prescriptions). Then the user’s number will be sent as a post request to the Walgreens api, which then opens the appropriate URL to complete their refill. After completion users are prompted to refill another or cancel.

2. Information Search:
If the user wants to know information or indiction about a certain drug, he or she can enter the drug name into the search box and click the "Find Information" button, and will be given a box of words simply stating the use and the purposes of the particular drug. (It sends the drug name into the Firebase database and retrieve its information to be displayed on the page)
