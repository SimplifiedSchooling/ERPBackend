const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const roleRoute = require('./role.route');
const videoRoute = require('./video.route');
const planvideoRoute = require('./planvideo.route');
const boardRoute = require('./board.route');
const classesRoute = require('./classes.route');
const chapterRoute = require('./chapter.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const mediumRoute = require('./medium.route');
const lessionRoute = require('./lession.route');
const subjectRoute = require('./subject.route');
const bookRoute = require('./book.route');
const broadcast = require('./broadcast.route');
const quizeRoute = require('./quiz.route');
const presentatorRoute = require('./presentator.route');
const studioRoute = require('./studio.route');
const multimediaRoute = require('./multimedia.route');
const ebookRoute = require('./ebook.route');
const homeworkRoute = require('./homework.route');
const quickRecapRoute = require('./quickrecap.route');
const managmentGroupSchoolRoute = require('./masterRoutes/managment.groupschool.route');
const managmentCodeSchoolRoute = require('./masterRoutes/managment.codeofSchool.route');
const managementAdministrationTypeRoute = require('./masterRoutes/management.administration.type.route');
const respondentRoute = require('./masterRoutes/respondent.route');
const schooleBuildingRout = require('./masterRoutes/school.building.route');
const ictgovschoolRoute = require('./masterRoutes/ICTGovSchool.route');
const typeofictschoolRoute = require('./masterRoutes/typeOfICT.route');

const schoolLocationRoute = require('./masterRoutes/school-location.route');
const inChargeTypeRoute = require('./masterRoutes/head.of.school.route');
const schoolcategoryRoute = require('./masterRoutes/school.category.route');
const districtRoute = require('./masterRoutes/distict.route');
const safetyAndSecurityRoute = require('./masterRoutes/safety.and.security.route');

const languageRoute = require('./masterRoutes/language.route');
const demolishedRoute = require('./demolished.route');

const typeresidentialschoolRouter = require('./masterRoutes/type_residential_school.route');
const Boardresidentialschool = require('./masterRoutes/boarding_residential_school.route');
const MinorityManageSchool = require('./masterRoutes/minority_manage_school.route');
const BoundaryWall = require('./masterRoutes/boundarywall.route');
const ClassroomAvailableRouter = require('./masterRoutes/classromm_available.route');



const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/videos',
    route: videoRoute,
  },
  {
    path: '/planvideos',
    route: planvideoRoute,
  },
  {
    path: '/boards',
    route: boardRoute,
  },
  {
    path: '/classes',
    route: classesRoute,
  },
  {
    path: '/medium',
    route: mediumRoute,
  },
  {
    path: '/lession',
    route: lessionRoute,
  },
  {
    path: '/chapter',
    route: chapterRoute,
  },
  {
    path: '/subjects',
    route: subjectRoute,
  },
  {
    path: '/books',
    route: bookRoute,
  },
  {
    path: '/broadcast',
    route: broadcast,
  },
  {
    path: '/quizes',
    route: quizeRoute,
  },
  {
    path: '/presentator',
    route: presentatorRoute,
  },
  {
    path: '/studio',
    route: studioRoute,
  },
  {
    path: '/multimedia',
    route: multimediaRoute,
  },
  {
    path: '/ebooks',
    route: ebookRoute,
  },
  {
    path: '/homework',
    route: homeworkRoute,
  },
  
  {
    path: '/quickrecaps',
    route: quickRecapRoute,
  },
  {

    path: '/managgroupschool',
    route: managmentGroupSchoolRoute,
  },
  {
    path: '/managCodeschool',
    route: managmentCodeSchoolRoute,
  },
  {
    path: '/managAdministrationType',
    route: managementAdministrationTypeRoute,
  },
  {
    path: '/RespondentType',
    route: respondentRoute,
  },
  {
    path: '/schoolBuilding',
    route: schooleBuildingRout,
  },
  {
    path:'/ictgovschool',
    route:ictgovschoolRoute
  },
  {
    path:'/typeictgovschool',
    route:typeofictschoolRoute
  },
  {
    path: '/inchargetype',
    route: inChargeTypeRoute
  },
  {
    path: '/schoolcategory',
    route: schoolcategoryRoute,
  },
  {
    path: '/district',
    route: districtRoute,
  },
  {
    path: '/safetyandsecurity',
    route: safetyAndSecurityRoute,
  },
  {
    path: '/language',
    route: languageRoute,
  },
  {
    path: '/typeresidentialschool',
    route: typeresidentialschoolRouter,
  },
  {
    path: '/boardresidentialschool',
    route: Boardresidentialschool,
  },
  {
    path: '/minoritymanageschool',
    route: MinorityManageSchool,
  },
  {
    path: '/roles',
    route: roleRoute,

  },
  {
    path: '/boundarywall',
    route: BoundaryWall,



  }, 
  {
    path: '/boundarywall',
    route: BoundaryWall,
  },
  {
    path: '/demolished',
    route: demolishedRoute,
  },
  {
    path: '/classroomavailable',
    route: ClassroomAvailableRouter,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
