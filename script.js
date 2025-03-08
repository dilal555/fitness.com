
 function two(){
    scroll({
        left:0,
        top:812,
        behavior:'smooth'
    })
 }

 function threey(){
    scroll({
        left:0,
        top:1313,
        behavior:'smooth'
    })
 }

// for(let i = 0 ; i<12 ; i++ ){
//     let mounths = document.createElement('div');
//     mounths.className='onix'
//     for(let i =0 ; i < 30 ;i++){
//         mounths.innerHTML=[i]
//     }
//     document.getElementById('calendar').appendChild(mounths);
//     console.log(mounths)
// }
 

const calendarElement = document.getElementById('calendar');
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function createCalendar(year) {
    for (let month = 0; month < 12; month++) {
        const monthElement = document.createElement('div');
        monthElement.className = 'month';
        const monthTitle = document.createElement('h2');
        monthTitle.textContent = monthNames[month] + ' ' + year;
        monthElement.appendChild(monthTitle);

        const daysContainer = document.createElement('div');
        daysContainer.className = 'days';

        

        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day;
            daysContainer.appendChild(dayElement);

            dayElement.onclick = function (){
                dayElement.style.backgroundColor='lightBlue';
            }
        }
        // daysContainer.style.height = '100%';
        monthElement.appendChild(daysContainer);
        calendarElement.appendChild(monthElement);
    }
}

createCalendar(2025);


let menu = document.getElementById("menu1");

let menx = document.getElementById("menx");

let menx1 = document.getElementById("menx1");

let menx2 = document.getElementById("menx2");

let menx3 = document.getElementById("menx3");

let exit  = document.getElementById("menx0");


let videx2 = document.getElementById('fitness2');

let videx1 = document.getElementById('fitness1')

  menu.onclick = function (){
menx.classList.remove('hide');
// videx2.classList.add('hide');
// videx1.classList.add('hide');

  }

  exit.onclick= function (){
    menx.classList.add('hide')
    // videx2.classList.remove('hide');
    // videx1.classList.remove('hide');

    // videx.style.marginTop='-50px'
      }
 

      menx1.onclick = function(){
        window.location.href = 'vid.html';
      }


      menx2.onclick = function(){
        window.location.href = 'calendar.html';
      }


      menx3.onclick = function(){
        window.location.href = 'stopwatch.html';
      }