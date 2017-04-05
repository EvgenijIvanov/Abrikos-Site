//user custom libs
document.addEventListener("DOMContentLoaded", function () {
    function timer () {
        var today = new Date();
        var BigDay = new Date("Mar 20, 2017");
        var msPerDay = 24 * 60 * 60 * 1000;
        var timeLeft = (today.getTime() - BigDay.getTime());
        var e_daysLeft = timeLeft / msPerDay;
        var daysLeft = Math.floor(e_daysLeft);
        var e_hrsLeft = (e_daysLeft - daysLeft)*24;
        var hrsLeft = Math.floor(e_hrsLeft);
        var minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);
        document.querySelector(".time-wrapper").innerHTML = '<span class="time day">'+daysLeft+' дней</span>' +
                                                            '<span class="time hours">'+hrsLeft+' часов</span>' +
                                                            '<span class="time minutes">'+minsLeft+' минут</span>';
    } timer();

   document.querySelector('.container-items').addEventListener("click", function (e) {
       if(e.target.className == 'fa fa-plus-circle'){
           magicPopap(e)
       }
   });

   function magicPopap(e) {
        document.querySelector('.hidden-popap').style.display = 'block';
        document.querySelector('.content').innerHTML = '<img src="img/'+e.target.offsetParent.offsetParent.dataset.img+'">';
        document.querySelector('.hidden-popap').addEventListener('click', function (e) {
            if(e.target.className == "hidden-popap" || e.target.className == 'fa fa-times-circle'){
                document.querySelector('.hidden-popap').style.display = 'none';
            } else {
                return true;
            }
        });
    }
    document.querySelector('.index-menu').addEventListener("click", function () {
        document.querySelector('.back-menu').classList.toggle("back-menu__open");
        document.querySelector('.index-menu').classList.toggle("shadow-open");
        document.querySelectorAll('.icon').forEach(function(item) {
            item.classList.toggle("open");
        });
    })
});
