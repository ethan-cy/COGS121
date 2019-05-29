Milestone 5:


Target User Population and Its Use:

Our app's target user population is the elders. There are three main features of the app including usage tracking, drug information searching, and heart rate tracking. When the the user wants to enter his or her medicines' usage, he or she can use the usage tracking feature to enter the information and keep track of a list of medicines he or she is taking and how they should be consumed. In result the user will remember what to take and how to take them easily. A user can also search for a drug's indication, pregnancy warning, and other warning informations by entering the drug's name in the durg info page, and then the user can get the information in a easy-to-read text box instead of searching for the information on the drug bottles on which the texts can sometimes be small and hard to read. A user can also track heart rate by manually enter the date and time he or she measures the heart rate and the heart rate number, and then is presented with a line chart showing how the heart rate changes over time. Also a supplementary feature is drug dosage feature, where users can enter their current medicines and their recommended dosages. The user can then look up their prescriptions and see in clear text when and how to consume their meds. 




UI Screenshot:

1. Home Page

![](https://github.com/ethan-cy/COGS121/blob/master/images/M5-1.png)



2. Drug Info Page

![](https://github.com/ethan-cy/COGS121/blob/master/images/M5-2.png)



3. Heart Rate Page Entering Info

![](https://github.com/ethan-cy/COGS121/blob/master/images/M5-3.png)



4. Heart Rate Page Receiving Info

![](https://github.com/ethan-cy/COGS121/blob/master/images/M5-4.png)



5. Account Page

![](https://github.com/ethan-cy/COGS121/blob/master/images/Marco/Capture.PNG)

The UI improvement:

For some pages we have filled the previous empty space of the page with more information to make the page looks more informative and full. We have also made slight changes to the positions of the page titles and the color of the buttons.


Data Display:

1. Drug Info Display:

![](https://github.com/ethan-cy/COGS121/blob/master/images/M5-2.png)




2. Heart Rate Info Display

![](https://github.com/ethan-cy/COGS121/blob/master/images/M5-4.png)



Data Display Explanation:

1. Drug Info Display:
For the information about drugs, we are using the dataset from openfda. We cleaned the the database using the drug name as the key and imported the json file onto Firebase. We then let the user enter a drug name, and use it as the key to retreive information including the drug's indication and pregnancy and other warnings. We then display the info in several text boxes.

2. Heart Rate Display:
For the heart-rate tracking feature, we first take in user inputs including the heart-rate number and dates and times, and we insert them onto a Firebase database. We then prompt the users to another page where a line graph, formed by making the x-axis the dates and times and y-axis the heart-rate number, shows the chronological change of the user's heart-rate. We used CanvasJS to draw the line graph.

3. Personal Drug Dosage Display: 
This page is not featured on 


More Ambitious Ideas:

1. For the drug info page, an idea could be that on the page we include 4-6 square boxes, each contains a category of information such as usage, warnings, and so on. As the user clicks on one box, it expands into a text box that fills most of the screen and displaying the information only of that category. This way the info page can contain more informations while not losing its cleaniness and simplicity.

2. For the heart rate page, we could include more parameters for the graph displaying, making it more informative.

