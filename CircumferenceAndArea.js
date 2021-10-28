function circumference(radius)
{
  let circumference = radius*2*Math.PI
  return circumference;
}

function area(radius)
{
  let area = Math.PI*radius*radius;
  return area;
}

const radius = Number(prompt("Enter the radius of a circle"));

alert("The circumference of the circle is " +circumference(radius) + " the area of the cricle is " +area(radius));
