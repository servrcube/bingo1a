

$(document).ready(function(){
    let selectedAmount = 0;
    let coinCount = 10;
    $(".table").on("click",".unselected",function(){
        if(selectedAmount<coinCount){
            $(this).toggleClass("unselected selected");
            selectedAmount += 1;
            $("#coin_count").text(coinCount-selectedAmount);
        }
    });

    function setValues(options){

        let values = [
            [0,1,2,3],
            [4,5,6,7],
            [8,9,10,11],
            [12,13,14,15],
        ];

        let shuffled_options = shuffle(options);

        for(var x = 0; x < 4; x++){
            for(var y = 0; y < 4; y++){
                $(`.row-${x + 1}>.col-${y + 1}`).text(shuffled_options[values[x][y]]);
            }
            
        }
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

  });