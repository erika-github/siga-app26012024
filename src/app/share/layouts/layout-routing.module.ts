import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './main-layout/layouts.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/siga',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutsComponent,
    children: [

      { path: 'siga', loadChildren: () => import( '../../LandingPage/container/sections/sections.module').then(m => m.SectionsModule)}
      
      ]    
  },

    {
    path: '',    
    component: HomeLayoutComponent,
    children: [

      
      { path: 'sigaHomePage', loadChildren: () => import( '../../homePage/container/home-menu.module' ).then(m => m.HomeMenuModule)}

    ],
     
    
  },


  {
    path: '',    
    component: StandardLayoutComponent,
    children: [  
               
     
     { path: 'sigaStudentPage', loadChildren: () => import('../../studentPages/studentList/container/student-list.module').then(m => m.StudentModule)}
    
    ],
     
    
  },

  {
    path: '',    
    component: StandardLayoutComponent,
    children: [  
               
     { path: 'sigaStudentDetail/:id', loadChildren: () => import( '../../studentPages/studentsDetails/container/student-detail.module').then(m => m.StudentDetailModule)}
    
    
    ],
     
    
  },

  {
    path: '',    
    component: StandardLayoutComponent,
    children: [  
               
     { path: 'sigaCreateStudent', loadChildren: () => import( '../../studentPages/createStudent/container/create-student.module').then(m => m.CreateStudentModule)}
    
    
    ],
     
    
  },

  {
    path: '',    
    component: StandardLayoutComponent,
    children: [  
                     
      { path: 'sigaEditStudent/:id', loadChildren: () => import( '../../studentPages/editStudent/container/edit-student.module').then(m => m.EditStudentModule)}
    
    ],
     
    
  },

  {
    path: '',    
    component: StandardLayoutComponent,
    children: [  
                                                
     
     { path: 'sigaTeacherPage', loadChildren: () => import('../../teacherPages/teacherList/container/teacher-list.module').then(m => m.TeacherListModule)}
    
    ],
     
    
  },

  {
    path: '',    
    component: StandardLayoutComponent,
    children: [  
                                                               
     { path: 'sigaTeacherDetail/:id', loadChildren: () => import( '../../teacherPages/teacherDetail/container/teacher-detail.module').then(m => m.TeacherDetailModule)}
    
    
    ],
     
    
  },

  {
    path: '',    
    component: StandardLayoutComponent,
    children: [  
                                                                     
      { path: 'sigaEditTeacher/:id', loadChildren: () => import( '../../teacherPages/editTeacher/container/edit-teacher.module').then(m => m.EditTeacherModule)}
    
    ],
     
    
  },

  {
    path: '',    
    component: StandardLayoutComponent,
    children: [  
                                                              
     { path: 'sigaCreateTeacher', loadChildren: () => import( '../../teacherPages/createTeacher/container/create-student.module').then(m => m.CreateTeacherModule)}
    
    
    ],
     
    
  },
 
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes),
    
    
  ],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }
