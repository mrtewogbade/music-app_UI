
        var ele2 = document.getElementById("slider-left");
        var ele3 = document.getElementById("slider-circle");
        var i = 0;
        var j;
        var time = document.getElementById("time");
        var song = document.getElementById("song-name");
        var album = document.getElementById("album-name");
        var songArray = [
            "Drag me down",
            "Blank space",
            "Memories",
            "Perfect",
            "Dynamite",
            "Wildest dreams",
            "Love me like you do"
        ];

        var albumArray = [
            "One direction",
            "Taylor Swift",
            "Maroon5",
            "Ed Sheeran",
            "BTS",
            "Taylor Swift",
            "Ellie Goulding"
        ];

        var timeArray = ["01:20", "00:69", "03:00", "01:40", "02:10", "00:43", "2:01"];

        var repeat = document.getElementById("repeatSvg");

        var shuffle = document.getElementById("shuffleSvg");

        var element = document.getElementById("play");

        var element2 = document.getElementById("pause");

        function openList() {
            var list = document.getElementById("list");
            list.classList.add("block");
        }

        function clickedPlay() {
            element.classList.toggle("clicked"); document.getElementById("triangle").classList.toggle("opacity");
            element2.classList.toggle("opacity0");
            var ele4 = document.getElementById("l");
            var ele5 = document.getElementById("l1");
            var ele6 = document.getElementById("l2");
            var ele7 = document.getElementById("l3");
            var ele8 = document.getElementById("l4");
            var ele9 = document.getElementById("l5");

            if (element.className == "play") {
                ele2.style.webkitAnimationPlayState = "running";
                ele3.style.webkitAnimationPlayState = "running";
                ele4.style.webkitAnimationPlayState = "running";
                ele5.style.webkitAnimationPlayState = "running";
                ele6.style.webkitAnimationPlayState = "running";
                ele7.style.webkitAnimationPlayState = "running";
                ele8.style.webkitAnimationPlayState = "running";
                ele9.style.webkitAnimationPlayState = "running";
            } else {
                ele2.style.webkitAnimationPlayState = "paused";
                ele3.style.webkitAnimationPlayState = "paused";
                ele4.style.webkitAnimationPlayState = "paused";
                ele5.style.webkitAnimationPlayState = "paused";
                ele6.style.webkitAnimationPlayState = "paused";
                ele7.style.webkitAnimationPlayState = "paused";
                ele8.style.webkitAnimationPlayState = "paused";
                ele9.style.webkitAnimationPlayState = "paused";
            }
        }

        for (j = 1; j < songArray.length + 1; j++) {
            document.getElementById(`song${j}`).innerHTML = songArray[j - 1];
            document.getElementById(`album${j}`).innerHTML = albumArray[j - 1];
            document.getElementById(`time${j}`).innerHTML = timeArray[j - 1];
        }

        var intervalId = window.setInterval(function () {
            var comp = getComputedStyle(ele3).left;

            if (
                i < songArray.length - 1 &&
                getComputedStyle(repeat).fill !== "rgb(60, 207, 207)" &&
                Math.round(comp.slice(0, -2)) >= 251 &&
                getComputedStyle(document.getElementById("triangle")).opacity == 0
            ) {
                i++;
                song.innerHTML = songArray[i];
                album.innerHTML = albumArray[i];
                time.innerHTML = timeArray[i];
            } else if (i >= songArray.length - 1) {
                i = -1;
            }
        }, 600);

        function nextSong() {
            if (i < songArray.length - 1) {
                i++;
                pauseLogic();
            } else {
                i = songArray.length - 1;
            }
            song.innerHTML = songArray[i];
            album.innerHTML = albumArray[i];
            time.innerHTML = timeArray[i];
        }

        function previousSong() {
            if (i > 0) {
                i--;
                pauseLogic();
            } else {
                i = 0;
            }
            song.innerHTML = songArray[i];
            album.innerHTML = albumArray[i];
            time.innerHTML = timeArray[i];
        }

        function goBack() {
            var list = document.getElementById("list");
            list.classList.remove("block");
        }

        function songClick(e) {
            var list = document.getElementById("list");
            list.classList.remove("block");
            var x =
                e.path[0].id.substr(e.path[0].id.length - 1) ||
                e.path[3].id.substr(e.path[3].id.length - 1) ||
                e.path[1].id.substr(e.path[1].id.length - 1) ||
                e.path[2].id.substr(e.path[2].id.length - 1);
            song.innerHTML = songArray[x - 1];
            album.innerHTML = albumArray[x - 1];
            time.innerHTML = timeArray[x - 1];
            pauseLogic();
        }

        function pauseLogic() {
            ele2.classList.remove("animateBlue");
            ele3.classList.remove("circleAnimate");
            void ele2.offsetWidth;
            ele2.classList.add("animateBlue");
            ele3.classList.add("circleAnimate");
            element.classList.remove("clicked");
            document.getElementById("triangle").classList.remove("opacity");
            element2.classList.remove("opacity0");
            ele2.style.webkitAnimationPlayState = "running";
            ele3.style.webkitAnimationPlayState = "running";
        }

        function repeatSVG() {
            if (getComputedStyle(repeat).fill == "rgb(60, 207, 207)") {
                repeat.style.fill = "#7d7d7d";
                repeat.classList.remove("animateRepeat")
            } else {
                repeat.style.fill = "#3ccfcf";
                repeat.classList.add("animateRepeat")
            }
        }

