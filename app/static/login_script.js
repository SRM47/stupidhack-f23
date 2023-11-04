// Make the DIV element draggable:
localStorage.setItem("login", "True!");
let draggable = document.getElementById("guest_login_cover");

function dragElement(elmnt) {
       var pos1 = 0,
              pos2 = 0,
              pos3 = 0,
              pos4 = 0;
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
dragElement(draggable);


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

const scale_factor = 4;
const moving_divs = document.getElementsByClassName('moving_div');

console.log(document.getElementById("outer").getBoundingClientRect())
let moving_divs_information = [];
for (const element of moving_divs) {

       let info = {
              "x": 0,
              "y": 0,
              "direction_x": 1,
              "direction_y": 1,
              "velocity_x": Math.random() * scale_factor,
              "velocity_y": Math.random() * scale_factor
       }
       moving_divs_information.push(info);
}



function move_divs() {
       for (let i = 0; i < moving_divs.length; i++) {
              const curr_moving_div = moving_divs[i];
              const curr_info = moving_divs_information[i];

              const outer_div = document.getElementById("outer");
              const outer_rectangle = outer_div.getBoundingClientRect();
              const inner_rectangle = curr_moving_div.getBoundingClientRect();

              const x_offset = inner_rectangle.x-outer_rectangle.x;
              const y_offset = inner_rectangle.y-outer_rectangle.y;

              const new_x = curr_info.x + curr_info.velocity_x * curr_info.direction_x;
              const new_y = curr_info.y + curr_info.velocity_y * curr_info.direction_y;

              if (new_x + inner_rectangle.width >= outer_rectangle.width-x_offset) {
                     curr_info.direction_x = -1; // Reverse the direction on collision
              }

              if (new_x <= 0-x_offset) {
                     curr_info.direction_x = 1;
               
              }

              if (new_y + inner_rectangle.height >= outer_rectangle.height-y_offset) {
                     curr_info.direction_y = -1; // Reverse the direction on collision
             
              }

              if (new_y <= 0-y_offset) {
                     curr_info.direction_y = 1;
                   
              }

              curr_moving_div.style.left = new_x + 'px';
              curr_moving_div.style.top = new_y + 'px';

              curr_info.x = new_x;
              curr_info.y = new_y;

       }
       requestAnimationFrame(move_divs); // Recursively call move_divs for smooth animation
}

setTimeout(move_divs, 5000);