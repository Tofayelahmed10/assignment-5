Answer:-1 getElementById, getElementsByClassName, and querySelector / querySelectorAll এর মধ্যে পার্থক্য  হল

*getElementById এটা হলো‌ js Dom mathoud এটি ব্যবহার করে আইডি সিলেক্ট করে একটা এলিমেন্ট সিলেট করা যায়.

এটা সিলেক্টর ম্যাচ না করলে null return করে

*getElementsByClassName এটা হলো‌ js Dom mathoud একটি ব্যবহার করে class Name দিয়ে একাধিক এলিমেন্ট সিলেক্টর করা যায়. এটা Html calection retrun করে.

*querySelector এটা হলো‌ js Dom mathoud যা প্রথম ম্যাচিং সিলেক্টর সিলেক্ট করে css selector ব্যবহার করে. এটা সিলেক্টর ম্যাচ না করলে null return করে.

*querySelectorAll এটা হলো‌ js Dom powerful mathoud যা css selector ব্যবহার করে একাধিক এলিমেন্ট সিলেক্ট করে, এটা NodeList retrun করে. এটা Html calection নয়.

Answer :-2 create and insert a new element into the DOM এটা করার জন্য একটা const create = document.createElement('div') তৈরি করতে হবে js ফাইলে,এরপর এটা যেখানে সেট করব id name নিয়ে আসতে হবে তারপর const insert = document.getElementById('idName') এটা করতে হবে,

তারপর create.innerHTML =<div> <h1>hello world</h1> <p>Lorem ipsum dolor sit amet.</p> </div> এটা করতে হবে,

তারপর insert.appendChild(create) এটা করতে হবে.

Answer 3: এটা হলো‌ js এর Event Propagation এর একটা ধাপ,যেখানে কোন একটা element এর ওপর event ঘটে সেখান থেকে শুরু করে তার parent element এবং তার paren এক এক করে উপরে উঠতে থাকে একে বলা হয়Event Bubbling.

exmpmle: যদি button এ click করো: প্রথমে event button এ trigger হবে। তারপর parent

এ যাবে। তারপর body, তারপর html, শেষে document পর্যন্ত যাবে.
Answer 4: এটা হলো‌ js এর একটা টেকনিক যেখানে parent element-এর উপর একটি event listener বসিয়ে তার child elements-এর event handle করে.

এটা কেন দরকার

অনেকগুলো child element-এর জন্য আলাদা আলাদা listener না দিয়ে, parent-এ একটি listener দিয়ে সব handle করা যায়, কোড ছোট হয় এবং সহজে সবকিছু মেনটেইন করা যায়.

Answer 5:- preventDefault() and stopPropagation() এর মধ্যে পার্থক্য হল:

*preventDefault() কোনো element-এর default behavior বন্ধ করে। যেমন:form submit হলে reload হওয়া

*stopPropagation() এটা হলো Event propagation বন্ধ করে, মানে event আর parent elements-এ যাবে না, bubblingথেমে যাবে, Default behavior থাকে.