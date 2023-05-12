document.getElementById("rock").onclick = function () {
    let random = Math.floor(Math.random() * 3 + 1);
    let rock = document.getElementById("rock_c");
    let scissors = document.getElementById("scissors_c");
    let paper = document.getElementById("paper_c");
    let win = document.getElementById("win");
    let lose = document.getElementById("lose");
    let draw = document.getElementById("draw");
    console.log(random)
  
    if (random === 1) {
        rock.style.backgroundColor = 'grey';
        draw.style.display = "block";
      } else if (random === 2) {
        scissors.style.backgroundColor = 'blue';
        win.style.display = "block";
      } else if (random === 3) {
        paper.style.backgroundColor = 'green';
        lose.style.display = "block";
      }
      
  };

  document.getElementById("scissors").onclick = function () {
    let random = Math.floor(Math.random() * 3 + 1);
    let rock = document.getElementById("rock_c");
    let scissors = document.getElementById("scissors_c");
    let paper = document.getElementById("paper_c");
    let win = document.getElementById("win");
    let lose = document.getElementById("lose");
    let draw = document.getElementById("draw");
    console.log(random)
  
    if (random === 1) {
        rock.style.backgroundColor = 'grey';
        lose.style.display = "block";
      } else if (random === 2) {
        scissors.style.backgroundColor = 'blue';
        draw.style.display = "block";
      } else if (random === 3) {
        paper.style.backgroundColor = 'green';
        win.style.display = "block";
      }
      
  };

  document.getElementById("paper").onclick = function () {
    let random = Math.floor(Math.random() * 3 + 1);
    let rock = document.getElementById("rock_c");
    let scissors = document.getElementById("scissors_c");
    let paper = document.getElementById("paper_c");
    let win = document.getElementById("win");
    let lose = document.getElementById("lose");
    let draw = document.getElementById("draw");
    console.log(random)
  
    if (random === 1) {
        rock.style.backgroundColor = 'grey';
        win.style.display = "block";
      } else if (random === 2) {
        scissors.style.backgroundColor = 'blue';
        lose.style.display = "block";
      } else if (random === 3) {
        paper.style.backgroundColor = 'green';
        draw.style.display = "block";
      }
      
  };

  document.getElementById("reset").addEventListener("click", function() {
    location.reload();
});