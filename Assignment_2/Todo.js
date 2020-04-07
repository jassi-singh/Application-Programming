var todo = ["Todo"];
console.log(todo);
var input = "hi";
while (input !== "View")
{
    
    input = prompt("What you want to do?");
    if (input === "Add")
     {
         var add = prompt("Add new todo.");
        todo.push(add);
     }
}
document.getElementById("todo").innerHTML = todo;
