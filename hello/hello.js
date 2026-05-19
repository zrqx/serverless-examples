function main(args) {
  const name = args.name || "World";
  return {
    body: `Hello, ${name}!`,
    statusCode: 200
  };
}