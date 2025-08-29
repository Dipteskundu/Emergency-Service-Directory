### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Perfect 👍 Here’s the answer in **paragraph style**, simple and clear:
Ans:
getElementById: To find an element by its unique id, use the 'getElementById' method. This method always returns a single element because an id is only used in one element on a webpage.
Example:document.getElementById("myId")

getElementsByClassName: To find elements that have the same class name, use the getElementsByClassName method. Since multiple elements can have the same class, it returns a collection of elements.
Example:document.getElementsByClassName("myClass")

querySelector: For identifying which element, such as an id, class, or tag, matches a CSS selector, use the 'querySelector' method. Only the first element is returned, even if multiple elements match.
Example:document.querySelector(".myClass") 

querySelectorAll: To retrieve every element that matches a CSS selector, check the 'querySelectorAll' method. This method returns a list of elements compared to just one, in opposed to 'querySelector'. 
Example:document.querySelectorAll("p")


2. How do you **create and insert a new element into the DOM**?
Ans:
To add a new element (such as a paragraph, button, image, heading, etc.) to a webpage in JavaScript without writing it in HTML, we create and insert the new element into the Document Object Model (DOM).
Example:
// Step 1: Create a new <p> element
let newPara = document.createElement("p")

// Step 2: Add some text inside it
newPara.textContent = "This is a new paragraph."

// Step 3: Select where it will be inserted
let parentDiv = document.getElementById("container")

// Step 4: Insert the new element
parentDiv.appendChild(newPara)

3. What is **Event Bubbling** and how does it work?
Ans:
Event Bubbling is a mechanism in the DOM (Document Object Model) where an event starts its journey from the target element that triggered it and then propagates upward (or "bubbles up") through all its ancestor elements in the hierarchy, all the way to the root of the document (the window object).

How It Works: 
Step 1: The event travels from the window down to the target element.
Step 2: The event reaches the target element.
Step 3: The event bubbles up from the target element back to the window.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:
Event Delegation is a technique in JavaScript where instead of adding event listeners to many individual child elements, we add a single event listener to a common parent element. This single listener then handles events that are triggered by any of its child elements.

It is useful because:
1.It saves memory and makes the code more efficient. No need to attach many listeners.
2.It works even for dynamically added elements. New elements added later will still trigger the parent’s event listener.
3.It makes the code cleaner and easier to maintain.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:
preventDefault():We use the preventDefault() method when we want to prevent the default action of an element from happening. Many HTML elements have behaviors built into them. For example- a link () will navigate you to another page, or a form can be submitted by clicking on the action submit button. By using event.preventDefault(), we can block the default behavior but keep the event bubbling up the DOM as it normally would.

stopPropagation():This method prevents the event from bubbling up the DOM tree. That means the event will just occurred only on the current element it has happened to and not passed to any parent or ancestor element.
