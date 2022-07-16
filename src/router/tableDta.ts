import Admin from '../views/company-structure/indexView.vue';
import IndexViewVue from '../views/company-structure/indexView.vue';
import JobTitle from '../views/job-detail-setup/indexView.vue';

export const AdminRouters = [
  {
    path: '/admin/company-structure',
    component: Admin,
  },
  {
    path: '/admin',
    component: IndexViewVue,
  },
  {
    path: '/admin/job-detail-setup',
    component: JobTitle,
  },
];