const express = require('express');
const validate = require('../../../middlewares/validate');
const Section2A21Controller = require('../../../controllers/masterControllers/section2A(2.1 to 1.21).controller');
const Section2A21Validation = require('../../../validations/masterValidations/section2A(2.1 to 1.21).validation');

const router = express.Router();

router
  .route('/')
  .post(validate(Section2A21Validation.createSection2A21), Section2A21Controller.createSection2A21)
  .get(validate(Section2A21Validation.getAllSection2A21), Section2A21Controller.getAllSection2A21);

router
  .route('/:Section2A21Id')
  .get(validate(Section2A21Validation.getSection2A21), Section2A21Controller.getSection2A21ById)
  .patch(validate(Section2A21Validation.updateSection2A21), Section2A21Controller.updateSection2A21)
  .delete(validate(Section2A21Validation.deleteSection2A21), Section2A21Controller.deleteSection2A21);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Section2A21
 *   description: section1E(1.61-1.62) form-10
 */

/**
 * @swagger
 * /Section2A21:
 *   post:
 *     summary: Create a Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - totalpcavi
 *               - functpcavai
 *               - totallaptopavi
 *               - functlaptopavai
 *               - totaltabletavai
 *               - functtabletavai
 *               - totalteacherlerandevavai
 *               - functteacherlerandevavai
 *               - totalCMSavai
 *               - functCMSavai
 *               - totalprojectoravai
 *               - functprojectoravai
 *               - totalprinteravai
 *               - functprinteravai
 *               - totalscanneravai
 *               - functscanneravai
 *               - totalserveravai
 *               - functserveravai
 *               - totalwebcamavai
 *               - functwebcamavai
 *               - totalsmarttvavai
 *               - functsmarttvavai
 *               - totalsmartclassavai
 *               - functsmartclassavai
 *               - totalmobusedforteachingavai
 *               - functmobusedforteachingavai
 *               - totalradioavai
 *               - functradioavai
 *               - totalupsavai
 *               - functupsavai
 *               - internetf
 *               - typeofinternet
 *               - internetpurpose
 *               - computerlab
 *               - econtent
 *               - cwsn
 *               - dth
 *               - digitallab
 *               - ebookavi
 *               - ictteacher
 *               - noofhours
 *               - ictlab
 *               - yearofimplant
 *               - ictlabfunct
 *               - model1
 *               - ictinst
 *             example:
 *               totalpcavi: "3"
 *               functpcavai: "32"
 *               totallaptopavi: "22"
 *               functlaptopavai: "21"
 *               totaltabletavai: "22"
 *               functtabletavai: "32"
 *               totalteacherlerandevavai: "32"
 *               functteacherlerandevavai: "54"
 *               totalCMSavai: "22"
 *               functCMSavai: "2"
 *               totalprojectoravai: "54"
 *               functprojectoravai: "12"
 *               totalprinteravai: "32"
 *               functprinteravai: "7"
 *               totalscanneravai: "3"
 *               functscanneravai: "2"
 *               totalserveravai: "50"
 *               functserveravai: "54"
 *               totalwebcamavai: "12"
 *               functwebcamavai: "65"
 *               totalsmarttvavai: "65"
 *               functsmarttvavai: "32"
 *               totalsmartclassavai: "65"
 *               functsmartclassavai: "75"
 *               totalmobusedforteachingavai: "12"
 *               functmobusedforteachingavai: "3"
 *               totalradioavai: "32"
 *               functradioavai: "22"
 *               totalupsavai: "21"
 *               functupsavai: "22"
 *               internetf: Broadband
 *               typeofinternet: DSL
 *               internetpurpose: Research
 *               computerlab: Yes
 *               econtent: Avaialable
 *               cwsn: Yes
 *               dth: No
 *               digitallab: Yes
 *               ebookavi: Available
 *               ictteacher: John Smit
 *               noofhours: "22"
 *               ictlab: Room 101
 *               yearofimplant: "2022"
 *               ictlabfunct: Yes
 *               model1: HP Pavilion
 *               ictinst: XYZ Institute
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2A21'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: Residential
 *         schema:
 *           type: string
 *         description: Residential name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Section2A21'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /Section2A21/{Section2A21Id}:
 *   get:
 *     summary: Get a Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2A21Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2A21Id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2A21'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2A21Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2A21Id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               - totalpcavi
 *               - functpcavai
 *               - totallaptopavi
 *               - functlaptopavai
 *               - totaltabletavai
 *               - functtabletavai
 *               - totalteacherlerandevavai
 *               - functteacherlerandevavai
 *               - totalCMSavai
 *               - functCMSavai
 *               - totalprojectoravai
 *               - functprojectoravai
 *               - totalprinteravai
 *               - functprinteravai
 *               - totalscanneravai
 *               - functscanneravai
 *               - totalserveravai
 *               - functserveravai
 *               - totalwebcamavai
 *               - functwebcamavai
 *               - totalsmarttvavai
 *               - functsmarttvavai
 *               - totalsmartclassavai
 *               - functsmartclassavai
 *               - totalmobusedforteachingavai
 *               - functmobusedforteachingavai
 *               - totalradioavai
 *               - functradioavai
 *               - totalupsavai
 *               - functupsavai
 *               - internetf
 *               - typeofinternet
 *               - internetpurpose
 *               - computerlab
 *               - econtent
 *               - cwsn
 *               - dth
 *               - digitallab
 *               - ebookavi
 *               - ictteacher
 *               - noofhours
 *               - ictlab
 *               - yearofimplant
 *               - ictlabfunct
 *               - model1
 *               - ictinst
 *             example:
 *               totalpcavi: "3"
 *               functpcavai: "32"
 *               totallaptopavi: "22"
 *               functlaptopavai: "21"
 *               totaltabletavai: "22"
 *               functtabletavai: "32"
 *               totalteacherlerandevavai: "32"
 *               functteacherlerandevavai: "54"
 *               totalCMSavai: "22"
 *               functCMSavai: "2"
 *               totalprojectoravai: "54"
 *               functprojectoravai: "12"
 *               totalprinteravai: "32"
 *               functprinteravai: "7"
 *               totalscanneravai: "3"
 *               functscanneravai: "2"
 *               totalserveravai: "50"
 *               functserveravai: "54"
 *               totalwebcamavai: "12"
 *               functwebcamavai: "65"
 *               totalsmarttvavai: "65"
 *               functsmarttvavai: "32"
 *               totalsmartclassavai: "65"
 *               functsmartclassavai: "75"
 *               totalmobusedforteachingavai: "12"
 *               functmobusedforteachingavai: "3"
 *               totalradioavai: "32"
 *               functradioavai: "22"
 *               totalupsavai: "21"
 *               functupsavai: "22"
 *               internetf: Broadband
 *               typeofinternet: DSL
 *               internetpurpose: Research
 *               computerlab: Yes
 *               econtent: Avaialable
 *               cwsn: Yes
 *               dth: No
 *               digitallab: Yes
 *               ebookavi: Available
 *               ictteacher: John Smit
 *               noofhours: "22"
 *               ictlab: Room 101
 *               yearofimplant: "2022"
 *               ictlabfunct: Yes
 *               model1: HP Pavilion
 *               ictinst: XYZ Institute
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section2A21'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a type Section2A21
 *     tags: [Section2A21]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: Section2A21Id
 *         required: true
 *         schema:
 *           type: string
 *         description: Section2A21Id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
