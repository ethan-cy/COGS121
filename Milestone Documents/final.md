Slide:
https://docs.google.com/presentation/d/1P5VnUzFmHzR8pWtYzaMfLaW0m5xcHedyxUkTcv_fDOk/edit?usp=sharing

Ethan Cai
Austin Nim
Wan Hin Choi
Do Hyun Kim

Ethan Cai -
Worked on creating the heartrate tracking function of the app, allowing the user to input fields of date and what day of the week, 
and the user's bpm of the day in heartrate.html. Stored that data into the user's heartrate data, and created a graph in heartrate2.hmtl
that shows the progression of heartrate whilst taking a certain medication. Helped other members by teaching them how to use the firebase 
database.

Austin Nim - 
Worked on creating the Prescription renewel function, allowing the user to insert a prescription
by entering a drug name, the reccomended dosage, the estimated time in between each dosage, expiration data,
and any special information needed with it. Using that inserted prescription, would be able to check that 
information again in the app. Worked on the main philosophy behind the app and bugfixes.

Wan Hin Choi - 
Created the main UI setup for the application, making design choices of a main stage with four different 
functions and including a main navigation bar at the bottom. Worked on the account page that would store 
and display information on the user. If no user is logged in, the allows for input fields to take in and save data on the user's account.

Do Hyun Kim - 
Created the login and account creation for the application, for sign in to compare the username and password
with any existing accounts, and to pull up that information in the app if that user exists. Or, if no user
like that exists, to create a new account, taking in fields of name, username, password, age, blood type, 
height in cm, and weight in kg. If the required information was not completed then an error message would
appear to complete it.


sign_in.html
- Allows the user to sign in with an existing account, or the option to create a new account
sign_in.css
- stylesheet for sign_in.html, uses bootstrap login component and input fields

signUp.html
- Allows the user to input fields including: name, username, password, bloodtype, age, height, and weight
signUp.css
- stylesheet for signUp.css, uses similar bootstrap components

main.html
- Main page hosts four links: link to prescription, drug information, heart rate, and account
main.css
- arranges the four images in a grid 

account.html
account.css

drugdosage.html
- Allows users to upload new prescription medicines. The medicines are stored under the user's account, which are stored im a database. 

prescription.html
- Uses the database to render user's list of prescriptions that they can view. In addition, the page will display whether the prescription has expired. 

prescription.css
- Contains styling for both drugdosage.html and prescription.html. Helps create the form structures, button layouts, and display of user prescriptions. 

heartrate.html
 - Allows the user to log in heartrate information for that day, including a field for bpm 
heartrate.css
 - Contains styling for heartrate.html, allows everything to flow in a list 
 
heartrate2.html
 - takes logged data from the user's account history and creates a graph that shows the progression of heartrate with an x axis or time or date, and a y-axis of bpm.
heartrate2.css
 - Contains the styling for heartrate2.html, similar to heartrate.css

information.html
 - Allows the user to search for a common type of drug and pull up the usage information, pregnancy warning, and other risks when taking the drug.
information.css
 - Contains styling for information.css, creates text boxes with usage informationed parsed with punctuation, and red warning labels followed by warning text.



