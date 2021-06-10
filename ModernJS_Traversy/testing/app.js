console.time('checkTime');

let elMastHead = document.getElementById('mastHead');
elMastHead.textContent = "JS Sandbox Masthead";

let elHeaderOne = document.getElementById('headerOne');
elHeaderOne.textContent = "JS Sandbox: Section 1";

let elTableHolder = document.getElementById("holder");
elTableHolder.textContent = "Never once touched my per diem. I'd go to Craft Service, get some raw veggies, bacon, Cup-A-Soup…baby, I got a stew goin'." + 
    " It's sort of like going from prime rib to… I don't know… weird brother of prime rib. And that is why Jesus was often referred to as the King of Kings. Queens. The King of Queens. " + 
    "Well, obviously, I'm not a big guy. I'm not a Carl Weathers, par example. George Michael, you want to put your head down there by his drainage shunt? Let me give that oatmeal some brown sugar. ";

let elHeaderTwo = document.getElementById('headerTwo');
elHeaderTwo.textContent = "JS Sandbox: Section 2";

let elPara = document.getElementById("para");
elPara.textContent = "I'm inside a paragraph tag. A bunch of copy no one cares about. A bunch of copy no one cares about. " + 
    "A bunch of copy no one cares about. A bunch of copy no one cares about. A bunch of copy no one cares about. " + 
    "A bunch of copy no one cares about. A bunch of copy no one cares about.";

let elHeaderThree = document.getElementById('headerThree');
elHeaderThree.textContent = "JS Sandbox: Section 3";

let elHipsterTalk = document.getElementById('hipsterTalk');
elHipsterTalk.textContent = "I'm baby kale chips trust fund listicle actually vexillologist readymade vice occupy prism lumbersexual wolf austin raclette. " + 
    "flexitarian single-origin coffee. Humblebrag bitters before they sold out, authentic portland cloud bread +1 viral pickled squid vexillologist keytar. " +
    " Food truck pinterest ennui, locavore chambray raclette hot chicken af. Kickstarter pork belly offal williamsburg.";

console.log([1, 2, 3, 4,]);  // Array
console.log({a:1, b:2, c:3});  // object

console.timeEnd('checkTime');  // first run 1.07788085...