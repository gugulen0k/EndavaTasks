const load = async () => {
  try {
    const module1 = await import("./module1.js");
    console.log("Module loaded!");
    module1.greeting();
  } catch (error) {
    console.log(error);
  }
};
