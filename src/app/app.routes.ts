import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Read } from './components/read/read';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {path: '', component: Read}
        ]
    }
];
