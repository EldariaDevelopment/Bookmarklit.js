<script>
window.onload = function Start1() {
  let Command = prompt("Enter Entry");
  let x = 1;

  switch (Command) {
    case "time":
      alert(Date());
      break;
    case "Calc":
      Calc()
      break;
    default:
      text = "No value found";
  }
  document.getElementById("demo").innerHTML = text;
}

function Calc() {
 	let CalcX = prompt("Enter first number");
    let CalcY = prompt("Enter Operator");
	let CalcZ = prompt("Enter Second number");
  switch(CalcY) {
    case "**":
      resultNum = (CalcX ** CalcZ);
      alert(resultNum)
      break;
    case "*":
      resultNum = (CalcX * CalcZ);
      alert(resultNum)
      break;
    case "+":
      resultNum = (CalcX + CalcZ);
      alert(resultNum)
      break;
    case "-":
      resultNum = (CalcX - CalcZ);
      alert(resultNum)
      break;
    case "/":
      resultNum = (CalcX / CalcZ);
      alert(resultNum)
      break;
  }
}
</script>
//javascript: (() => {   alert(Date());; })();
