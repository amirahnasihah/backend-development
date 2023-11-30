const { Router } = require("express");
const { getAllBooks } = require("../controllers/book.controller");

const router = Router();

// bookRouter
router.route("/").get(getAllBooks);

// OPEN API ROUTE DOCS
/**
 * @openapi
 * "/api/books/":
 *  get:
 *    tags:
 *      - Books
 *    summary: Get all the books
 *    responses:
 *      200:
 *        description: Success, return an array of all the books
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/BookDto"
 *      500:
 *        description: Internal server error occurred
 *  post:
 *    tags:
 *      - Books
 *    summary: Create a new book
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/CreateBookDto"
 *    responses:
 *      201:
 *        description: Accepted, created a new book
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/BookDto"
 *
 * /api/books/{id}:
 *  patch:
 *    tags:
 *      - Books
 *    summary: Update book by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/UpdateBookDto"
 *    responses:
 *      202:
 *        descritpion: Successfully updated the book
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/BookDto"
 *  delete:
 *    tags:
 *      - Books
 *    summary: delete book by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        descritpion: Successfully deleted the book
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/BookDto"
 */

module.exports = router;
