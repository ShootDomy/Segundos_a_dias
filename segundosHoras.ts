process.stdin.resume();
process.stdin.setEncoding("utf-8");

process.stdin.on("data", function (data: string) {
  const seconds = parseInt(data.trim(), 10);

  function solution(seconds: number): string {
    if (seconds === 0) return "now";

    const units = [
      { name: "year", seconds: 365 * 24 * 60 * 60 },
      { name: "day", seconds: 24 * 60 * 60 },
      { name: "hour", seconds: 60 * 60 },
      { name: "minute", seconds: 60 },
      { name: "second", seconds: 1 },
    ];

    const result: string[] = [];

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

  const out_ = solution(seconds);
  process.stdout.write(out_.toString() + "\n");
  process.exit();
});
