// Make the DIV element draggable:
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("title"));


// Login form handler
let login_form = document.getElementById("login_form");
login_form.addEventListener("submit", (e) => {
       e.preventDefault();

       // handle submit
       let username = document.getElementById("username").value;
       let password = document.getElementById("password").value;
       document.getElementById("username").value = "";
       document.getElementById("password").value = "";
       
       console.log(username);
       console.log(password);
});

const scale_factor = 3;
const moving_divs = document.getElementsByClassName('moving_div');
let moving_divs_information = [];
for (const element of moving_divs) {
       console.log();
       let info = {
              "x": element.offsetLeft,
              "y": element.offsetTop,
              "direction_x": 1,
              "direction_y": 1,
              "velocity_x": Math.random() * scale_factor,
              "velocity_y": Math.random() * scale_factor
       }
       moving_divs_information.push(info);
}

function move_divs() {
       const viewportWidth = window.innerWidth;
       const viewportHeight = window.innerHeight;

       for (let i = 0; i < moving_divs.length; i++) {

              const curr_moving_div = moving_divs[i];
              const curr_info = moving_divs_information[i];


              const new_x = curr_info.x + curr_info.velocity_x * curr_info.direction_x;
              const new_y = curr_info.y + curr_info.velocity_y * curr_info.direction_y;

              if (new_x + curr_moving_div.clientWidth >= viewportWidth || new_x <= 0) {
                     curr_info.direction_x = curr_info.direction_x * -1; // Reverse the direction on collision
              }

              if (new_y - curr_moving_div.clientHeight >= viewportHeight || new_y <= 0) {
                     curr_info.direction_y = curr_info.direction_y * -1; // Reverse the direction on collision
              }

              curr_moving_div.style.left = new_x + 'px';
              curr_moving_div.style.top = new_y + 'px';

              curr_info.x = new_x;
              curr_info.y = new_y;

       }
       requestAnimationFrame(move_divs); // Recursively call move_divs for smooth animation
}

setTimeout(move_divs, 1000);
