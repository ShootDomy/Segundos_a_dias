process.stdin.resume();
process.stdin.setEncoding("utf-8");

var input_ = "";

process.stdin.on("data", function (data) {
  input_ += data.toString().trim();
  input_ += "\n";
});

function solution(seconds) {
  // You must complete the logic for the function that is provided
  // before compiling or submitting to avoid an error.

  // Write your code here
  if (seconds === 0) return "now";

  const units = [
    { name: "year", seconds: 365 * 24 * 60 * 60 },
    { name: "day", seconds: 24 * 60 * 60 },
    { name: "hour", seconds: 60 * 60 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  let result = [];

  units.forEach((unit) => {
    const quantity = Math.floor(seconds / unit.seconds);

    if (quantity > 0) {
      result.push(`${quantity} ${unit.name}${quantity > 1 ? "s" : ""}`);
      seconds -= quantity * unit.seconds;
    }
  });

  return result.length === 1
    ? result[0]
    : result.slice(0, -1).join(", ") + " and " + result[result.length - 1];
}

process.stdin.on("end", function () {
  input_ = input_.replace(/\n$/, "");
  input_ = input_.split("\n");

  var idx_ = 0;
  var seconds = parseInt(input_[idx_++].trim(), 10);

  var out_ = solution(seconds);
  process.stdout.write(out_.toString());

  process.exit();
});
