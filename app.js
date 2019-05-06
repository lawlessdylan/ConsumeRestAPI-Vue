
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router'; //import vue router.. installed through npm instal vue-router
import App from './components/navbar/App.vue' //import the app component

//importing the components from their file directory
import LoginForm from './components/auth/LoginForm.vue';

import EnrolmentsIndex from './components/enrolments/EnrolmentsIndex.vue';
import EditEnrolment from './components/enrolments/EditEnrolment.vue';
import CreateEnrolment from './components/enrolments/CreateEnrolment.vue';
import ViewEnrolment from './components/enrolments/ViewEnrolment.vue';


// import StudentsIndex from './components/students/EnrolmentsIndex.vue';


Vue.use(VueRouter); //telling vue to use vue router, imported above

const routes = [ //array of routes, all routes are a javascript object
    {
        path: '/',
        name: 'login',
        component: LoginForm

    },
    {
        path: '/home',
        component: EnrolmentsIndex,
        name: 'home',
      },
      {
        path: '/editEnrolment/:id/edit',
        component: EditEnrolment,
        name: 'editEnrolment'
      },
      {
        path: '/createEnrolment',
        component: CreateEnrolment,
        name: 'createEnrolment'
      },
      {
        path: '/viewEnrolment/:id/view',
        component: ViewEnrolment,
        name: 'viewEnrolment'
      }
      ];

const router = new VueRouter({ //creating a new VueRouter
    routes: routes //routes in constructor
});

new Vue({ //new instance
    el: '#app',  //id of app
    components: { App }, // component is app
    router: router, //using router
    template: '<app/>',
});
