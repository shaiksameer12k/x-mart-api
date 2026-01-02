/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products APIs
 */

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     tags: [Products]
 *     summary: Get Products List
 *     description: Get Products List.
 *     responses:
 *       200:
 *         description: Successfully Product List Fetched
 */

/**
 * @swagger
 * /api/v1/products:
 *   post:
 *     tags: [Products]
 *     summary: Insert Product Item
 *     description: Insert Product Item.
 *     requestBody:
 *          requred: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          description:
 *                              type: string
 *                          stock:
 *                              type: string
 *                          price:
 *                              type: string
 *                          category_id:
 *                              type: string
 *                          products:
 *                              type: file
 *     responses:
 *       200:
 *         description: Products Inserted successfully
 */

/**
 * @swagger
 * /api/v1/products:
 *   put:
 *     tags: [Products]
 *     summary: Update Product Item
 *     description: Update Product Item.
 *     requestBody:
 *          requred: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          description:
 *                              type: string
 *                          stock:
 *                              type: string
 *                          price:
 *                              type: string
 *                          category_id:
 *                              type: string
 *                          products:
 *                              type: file
 *     responses:
 *       200:
 *         description: Products Inserted successfully
 */

/**
 * @swagger
 * /api/v1/products/{product_id}:
 *   delete:
 *     tags: [Products]
 *     summary: Delete Product Item
 *     description: Delete Product Item by ID
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Product ID to delete
 *     responses:
 *       200:
 *         description: Successfully Product Deleted
 */
