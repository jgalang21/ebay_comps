# Ebay Search Comps Application

This is a simple application I built in React that simply searches for an item on ebay and gets the most recently sold prices for it. It is much easier than having to navigate Ebay's filtering UI every time someone wants to search for a particular item. 

![image](https://github.com/jgalang21/ebay_comps/assets/22481757/89df5157-27be-43ff-8f52-c810b32dd749)

It shows each recently sold listing with the sold price, date, picture and a link to the actual listing. 

## Core Technologies Used:
* React
* React Boostrap
  * General styling
* Python / Flask
  * Building endpoints and Web APIs 
* BeautifulSoup (Python Library)
  * For parsing Ebay's HTML
  

# HOW TO RUN

1. Go to [this repository](https://github.com/jgalang21/ebayWebAPI), clone the repo and run the python file. You can simply open the python file in VS Code and just run it. This will launch an instance of the Web API. Make note of the URL it's running on.
2. Clone **this** repository, run an *npm i* command. In the App.js, make sure the url matches the one the Python file is running. Start the application with *npm start*
3. An instance of the app should open. Type in any item you wish to search for, then click search. Listings should appear as a result!
   ![image](https://github.com/jgalang21/ebay_comps/assets/22481757/347e39d5-499f-4aff-a779-f621fbf90c31)

