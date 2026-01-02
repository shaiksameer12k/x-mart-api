/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Orders APIs
 */

/**
 * @swagger
 * /api/v1/Orders:
 *   get:
 *     tags: [Orders]
 *     summary: Get Orders List
 *     description: Get Orders List.
 *     responses:
 *       200:
 *         description: Successfully Order List Fetched
 */

/**
 * @swagger
 * /api/v1/mycart/{user_id}:
 *   get:
 *     tags: [Orders]
 *     summary: Get Cart List
 *     description: Get Cart List.
 *     parameters:
 *      - in: path
 *        name: user_id
 *        requred: true
 *        schema:
 *          type: number
 *        description: user_id Cart
 *     responses:
 *       200:
 *         description: Successfully Cart List Fetched
 */

/**
 * @swagger
 * /api/v1/order:
 *   post:
 *     tags: [Orders]
 *     summary: Insert Order Item
 *     description: Insert Order Item.
 *     requestBody:
 *          requred: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_id:
 *                              type: number
 *                          status:
 *                              type: string
 *                          Order_id:
 *                              type: number
 *                          quantity:
 *                              type: number
 *                          price:
 *                              type: number
 *                          method:
 *                              type: string
 *     responses:
 *       200:
 *         description: Orders Inserted successfully
 */

/**
 * @swagger
 * /api/v1/order:
 *   put:
 *     tags: [Orders]
 *     summary: Insert Order Item
 *     description: Insert Order Item.
 *     requestBody:
 *          requred: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_id:
 *                              type: number
 *                          status:
 *                              type: string
 *                          Order_id:
 *                              type: number
 *                          quantity:
 *                              type: number
 *                          price:
 *                              type: number
 *                          method:
 *                              type: string
 *     responses:
 *       200:
 *         description: Orders Inserted successfully
 */

/**
 * @swagger
 * /api/v1/Orders:
 *   delete:
 *     tags: [Orders]
 *     summary: Delete Order Item
 *     description: Get Order Item.
 *     parameters:
 *      - in: quary
 *        name: Orders_id
 *        schema:
 *          type: number
 *        description: Delete Prodect_id
 *     responses:
 *       200:
 *         description: Successfully Order Deleted
 */
