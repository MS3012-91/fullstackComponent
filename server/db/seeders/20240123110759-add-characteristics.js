'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert(
       "characteristics",
       [
         {
           title: "elegance",
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           title: "grace like a leopard",
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           title: "gentle",
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           title: "brave",
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           title: "controller",
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           title: "nurturer",
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           title: "energy",
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           title: "friendly",
           created_at: new Date(),
           updated_at: new Date(),
         },
         {
           title: "good for new owners",
           created_at: new Date(),
           updated_at: new Date(),
         },
       ],
       {}
     );
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete("characteristics", null, {});
    
  }
};
