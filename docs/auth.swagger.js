/**
 * @swagger
 * tags:
 *   name: User Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     tags: [User Auth]
 *     summary: Login user
 *     description: Logs in a user using email/phone and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               emailOrPhone:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 */

/**
 * @swagger
 * /api/v1/signup:
 *   post:
 *     tags: [User Auth]
 *     summary: Sign up user
 *     description: User Sign up for xmart.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               full_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               city:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sign up successful
 */
