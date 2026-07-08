<!DOCTYPE html>
<html lang="en">

<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link rel="stylesheet" href="./domyt.css">
</head>

<body>
          <p id="one">Hi i am ashvi</p>
          <p id="two">I complete my higher studys</p>
</body>
<script>
          let ash = document.getElementById("one")
          console.log(ash);
          let ash1 = document.getElementById("two")
          console.log(ash1.textContent);
var a = 10;
var b = 20;
console.log(a + b);



//output
/*<p id="one">Hi i am ashvi</p> --> one
I complete my higher studys -->two*/


</script>
// onclick event
</html>
<!DOCTYPE html>
<html lang="en">

<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>onclick Function</title>
</head>

<body>
          <!-- <h1 id="h1">Hello World</h1>
          <button onclick="change()">change</button> -->
          <input id="num1">
          <input id="num2">
          <button onclick="resultfunction()">Add</button>
          <p id="Result">Result</p>
</body>
<script>
          // let ash = document.getElementById("h1")
          // console.log(h1.textContent);

          // function change() {

          //           h1.textContent = "Bye world"
          // }
          // selecting inputbox1
          //selecting inputbox2
          var ash1 = document.getElementById("num1")
          var ash2 = document.getElementById("num2")
          //selecting result
          var result = document.getElementById("Result")
          function resultfunction() {
                    console.log(ash1.value);
                    console.log(ash2.value);
                    total = Number(ash1.value) + Number(ash2.value)
                    console.log(total);

          }


</script>

</html>

          //output for this code is visible in console not in webpage 

          <!DOCTYPE html>
<html lang="en">

<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>onclick Function</title>
</head>

<body>
          <!-- <h1 id="h1">Hello World</h1>
          <button onclick="change()">change</button> -->
          <input id="num1" value="2">
          <input id="num2" value="2">
          <button onclick="resultfunction()">Add</button>
          <p id="result">Result</p>
</body>
<script>
          // let ash = document.getElementById("h1")
          // console.log(h1.textContent);

          // function change() {

          //           h1.textContent = "Bye world"
          // }
          // selecting inputbox1
          //selecting inputbox2
          var ash1 = document.getElementById("num1")
          var ash2 = document.getElementById("num2")
          //selecting result
          var result = document.getElementById("result")
          var ash1value = Number(ash1.value)
          var ash2value = Number(ash2.value)
          var total = ash1value + ash2value
          function resultfunction() {

                    result.textContent = total


          }


</script>

</html>

          //output will show in html webpage but only defalut number already enter in this html file 

<!DOCTYPE html>
<html lang="en">

<head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>onclick Function</title>
</head>

<body>
          <h1 id="h1">Hello World</h1>
          <button onclick="change()">change</button>
</body>
<script>
          let ash = document.getElementById("h1")
          console.log(h1.textContent);

          function change() {

                    h1.textContent = "Bye world"
          }



</script>

</html>
