import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";
import { LoginComponent } from "./views/login/login.component";
import { RegisterComponent } from "./views/register/register.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { AuthGuardService } from "./services/auth-guard.service";

export const routes: Routes = [
  {
    path: "dashboard",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "404",
    component: P404Component,
    data: {
      title: "Page 404"
    }
  },
  {
    path: "500",
    component: P500Component,
    data: {
      title: "Page 500"
    }
  },
  {
    path: "",
    component: LoginComponent,
    data: {
      title: "Login Page"
    }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: {
      title: "Register Page"
    }
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    data: {
      title: "Profile Page"
    }
  },
  {
    path: "",
    component: DefaultLayoutComponent,
    data: {
      title: "Home"
    },
    children: [
      {
        path: "base",
        loadChildren: "./views/base/base.module#BaseModule"
      },
      {
        path: "Prediction",
        loadChildren: "./views/prediction/prediction.module#PredictionModule"
      },
      {
        path: "gadget",
        loadChildren: "./views/gadget/gadget.module#GadgetModule"
      },
      {
        path: "dashboard",
        loadChildren: "./views/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "Marketplace",
        loadChildren: "./views/marketplace/marketplace.module#MarketplaceModule"
      },
      {
        path: "notifications",
        loadChildren:
          "./views/notifications/notifications.module#NotificationsModule"
      },
      {
        path: "Production",
        loadChildren: "./views/prediction/prediction.module#PanelsModule"
      },
      {
        path: "Panels",
        loadChildren: "./views/panels/panels.module#PanelsModule"
      },
      {
        path: 'Profile',
        loadChildren: './views/profile/profile.module#ProfileModule'
      }     
    ]
  },
  { path: "**", component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
