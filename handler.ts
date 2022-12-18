// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function main(event: any) {
  console.log("Hello!");
  console.log("Region: ", process.env.REGION);
  console.log("Availability zones: ", process.env.AVAILABILITY_ZONES);

  return {
    body: JSON.stringify({ message: "SUCCESS!", testSuccess: true }),
    statusCode: 200,
  };
}

module.exports = { main };
