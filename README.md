# [library-watch] (https://zhnzhn.github.io/library-watch)
Library Watch is a SPA RESTful client.
With it, you can view information about GitHub's repositories, NPM's packages, StackOverflows's questions.   
Information API providers : [GitHub](https://www.github.com/), [NPM](https://www.npmjs.com/), [Stack Exchange](https://stackexchange.com/).    

![alt text](screenshots/library-watch.png?raw=true "Library Watch")

**1.** **Choose an information Browser from the header bar.**  
**2.** **Choose an information menu item in a Browser.**   
**3.** **Enter repository or package name in a draggable Dialog.**   
**4.** **Click a button Load.**   

The result will be shown in an Item component in a Container.  
Also, you can add an item to Watch Browser and save to LocalStorage.  

After clicking a button Show in a Dialog will be opened Container with Items or empty.  
After closing a Container all Items remains.  
In one-time max three Item Dialogs can be opened.  

In that case of using [GitHub](https://developer.github.com/v3/#rate-limiting) API provider, exists some restriction on frequency and  
amount queries (60 calls per hour, 10 requests per minute for Search API).

## License
Library-Watch is available under [MIT license](https://opensource.org/licenses/MIT).