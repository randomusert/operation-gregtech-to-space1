ServerEvents.recipes((event) => {
  event.shaped(
    Item.of("kubejs:iron_core", 1), // arg 1: output
    [
      "AAA",
      "A A", // arg 2: the shape (array of strings)
      "AAA",
    ],
    {
      A: "minecraft:iron_ingot",
    },
  );
});
