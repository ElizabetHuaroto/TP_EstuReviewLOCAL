import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColegioComponent } from './components/colegio/colegio.component';
import { ListColegioComponent } from './components/colegio/list-colegio/list-colegio.component';
import { RegistroColegioComponent } from './components/colegio/registro-colegio/registro-colegio.component';

import { HttpClientModule} from '@angular/common/http';//add mano
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from './components/user/user.component';
import { UserListarComponent } from './components/user/user-listar/user-listar.component';
import { CreateEditComponent } from './components/user/create-edit/create-edit.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { ProfileSchoolComponent } from './components/colegio/profile-school/profile-school.component';
import { GetInComponent } from './components/get-in/get-in.component';
import { GetOutComponent } from './components/get-out/get-out.component';
import { MatIconModule } from '@angular/material/icon';
import { QualificationSchoolComponent } from './components/colegio/qualification-school/qualification-school.component';
import { SearchComponent } from './components/search/search.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { ListTeacherComponent } from './components/teacher/list-teacher/list-teacher.component';
import { ProfileTeacherComponent } from './components/teacher/profile-teacher/profile-teacher.component';
import { QualificationTeacherComponent } from './components/teacher/qualification-teacher/qualification-teacher.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ColegioComponent,
    ListColegioComponent,
    RegistroColegioComponent,
    UserComponent,
    UserListarComponent,
    CreateEditComponent,
    NavigationComponent,
    HomeComponent,
    ProfileSchoolComponent,
    GetInComponent,
    GetOutComponent,
    QualificationSchoolComponent,
    SearchComponent,
    UserProfileComponent,
    ListTeacherComponent,
    ProfileTeacherComponent,
    QualificationTeacherComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//add mano
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
