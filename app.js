//Form eventStrings and eventObjects - Single page workflow - show data on current page,dont leave to new page location

//Element object = (JSObject/ElementObject/NodeObject).method(css element selector)
const tweetForm = document.querySelector("body #tweetForm");

//ElementObject.method(eventString,anonymousCallbackFunctionExpression(eventObject))
//eventString -"submit"
//eventObject - eg.submitEventObject-propeties/methods
//by default form eventObject sends HTTPRequest with FormData to action attributes location
//by default form eventObject moves onto next page location URL in action attribute

//method - addEventListner(eventString,anonymousCallbackFunctionExpression(eventObject))
//when stringEvent happens on elementObject(Target)
//it executes the anonymous callback function expression
//when it executes the fucntion expression it create and passes in the evenObject
//this eventObject is caught as a parameter in the function expression
tweetForm.addEventListener("submit", function (e) {
  //submitEventObject.method()
  e.preventDefault(); //dont do default behavior
  //prevent deafult eventObject sending HttpRequest Formdata to action attribute location
  //prevent deafult eventObject moving onto next page location URL in action attribute

  alert("Submit");
});
