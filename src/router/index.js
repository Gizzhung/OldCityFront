import Vue from 'vue'
import Router from 'vue-router'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import register from '@/components/user/register'
import login from '@/components/user/login'
import Home from '@/components/layout/home'
import Index from '@/components/index'
import news from '@/components/news'



//Wizard
import wizard_introduction from '@/components/Wizard/wizard_introduction'
import wizard_list from '@/components/Wizard/wizard_list'
import pilot_info from '@/components/Wizard/pilot_info'


//課程場次
import createCourse from '@/components/course/create'
import Course from '@/components/course/index'
import Session from '@/components/session/index'
import createSession from '@/components/session/create'
import editbranch from '@/components/Branch/edit'
import Branch from '@/components/Branch/index'
import Branch_photo from '@/components/Branch/photo'
import photo from '@/components/photo/list'
import upload from '@/components/photo/upload'
import createBranch from '@/components/Branch/create'
import Branch_content from '@/components/Branch/content'
import checkSignUp from '@/components/admin/checkSignUp'
import completed from '@/components/admin/completed'
import banuser from '@/components/admin/banuser'
import userlist from '@/components/admin/userlist'
import userdetail from '@/components/admin/userdetail'
import wizardreview from '@/components/admin/wizardreview'


//user
import profile from '@/components/user/profile'
import resume from '@/components/user/Resume'
import editprofile from '@/components/user/editprofile'
import editresume from '@/components/user/editresume'
import signuplist from '@/components/user/signuplist'
import passwordchange from '@/components/user/passwordChange'
import ForgetPassword from '@/components/user/ForgetPassword'



//公告
import createAnnounce from '@/components/Announce/create'
import Announce from '@/components/Announce/announce'
import editAnnounce from '@/components/Announce/edit'

// 景點簡介
import attraction from '@/components/attraction/index'

// use
Vue.use(Router)
Vue.use(mavonEditor)


export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            redirect: Index,
            children: [{
                    path: '/index',
                    name: 'Index',
                    component: Index,
                }, {
                    path: '/register',
                    name: 'register',
                    component: register,
                }, {
                    path: '/login',
                    name: 'login',
                    component: login,
                }, {
                    path: '/Course',
                    name: 'Course',
                    component: Course,
                }, {
                    path: '/createCourse',
                    name: 'createCourse',
                    component: createCourse,
                }, {
                    path: '/news',
                    name: 'news',
                    component: news,
                }, {
                    path: '/createAnnounce',
                    name: 'createAnnounce',
                    component: createAnnounce
                },
                {
                    path: '/editannounce/:announce_id',
                    name: 'editAnnounce',
                    component: editAnnounce
                },
                {
                    path: '/announce/:announce_id',
                    name: 'Announce',
                    component: Announce
                }, {
                    path: '/Session/:c_id',
                    name: 'Session',
                    component: Session,

                }, {
                    path: '/createSession',
                    name: 'createSession',
                    component: createSession,

                },
                {
                    path: '/Branch/:s_id',
                    name: 'Branch',
                    component: Branch
                },
                {
                    path: '/editbranch/:b_id',
                    name: 'editbranch',
                    component: editbranch
                }, {
                    path: '/Branch_content/:b_id',
                    name: 'Branch_content',
                    component: Branch_content
                }, {
                    path: '/createBranch/:s_id',
                    name: 'createBranch',
                    component: createBranch
                }, {
                    path: '/checkSignUp/:b_id',
                    name: 'checkSignUp',
                    component: checkSignUp
                }, {
                    path: '/completed/:b_id',
                    name: 'completed',
                    component: completed
                }, {
                    path: '/photo',
                    name: 'photo',
                    component: photo
                }, {
                    path: '/upload/:b_id',
                    name: 'upload',
                    component: upload
                }, {
                    path: '/Branch_photo/:b_id',
                    name: 'Branch_photo',
                    component: Branch_photo
                }, {
                    path: '/profile',
                    name: 'profile',
                    component: profile
                }, {
                    path: '/resume',
                    name: 'resume',
                    component: resume
                }, {
                    path: '/editprofile',
                    name: 'editprofile',
                    component: editprofile
                }, {
                    path: '/editresume',
                    name: 'editresume',
                    component: editresume
                }, {
                    path: '/signuplist',
                    name: 'signuplist',
                    component: signuplist
                }, {
                    path: '/banuser',
                    name: 'banuser',
                    component: banuser
                }, {
                    path: '/userlist',
                    name: 'userlist',
                    component: userlist
                }, {
                    path: '/wizard_introduction',
                    name: 'wizard_introduction',
                    component: wizard_introduction
                }, {
                    path: '/wizard_list',
                    name: 'wizard_list',
                    component: wizard_list
                }, {
                    path: '/pilot_info/:id',
                    name: 'pilot_info',
                    component: pilot_info
                }, {
                    path: '/passwordchange',
                    name: 'passwordchange',
                    component: passwordchange
                }, {
                    path: '/userdetail/:account',
                    name: 'userdetail',
                    component: userdetail
                }, {
                    path: '/attraction',
                    name: 'attraction',
                    component: attraction
                }, {
                    path: '/wizardreview/:s_id',
                    name: 'wizardreview',
                    component: wizardreview
                },
                {
                    path: '/ForgetPassword',
                    name: 'ForgetPassword',
                    component: ForgetPassword
                }


            ]
        }]
        // mode: 'history',
        // routes: [{
        //         path: '/',
        //         name: 'index',
        //         component: index,
        //         children: [{
        //                 path: '/index',
        //                 name: 'index',
        //                 component: index
        //             },
        //             {
        //                 path: '/register',
        //                 name: 'register',
        //                 component: register
        //             },
        //             {
        //                 path: '/login',
        //                 name: 'login',
        //                 component: login
        //             },
        //             {
        //                 path: '/createCourse',
        //                 name: 'createCourse',
        //                 component: createCourse
        //             },
        //             {
        //                 path: '/searchCourse',
        //                 name: 'searchCourse',
        //                 component: searchCourse
        //             },
        //             {
        //                 path: '/user',
        //                 name: 'user',
        //                 component: user
        //             },
        //             {
        //                 path: '/news',
        //                 name: 'news',
        //                 component: news
        //             },

    //         ]

    //         ]

    //     },

    // ]
})