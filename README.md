# MatchMedia Attribute Manager
This scripts enables dynamic MediaQuery dependent attributes. 

## Use case
When adding an attribute ex. ```aria-hidden``` to an element to original DOM it is not dependent on the viewport. 

When a element should only be hidden in a specific viewport you will either have to show it using CSS but the state in the DOM will essentially be wrong and not reflect the truth. 


## Installation
```
npm install @wezz/matchmediaattributemanager
```

## Usage
### Initialize MatchMedia Attribute Manager
```
import MatchMediaAttributeManager from "@wezz/matchmediaattributemanager";
// On document ready
new MatchMediaAttributeManager();
```

### Apply attributes in the markup
```
<div data-matchmedia-query="(max-width: 768px)" 
     data-matchmedia-attribute="aria-hidden,true">
</div>
``` 

#### ```data-matchmedia-query``` attribute
The query attribute takes in a media query, once the viewport changes to match the query, the attribute-attribute will be applied. 

#### ```data-matchmedia-attribute="attribute,value,removeWhenNotMatched""``` attribute
The attribute attribute takes a comma separated string

* The first parameter is the attribute
* The second parameter is the attribute value
* The third parameter is optional, if set to true, the attribute will be removed if the media query no longer matches

In this example, the attribute ```aria-hidden="true"``` will be added to the element once the viewport is less than 768px wide.

## Attribute manipulation depending on matched media query
If the value has been changed and the viewport changes to match the query, the value of the attribute will be reset. 

So in this example the attribute will be updated as such:<br/>
**First load in tablet viewport**<br/>
Element will not have ```aria-hidden="true"```

**First load in mobile viewport**<br/>
Element will have the ```aria-hidden``` attribute<br/>

If something else adds or changes the attribute```aria-hidden``` to be ```aria-hidden="false"``` (such as the ARIAManager) and the viewport changes. It will be reset to match ```aria-hidden="true"``` once the media query matches again.


## Related packages
* [ARIAManager](https://github.com/wezz/ARIAManager) - A script that handles the relationship between ```aria-controls``` and ```aria-hidden```
* [ARIATabManager](https://github.com/wezz/ARIATabManager) - A script that combined with ARIAManager enables tabbing behavior with only additional attributes

## Development & Demo
Clone this repo
Run
``` npm install ```

To run the interactive demo, run 
``` npm run demo ```
