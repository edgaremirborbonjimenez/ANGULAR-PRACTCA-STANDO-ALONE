import { Route } from "@angular/router";
import { MprincipalComponent } from "./mprincipal/mprincipal.component";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { ProductosComponent } from "./productos/productos.component";

export default [
    {path:'',component: MprincipalComponent},
    {path:'empleados', component:EmpleadosComponent},
    {path:'productos', component: ProductosComponent}
] as Route[];