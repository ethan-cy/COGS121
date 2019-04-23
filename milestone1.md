**TEAM WADE**

Yi Cai

Austin Nim

Dohyun Kim

Wanhin Choi

Proposal:


- **Idea 1:**
We plan to create a web application to enhance medication use experience. Through the application users will be able to speed up picking up their medicine. In addition, patients will have a personalized experience of the process of taking medicines including pill refill reminders. The application will feature a database on pill information (ie: correct dose amount, side effects). Also there will be reminders to take medicine with images and easily readable pill consumption instructions. Another feature is heart rate detection to detect if the medicine is causing any side effects, but also capable of detecting a healthy heart rate recovery. It would store this information in a personalized account that the user would be able to access later to compare the effects of the drug to previous prescriptions using the web app. One other feature is price comparison for prescription and non-branded medication. The target audiences include older individuals and parents. This is because parents do not have all the time in the world with work and kids to devote multiple trips to the pharmacy to ask for a prescription and then having to wait for it to be filled. Also, older people tend to have more trouble remembering what to take as their need for medicines increases with age. Parents can also use this application to keep track of their children’s medicine. In addition, these groups of audiences are suitable because none of our team members is old or a parent. Possible sources of dataset could include the drug data from the website DrugBank which contains information on drugs and drug targets. Possible APIs include GoodRx, Pharmacy prescription API  - Walgreen’s API, and Heart rate / HealthKit. The GoodRx and Pharmacy prescription API provides methods for comparing prescription drug prices, finding alternative drugs, and refilling prescriptions at certain pharmacies. The omron wellness partner API allows for measuring blood pressure, and we would be able to use that data to compare the effects of different prescriptions to test which prescription is the best match for the taker. In addition, we may utilize Google Maps api to provide users with a map of store locations. 



**Storyboards:**
1. ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/Storyboard-Prescription.jpg)
2. ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/Storyboard-SearchPrice.jpg)
3. ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/Storyboard-Heartrate.PNG)


**Paper Prototype:**

**1. Prototype #1**
- Utilizes a block type layout for the main menu. When click on each function, the back button is on the top left. We  demonstrate the search price feature in this prototype in which the user search the price of the drug and can see a list of resulting pharmacies and can sort the results based on prices or locations. It can also show the results on a map and compare their locations with the user's own location.
  
  Home - Features a UI layout similar to mobile applications, with 4 main interactions shown.
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/Main.PNG)
  Drug Info - Features a search function, where users can enter a drug name to be found. 
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/Search.PNG)
  Drug Info Cont. - Shows user interaction.
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/Search2.jpg)
  Drug Info Cont. - Reveals results and map button that displays results on a map.
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/SearchResult.PNG)
  Drug Info Cont. - Reveals sorted results and map button that displays results on a map.
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/SearchResultSort.PNG)
  Drug Info Cont. - Map of locations 
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/SearchResultMap.PNG)
  Drug Info Cont. - Results, where locations can be clicked.
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/SearchResultMapInfo.PNG)

**2. Prototype #2**
- Utilizes a hamburger menu, where users can access all functions. There are buttons that indicate possible interactions, such as filling a pill pescription or access to personal accounts. The UI looks similar to other mobile websites UI, and the prototype illustrates different features. 
  
   Home - Reveals the main task that can be accomplished on the web app.
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/Screen%20Shot%202019-04-22%20at%205.55.02%20PM.png)
   
   Menu Expanded - Menu expands across the screen when clicked, each label redirects the user to a separate page.
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/Screen%20Shot%202019-04-22%20at%205.55.16%20PM.png)
  
   Account - Shows user account, med history, renewal button, etc. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/Screen%20Shot%202019-04-22%20at%205.57.05%20PM.png)
   
   Fill Prescription - Form for users to fill out, continue button leads to next steps in prescription fulfillment process. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/IMG_2691.jpg)
   
   Fill Presciption 2 - Displays stores and then user can place order. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/IMG_2692.jpg)
   
   Heart Rate Tracker - Shows data of user's vitals, record button starts recording heart rate 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/IMG_2693.jpg)
   
   Heart Rate Tracker - Recording in process 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/IMG_2694.jpg)
   
   Price Comparison - Shows map of results that match user input 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/IMG_2695.jpg)
   
   Search - Displays an image and a description of medicine. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/IMG_2696.jpg)
   
**3. Prototype #3**
- Implements an alternative UI design, which highlights heart rate tracking as a way to track if the medicine was adiministered correctly and is working effectively. In addition, the prototype assumes there are unique user accounts, which allow access to the app's features. 
   
   Home - Features a home button and account button in the menu bar, and then other features are on the main screen as  buttons 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/Dylan/20190422_170933.jpg)
   Current Prescription - Shows the user's current prescription and heart rate displayed on a graph. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/Dylan/20190422_170937.jpg)
   Heart Rate Tracking - Shows interaction for heart rate tracking function. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/Dylan/20190422_170942.jpg)
   Notification - Shows a notification prompting using to measure heart rate again 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/Dylan/20190422_170945.jpg)
   Results - Shows the heart rates and current and previous buttons that show info on pills taken or currently taken. Browse new prescription redirects user to the screen below. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/Dylan/20190422_170948.jpg)
   Pill Recommendation - Shows current pill and the recommendend pill to replace your current pill. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/Dylan/20190422_170951.jpg)
   Account - Shows account info of user. 
   ![](https://github.com/ethan-cy/COGS121/blob/master/images/Dylan/20190422_170953.jpg)

**4. Prototype #4**
- Implements an alternative UI design in which we have the menu items on the buttom of the page and we click on each tab to see the detailsof the page.
  Menu - Utilizes a fixed navigation bar at the bottom of the screen. The main features are located in the navigation bar. 
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/AltUI-Main.PNG)
  Fill Prescription - Form for users to utilize, and users can take a picture of their prescription. Hitting continue leads to the next step in the process. 
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/AltUI-Prescription.PNG)
  Fill Prescription cont. - Displays stores and then user can place order.
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/austin/IMG_2692.jpg)
  Heart Rate - Perform a heart rate tracking. 
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/AltUI-Heartrate.PNG)
  Info - User types in name of drug and then info is displayed. 
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/AltUI-Info.PNG)
  Search - User types in input and information is displayed below the search bar. 
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/AltUI-SearchPrice.PNG)
  Account - Account page where users can set up simple reminders or store information on medication. 
  ![](https://github.com/ethan-cy/COGS121/blob/master/images/Ethan/AltUI-Acocunt.PNG)
  


