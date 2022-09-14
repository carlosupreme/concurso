function ops(params) {
  const resultArray = [];
  const sumar2Ultimos = (a) => a.push(a[a.length - 1] + a[a.length - 2]);
  const multiplicarUltimoPor2 = (a) => a.push(a[a.length - 1] * 2);

  params.forEach((element) => {
    if (!isNaN(parseInt(element))) resultArray.push(parseInt(element));

    if (element === "+" && resultArray.length >= 2) sumar2Ultimos(resultArray);

    if (element === "D" && resultArray.length > 0)
      multiplicarUltimoPor2(resultArray);

    if (element == "C" && resultArray.length > 0) resultArray.pop();
  });

  return resultArray.reduce((suma, num) => suma + num, 0);
}

console.log(ops(["100", "C", "5", "D", "+" ,"C"])); // ->15

console.log(ops(["3", "4", "+", "C", "D", "2"])); //i 17
