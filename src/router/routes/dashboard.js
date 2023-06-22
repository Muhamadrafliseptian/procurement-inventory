const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    children: [
        {
            path: "",
            name: "Default",
            component: () => import('@/views/Dashboard/Default.vue'),
            meta: { auth: true },
        },
        {
            path: "billing",
            name: "Billing",
            component: () => import('@/views/Dashboard/Billing.vue'),
            meta: { auth: true },
        },
        {
            path: "ToDoTable",
            name: "ToDoTable",
            component: () => import('@/views/Dashboard/ToDoTable.vue'),
            meta: { auth: true },
        },
        {
            path: "profile",
            name: "Profile",
            component: () => import('@/views/Dashboard/Profile.vue'),
            meta: { auth: true },
        },
        {
            path: "adminMember",
            name: "adminMember",
            component: () => import('@/views/Dashboard/admin/member/adminMember.vue'),
            meta: { auth: true },
        },
        {
            path: "adminMember",
            children: [
                {
                    path: "create",
                    name: "Add member",
                    component: () => import('@/views/Dashboard/admin/member/create.vue'),
                    meta: { auth: true },
                }
            ]
        },
        {
            path: "procurement",
            name: "procurement member",
            component: () => import('@/views/Dashboard/admin/procurement/index.vue'),
            meta: { auth: true },
        },
        {
            path: 'procurement',
            children: [
                {
                    path: "create",
                    name: "Add Procurement",
                    component: () => import('@/views/Dashboard/admin/procurement/create.vue'),
                    meta: { auth: true },
                }
            ]
        }
    ]
};

export default dashboard;