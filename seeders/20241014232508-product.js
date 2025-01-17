'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          id: '1373772c-125c-42d0-81ae-a6d020fcbe21',
          name: 'Bread',
          quantity: 4,
          inStock: true,
          productImage:
            'https://res.cloudinary.com/morelmiles/image/upload/v1649765314/download_nwfpru.jpg',
          // Store the price in cents e.g if price is $5, multiply by 100 cents e.g 5 * 100 = 500 cents
          price: 500,
          expiryDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '9df55a7c-772c-459f-a21b-933a96981ca6',
          name: 'Milk',
          quantity: 4,
          inStock: true,
          productImage:
            'https://res.cloudinary.com/morelmiles/image/upload/v1647356184/milk_ckku96.jpg',
          // Store the price in cents e.g if the price is $5, multiply by 100 cents e.g 5 * 100 = 500 cents
          price: 100,
          expiryDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};