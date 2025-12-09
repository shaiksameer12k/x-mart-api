/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags: [Auth]
 *     summary: Login user
 *     description: Logs in a user using email/phone and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */
