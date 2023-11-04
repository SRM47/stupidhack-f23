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

function on_login_form_submit() {

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

setTimeout(move_divs, 10000);
