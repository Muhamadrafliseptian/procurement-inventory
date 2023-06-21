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
            path: "tables",
            name: "Tables",
            component: () => import('@/views/Dashboard/Tables.vue'),
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
            path: "member",
            name: "Member",
            component: () => import('@/views/Dashboard/Member.vue'),
            meta: { auth: true },
        },
        {
            path: "adminMember",
            name: "adminMember",
            component: () => import('@/views/Dashboard/admin/adminMember.vue'),
            meta: { auth: true },
        },
    ]
};

export default dashboard;