const { prisma } = require("./common");
const { faker } = require("@faker-js/faker");

const seed = async (numOfUsers = 3, numOfPlaylists = 5) => {
 for (let i = 0; i < numOfUsers; i++) {
  try {
   const user = await prisma.user.create({
    data: {
      username: faker.internet.username(),
      playlists: {
        create: Array.from({ length: numOfPlaylists }, () => ({
          name: faker.music.artist(),
            description: faker.lorem.sentences(),
          })),
        },
      },
    });
    console.log("Seeded to database");
  } catch (error) {
    console.error(error);
  }
}
};

seed();
