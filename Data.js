

const Data = [
    {
      free: {
        plan_name: "free",
        price: 0,
        user: [true, "Single User"],
        storage: [true, "5GB Storage"],
        public_projects: [true, "Unlimited Public Projects"],
        access: [true, "Community Access"],
        private_projects: [false, "Unlimited Private Projects"],
        phone_support: [false, "Dedicated Phone Support"],
        subdomain: [false, "Free Subdomain"],
        reports: [false, "Monthly Status Reports"],
      },
    },
    {
      plus: {
        plan_name: "plus",
        price: 9,
        user: [true, "5 Users", "bold"],
        storage: [true, "50GB Storage"],
        public_projects: [true, "Unlimited Public Projects"],
        access: [true, "Community Access"],
        private_projects: [true, "Unlimited Private Projects"],
        phone_support: [true, "Dedicated Phone Support"],
        subdomain: [true, "Free Subdomain"],
        reports: [false, "Monthly Status Reports"],
      },
    },
    {
      pro: {
        plan_name: "pro",
        price: 49,
        user: [true, "Unlimited Users", "bold"],
        storage: [true, "150GB Storage"],
        public_projects: [true, "Unlimited Public Projects"],
        access: [true, "Community Access"],
        private_projects: [true, "Unlimited Private Projects"],
        phone_support: [true, "Dedicated Phone Support"],
        subdomain: [true,"UnLimited Free Subdomain","bold"],
        reports: [true, "Monthly Status Reports"],
      },
    },
  ];

  export default Data;