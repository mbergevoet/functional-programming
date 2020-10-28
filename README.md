# Functional programming

This repository is ment to track my progress for the next two or six weeks. In the first week I'm trying to learn how to clean up datasets. For practice I'm using a dummy dataset which was a survey with all kinds of random questions that 92 students answered. Using `.map()` and `.filter()` I'm cleaning up the data and making one column have one format only. Currently I'm trying to clean op the colomn with eye colors (hex values). After this practice I will use parking data from the RDW insitute to make a data visualisation using the D3 library.

# Concept

Research qeustion: Where and in what city are the parking rates the most favorable compared to other cities? <br>
<br>

The datasets I will be using to answer this question are _Open Data Parkeren: TARIEFDEEL_ and _Open Data Parkeren: GEOMETRIE GEBIED_. Then to calculate the parking rates I'm going to use _AmountFarePart - Integer_ and _StepSizeFarePart - Integer_ (Sam and Victor pointed out how to calculate the rate "If AmountFarePart is 5,0 and stepSizeFarePart is 720 you pay 5EU for 720 minutes which means 5EU per 12 hours = 0,41eu per hour"). To link the rate to a location I also use _AreaManagerId_ to find it in the GEOMETRIE GEBIED dataset which contains a variable called _GeoDataAsText - String_. In this variable are basicly coordinates you can plot on a map of some sort. <br>
<br>
My assumptions on this question are as follows:
* I suspect parking rates in bigger cities and townships will be higher. This might be because they want to minimize the amount of cars in the city.
* And I think the closer to the city centre you park your care the higher the rates will be. This is probably done to give pedestrians, cyclists and tourists in more space in crowded or shopping area's. That way they want to keep cars out to make it more safe. 

# License

This repository uses [MIT](https://github.com/mbergevoet/iCOV-redesign/blob/master/LICENSE) license.
