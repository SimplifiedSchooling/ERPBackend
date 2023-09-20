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
const residentialschoolRouter = require('./masterRoutes/residential_schoool.router');
const quickRecapRoute = require('./quickrecap.route');
const managmentGroupSchoolRoute = require('./masterRoutes/managment.groupschool.route');
const managmentCodeSchoolRoute = require('./masterRoutes/managment.codeofSchool.route');
const managementAdministrationTypeRoute = require('./masterRoutes/management.administration.type.route');
const respondentRoute = require('./masterRoutes/respondent.route');
const schooleBuildingRout = require('./masterRoutes/school.building.route');
const schoolLocationRoute = require('./masterRoutes/school-location.route');
const inChargeTypeRoute = require('./masterRoutes/head.of.school.route');
const schoolcategoryRoute = require('./masterRoutes/school.category.route');
const districtRoute = require('./masterRoutes/distict.route');
const safetyAndSecurityRoute = require('./masterRoutes/safety.and.security.route');
const languageRoute = require('./masterRoutes/language.route');
const demolishedRoute = require('./demolished.route');
const staffRoute = require('./staff.route');
const typeresidentialschoolRouter = require('./masterRoutes/type_residential_school.route');
const Boardresidentialschool = require('./masterRoutes/boarding_residential_school.route');
const MinorityManageSchool = require('./masterRoutes/minority_manage_school.route');
const BoundaryWall = require('./masterRoutes/boundarywall.route');
const ClassroomAvailableRouter = require('./masterRoutes/classromm_available.route');
const internetTypeRoute = require('./masterRoutes/type.of.internet.route');
const specialEducatorRoute = require('./masterRoutes/special.educator.route');
const laboratoryRoute = require('./masterRoutes/laboratories.route');
const academicsRoute = require('./masterRoutes/academics.route');
const studentStatusRoute = require('./masterRoutes/student.status.route');
const admitRoute = require('./masterRoutes/admitted.routes');
const resultTypeRoute = require('./masterRoutes/results.route');
const studentRoute = require('./student.route');
const attendanceRoute = require('./attendance.route');
const saralRoute = require('./saral.info.route');
const ictRoute = require('./masterRoutes/ICTGovSchool.route');
const studentAdmissionRoute = require('./masterRoutes/student.admission.type.route');
const studentSocialRoute = require('./masterRoutes/student.social.category.route');
const studenttypeRoute = require('./masterRoutes/student.type.route');
const typeOfictRoute = require('./masterRoutes/typeOfICT.route');
const Section1A10Route = require('./masterRoutes/section1A(1.1 to 1.10).route');
const campusRoute = require('./campus.route');
const mappingRoute = require('./mapping.route');
const AppliedForPlacementRoute = require('./masterRoutes/applied_for_placement.route');
const AppliedForApprenticeshipRoute = require('./masterRoutes/applied_for_apprenticeship.route');
const UdiseblockRoute = require('./masterRoutes/udiseblock.route');
const SessionRoute = require('./sessions.route');
const sectionRoute = require('./section.route');
const studentSessionRoute = require('./student.session.route');
const Section1A20Route = require('./masterRoutes/section1A(1.1 to 1.20).route');
const Section1A30Route = require('./masterRoutes/section1A(1.21 to 1.30).route');
const Section1A40Route = require('./masterRoutes/section1A(1.31 to 1.40).route');
const StudentMinorityGroupRoute = require('./masterRoutes/student.Minority.group.route');
const SectorRoute = require('./masterRoutes/sector.route');
const Section1A50Route = require('./masterRoutes/section1A(1.41 to 1.50).route');
const Section1A53Route = require('./masterRoutes/section1A(1.51 to 1.53).route');
const Section1B54Route = require('./masterRoutes/section1B(1.54 to 1.54.12).route');
const Section1C57Route = require('./masterRoutes/section1C(1.55 to 1.57.8).route');
const Section1D60Route = require('./masterRoutes/section1D(1.58.1 to 1.60.3).route');
const Section1E62Route = require('./masterRoutes/section1E(1.62 to 1.62).route');
const Section2A21Route = require('./masterRoutes/section2A(2.1 to 2.21).route');
const Section2B27Route = require('./masterRoutes/section2B(2.22 to 1.27).route');
const Section3ARoute = require('./masterRoutes/section3A(3.1 to 3.4).route');

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
    path: '/sections',
    route: sectionRoute,
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
    path: '/residentialschool',
    route: residentialschoolRouter,
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
    path: '/studentAdmissionGroup',
    route: studentAdmissionRoute,
  },
  {
    path: '/schoollocationtype',
    route: schoolLocationRoute,
  },
  {
    path: '/studentType',
    route: studenttypeRoute,
  },
  {
    path: '/socialCategory',
    route: studentSocialRoute,
  },
  {
    path: '/inchargetype',
    route: inChargeTypeRoute,
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
    path: '/internetType',
    route: internetTypeRoute,
  },
  {
    path: '/demolished',
    route: demolishedRoute,
  },
  {
    path: '/staff',
    route: staffRoute,
  },
  {
    path: '/ICTgovschool',
    route: ictRoute,
  },
  {
    path: '/TypeOfICTgovschool',
    route: typeOfictRoute,
  },
  {
    path: '/saralInfo',
    route: saralRoute,
  },
  {
    path: '/classroomavailable',
    route: ClassroomAvailableRouter,
  },
  {
    path: '/specialEducator',
    route: specialEducatorRoute,
  },
  {
    path: '/laboratory',
    route: laboratoryRoute,
  },
  {
    path: '/academics',
    route: academicsRoute,
  },
  {
    path: '/studentStatus',
    route: studentStatusRoute,
  }, 
  {
    path: '/udiseblock',
    route: UdiseblockRoute,
  },
  {
    path: '/admit',
    route: admitRoute,
  },
  {
    path: '/resultType',
    route: resultTypeRoute,
  },
  {
    path: '/student',
    route: studentRoute,
  },
  {
    path: '/attendance',
    route: attendanceRoute,
  },
  {
    path: '/section1A10',
    route: Section1A10Route,
  },
  {
    path: '/campus',
    route: campusRoute,
  },
  {
    path: '/mapping',
    route: mappingRoute,
  },
  {
    path: '/appliedforplacement',
    route: AppliedForPlacementRoute,
  },
  {
    path: '/appliedforapprenticeship',
    route: AppliedForApprenticeshipRoute,
  },
  {
    path: '/session',
    route: SessionRoute,
  },
  {
    path: '/section1A20',
    route: Section1A20Route,
  },
  {
    path: '/section1A30',
    route: Section1A30Route,
  },
  {
    path: '/studentSession',
    route: studentSessionRoute,
  },
  {
    path: '/section1A40',
    route: Section1A40Route,
  },
  {
    path: '/studentMinorityGroup',
    route: StudentMinorityGroupRoute,
  },
  {
    path: '/sector',
    route: SectorRoute,
  },
  {
    path: '/section1A50',
    route: Section1A50Route,
  },
  {
    path: '/section1A53',
    route: Section1A53Route,
  },
  {
    path: '/section1B54',
    route: Section1B54Route,
  },
  {
    path: '/section1C57',
    route: Section1C57Route,
  },
  {
    path: '/section1D60',
    route: Section1D60Route,
  },
  {
    path: '/section1E62',
    route: Section1E62Route,
  },
  {
    path: '/section2A21',
    route: Section2A21Route,
  },
  {
    path: '/section2B27',
    route: Section2B27Route,
  },
  {
    path: '/section3A',
    route: Section3ARoute,
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
