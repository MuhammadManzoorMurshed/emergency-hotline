# 📞 Bangladesh Emergency Service Directory

A fully responsive, interactive web application providing quick access to essential Government Emergency Services in Bangladesh. Built with raw HTML, CSS, Tailwind CSS, and Vanilla JavaScript.

---

## 🌐 Live Demo

You can view the live deployment of this project here:
👉 **[Live Demo Link](https://hotline-bd.netlify.app/)**

---

## 📝 About / Purpose

This project is designed to put crucial national emergency contact hotlines at the fingertips of citizens. It acts as a digital directory for key public help portals (such as National Emergency 999, Fire Service, Police, Ambulance, BRAC, Railway, and Women & Child Helplines). 

The platform simulates call placements, manages a virtual coin balance, counts copying actions, logs call histories with real-time timestamps, and allows users to bookmark cards as favorites.

---

## 🚀 Features & How to Use

1. **Browse Directories**: Search and browse structured service cards, each containing categorized badges, direct hotlines, and visual icons.
2. **Heart Favorites (💗)**: Click the heart icon on any card to toggle the card as a favorite. The header heart counter will increment or decrement accordingly, and the icon will animate and change to a solid red color.
3. **Copy to Clipboard**: Click the **Copy** button to copy the hotline number directly. It updates the global Copy count in the header.
4. **Simulate Calls**: Click the **Call** button to simulate dialing a service:
   * Each call deducts **20 coins** from your starting balance of 100 coins.
   * If your coin balance falls below 20, you will be notified, and the action will terminate.
   * Successful calls append the service name, number, and **exact call timestamp** to the **Call History** section.
5. **Manage History**: Click the **Clear** button inside the Call History card to empty the list.

---

## 🎯 Learning Goals

* **Responsive Web Design**: Implementing a flexible grid system that dynamically shifts layouts for mobile, tablet, laptop, and desktop viewports.
* **State Management in Vanilla JS**: Keeping track of application states (coins, copy counts, favorite items, call history list) without external frameworks.
* **Advanced DOM Manipulation**: Creating, customizing, and appending elements dynamically based on user triggers.
* **Modern CSS Frameworks**: Leveraging Tailwind CSS and DaisyUI components for premium aesthetics, transitions, and layout alignment.

---

## 🛠️ Technologies Used

* **HTML5**: Semantic structure.
* **CSS3**: Google Fonts (Hind Madurai) and custom styling.
* **Tailwind CSS (v4 Browser CDN)**: Responsive utilities, flexbox, and grid layouts.
* **DaisyUI (v5)**: Clean component styling.
* **Vanilla JavaScript (ES6+)**: Event listeners, dynamic updates, and clipboard APIs.
* **Font Awesome (v7)**: Vector icon integration.

---

## 📂 Folder Structure

```text
emergency-hotline/
├── assets/                    # Logo, category icons, and illustrations
│   ├── Bangladesh-Railway.png
│   ├── ambulance.png
│   ├── brac.png
│   ├── coin.png
│   ├── emergency.png
│   ├── fire-service.png
│   ├── heart.png
│   ├── logo-dark.png
│   ├── logo.png
│   └── police.png
├── index.html                 # Main interface markup
├── script.js                  # Application interactivity and state logic
├── tailwind.config.js         # Configuration file for Tailwind CSS
└── README.md                  # Project documentation (this file)
```

---

## 💻 How to Run

1. Clone or download this repository to your local machine.
2. Navigate to the project root directory.
3. Simply double-click `index.html` to open it in your browser, or run it using a local dev server (e.g., **Live Server** extension in VS Code).

---

## 📚 Topics Covered (Conceptual Q&A)

Here are the key JavaScript conceptual topics covered during the development of this project:

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?
* **`getElementById(id)`**: Selects a single element by its unique `id` attribute. It is highly efficient and returns `null` if no match is found.
* **`getElementsByClassName(className)`**: Selects all elements sharing the specified class name. It returns a **live HTMLCollection**, which automatically updates when the DOM changes.
* **`querySelector(selector)`**: Selects the **first** element that matches any CSS selector (e.g. `.class`, `#id`, `div > p`). It is highly flexible.
* **`querySelectorAll(selector)`**: Selects **all** elements matching a CSS selector and returns a **static NodeList** (does not auto-update if the DOM changes).

### 2. How do you create and insert a new element into the DOM?
1. **Create the element** using `document.createElement('tagName')`.
2. **Set attributes/content** using `.innerText`, `.innerHTML`, `.classList.add()`, or `.setAttribute()`.
3. **Insert the element** into the document tree using methods like:
   * `parentElement.appendChild(newChild)` (adds to the end of parent).
   * `parentElement.insertBefore(newChild, referenceChild)` (adds before a specific child).
   * `parentElement.prepend(newChild)` (adds to the beginning of parent).

### 3. What is Event Bubbling and how does it work?
Event Bubbling is a phase in the HTML DOM event flow. When an event (like a click) occurs on an element (the *target*), the event first triggers on that target, then **bubbles up** to its parent elements one by one, all the way up to the `body`, `html`, and `window` objects. This allows parent elements to listen for events that occurred on their children.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a pattern where instead of adding individual event listeners to multiple child elements, you add **a single event listener to a common parent element**. 
When a child is clicked, the event bubbles up to the parent, and you can identify the actual source of the event using `event.target`.
* **Why it's useful**:
  1. **Performance**: Reduces memory usage by having fewer event listeners.
  2. **Dynamic elements**: Works automatically for child elements added to the DOM *after* the page loads, without needing to bind new listeners.

### 5. What is the difference between `preventDefault()` and `stopPropagation()`?
* **`event.preventDefault()`**: Stops the **default action** of the browser associated with the event (e.g., stops a link from navigating, or a form from submitting/reloading). It does *not* stop the event from bubbling up the DOM tree.
* **`event.stopPropagation()`**: Stops the **event from bubbling up** (or trickling down) the DOM tree, preventing parent event handlers from firing. It does *not* stop the browser's default behavior.
