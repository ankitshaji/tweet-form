//Form eventStrings and eventObjects - Single page workflow - show data on current page,dont leave to new page location

//elementObject = (JSObject/elementObject/nodeObject).method(css element selector)
const tweetForm = document.querySelector("body #tweetForm");

//elementObject.method(eventString,anonymousCallbackFunctionExpression(eventObject))
//eventString -"submit"
//eventObject - eg.submitEventObject-propeties/methods
//by default form eventObject sends HTTPRequest with FormData to action attributes location
//by default form eventObject moves onto next page location URL in action attribute

//method - addEventListner(eventString,anonymousCallbackFunctionExpression(parameter))
//when stringEvent happens on elementObject(Target)
//it executes the anonymous callback function expression
//when it executes the fucntion expression it create and passes in the evenObject as argument
//this eventObject is caught as a parameter in the function expression
tweetForm.addEventListener("submit", function (e) {
  //submitEventObject.method()
  e.preventDefault(); //dont do default behavior
  //prevent deafult eventObject sending HttpRequest Formdata to action attribute location
  //prevent deafult eventObject moving onto next page location URL in action attribute

  //basic way to get value property
  //elementObject= nodeListObject[1]
  // const input1 = document.querySelectorAll("input")[0];
  // const input2 = document.querySelectorAll("input")[1];
  // //elementObejct.property
  // console.log(input1.value);
  // console.log(input2.value);

  //better way to get value property
  //this keyword - Execution scope - left of dot - refers to formElementObject
  //formElementObject.propery
  //becomes - HTMLFormContorlsCollectionObject.property
  //property is the value of name attribute of element
  //becomes - inputObject.property - returns string
  const usernameString = this.elements.username.value;
  const tweetString = this.elements.tweet.value;

  //expected nesting -<ul><li><b>stringObject</b>stringObject</li></ul>
  //select parent ul elementObject
  const ul = document.querySelector("#tweetsUl");
  //create new child elementObject - li,b
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");

  //elementObject.method() -append() - added inside parent elementObject
  //append DOMStringObject to parent elementObject
  bTag.append(usernameString);
  //alternative -
  // bTag.innerText = usernameString
  //sets properties innerText/innerHTML/textContent/lastChild

  //append child elementObject to parent elementObject
  //child is added to -
  //parentElementObject.property
  //property -children -HTMLCollectionObjact
  //property -childNodes -NodeListObject
  //property -lastchild
  newTweet.append(bTag);

  //append DOMStringObject to parent elementObject
  newTweet.append(` - ${tweetString}`);
  //append child elementObject to parent elementObject
  ul.append(newTweet);

  //clear value property
  this.elements.username.value = "";
  this.elements.tweet.value = "";
});
