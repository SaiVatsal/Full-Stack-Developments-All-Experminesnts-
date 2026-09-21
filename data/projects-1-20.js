/**
 * Master Project Catalog: Projects 1 to 20
 * Student: SaiVatsal (2500040224)
 */

module.exports = [
  {
    id: 1,
    folder: '01-ecommerce-platform',
    name: 'Nexus E-Commerce Platform',
    category: 'E-Commerce & Retail',
    description: 'Production-grade full-stack e-commerce marketplace with catalog browsing, filters, shopping cart, checkout workflow, order history, and merchant inventory control.',
    entityName: 'Product',
    entitiesName: 'products',
    initialData: [
      { id: '1', name: 'Ergonomic Mechanical Keyboard', category: 'Electronics', price: 129.99, stock: 45, rating: 4.8, status: 'In Stock', description: 'Wireless mechanical keyboard with hot-swappable tactile switches and RGB backlighting.' },
      { id: '2', name: 'Noise-Canceling Wireless Headphones', category: 'Electronics', price: 249.50, stock: 28, rating: 4.9, status: 'In Stock', description: 'Premium over-ear headphones with 30-hour battery life and adaptive noise cancellation.' },
      { id: '3', name: 'Ultra-Wide Curved Gaming Monitor 34"', category: 'Electronics', price: 499.00, stock: 12, rating: 4.7, status: 'Low Stock', description: 'WQHD 144Hz 1ms curved gaming monitor with HDR400 and USB-C connectivity.' },
      { id: '4', name: 'Handcrafted Leather Travel Backpack', category: 'Fashion', price: 179.00, stock: 35, rating: 4.6, status: 'In Stock', description: 'Vegetable-tanned full-grain leather with dedicated 16-inch padded laptop compartment.' },
      { id: '5', name: 'Minimalist Titanium Automatic Watch', category: 'Accessories', price: 320.00, stock: 18, rating: 4.9, status: 'In Stock', description: 'Sapphire crystal glass, Japanese automatic movement, and 50m water resistance.' },
      { id: '6', name: 'Single-Origin Ethiopian Coffee Beans 1kg', category: 'Grocery', price: 28.50, stock: 90, rating: 4.8, status: 'In Stock', description: 'Artisan roasted specialty coffee with floral notes and citrus undertones.' }
    ],
    fields: [
      { key: 'name', label: 'Product Name', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'select', options: ['Electronics', 'Fashion', 'Accessories', 'Grocery', 'Home & Office'], required: true },
      { key: 'price', label: 'Unit Price ($)', type: 'number', required: true },
      { key: 'stock', label: 'Inventory Stock', type: 'number', required: true },
      { key: 'rating', label: 'Rating (1-5)', type: 'number', required: true },
      { key: 'status', label: 'Stock Status', type: 'select', options: ['In Stock', 'Low Stock', 'Out of Stock'], required: true },
      { key: 'description', label: 'Product Overview', type: 'textarea', required: true }
    ],
    statCards: [
      { label: 'Total Catalog SKUs', value: '6 Items', icon: 'fa-box', color: 'blue' },
      { label: 'Active Customer Orders', value: '2 In-Transit', icon: 'fa-truck-fast', color: 'amber' },
      { label: 'Gross Revenue', value: '$878.49', icon: 'fa-dollar-sign', color: 'emerald' },
      { label: 'Average Review Score', value: '4.8 / 5.0', icon: 'fa-star', color: 'purple' }
    ],
    secondaryName: 'Customer Orders',
    secondaryKey: 'orders',
    secondaryData: [
      { id: 'ORD-101', customer: 'David Miller', date: '2026-09-18', total: '$379.49', status: 'Shipped', tracking: 'TRK-US-9821034', items: 'Ergonomic Mechanical Keyboard, Noise-Canceling Headphones' },
      { id: 'ORD-102', customer: 'Sarah Jenkins', date: '2026-09-20', total: '$499.00', status: 'Processing', tracking: 'TRK-US-9821035', items: 'Ultra-Wide Curved Gaming Monitor 34"' }
    ]
  },
  {
    id: 2,
    folder: '02-food-delivery-system',
    name: 'BistroBite Food Delivery Network',
    category: 'Food & Beverage',
    description: 'Complete food delivery ecosystem connecting hungry customers, partner restaurants, and fleet couriers with live order progression and customized menus.',
    entityName: 'Restaurant & Menu',
    entitiesName: 'restaurants',
    initialData: [
      { id: '1', name: 'Bella Italia Trattoria', cuisine: 'Italian', rating: 4.9, deliveryTime: '25-35 min', minOrder: 15.00, status: 'Open', featuredItem: 'Woodfired Truffle Pizza ($18.50)' },
      { id: '2', name: 'Tokyo Ramen House', cuisine: 'Japanese', rating: 4.8, deliveryTime: '20-30 min', minOrder: 12.00, status: 'Open', featuredItem: 'Tonkotsu Chashu Ramen ($14.99)' },
      { id: '3', name: 'Spice Boulevard Bistro', cuisine: 'Indian', rating: 4.7, deliveryTime: '30-45 min', minOrder: 20.00, status: 'Open', featuredItem: 'Butter Chicken & Garlic Naan ($16.99)' },
      { id: '4', name: 'Green Garden Harvest', cuisine: 'Vegan / Healthy', rating: 4.9, deliveryTime: '15-25 min', minOrder: 10.00, status: 'Open', featuredItem: 'Avocado Quinoa Protein Bowl ($13.50)' },
      { id: '5', name: 'The Burger Forge', cuisine: 'American', rating: 4.6, deliveryTime: '25-40 min', minOrder: 14.00, status: 'Busy', featuredItem: 'Smoked Bacon Double Smash ($15.00)' }
    ],
    fields: [
      { key: 'name', label: 'Restaurant Name', type: 'text', required: true },
      { key: 'cuisine', label: 'Cuisine Style', type: 'select', options: ['Italian', 'Japanese', 'Indian', 'Vegan / Healthy', 'American', 'Mexican'], required: true },
      { key: 'rating', label: 'Customer Rating', type: 'number', required: true },
      { key: 'deliveryTime', label: 'Est. Delivery Window', type: 'text', required: true },
      { key: 'minOrder', label: 'Minimum Order ($)', type: 'number', required: true },
      { key: 'featuredItem', label: 'Chef Specialty Item', type: 'text', required: true },
      { key: 'status', label: 'Kitchen Availability', type: 'select', options: ['Open', 'Busy', 'Closed'], required: true }
    ],
    statCards: [
      { label: 'Active Kitchens', value: '5 Restaurants', icon: 'fa-utensils', color: 'orange' },
      { label: 'Live Orders in Transit', value: '2 Deliveries', icon: 'fa-motorcycle', color: 'blue' },
      { label: 'Average Delivery Time', value: '26 Minutes', icon: 'fa-stopwatch', color: 'emerald' },
      { label: 'Courier Fleet Active', value: '14 Drivers', icon: 'fa-person-biking', color: 'purple' }
    ],
    secondaryName: 'Live Order Dispatches',
    secondaryKey: 'dispatches',
    secondaryData: [
      { id: 'DISP-401', customer: 'Liam Thorne', restaurant: 'Bella Italia Trattoria', items: '2x Truffle Pizza', total: '$37.00', courier: 'Carlos M. (Bike #12)', status: 'On The Way' },
      { id: 'DISP-402', customer: 'Emma Watson', restaurant: 'Tokyo Ramen House', items: '1x Spicy Ramen, 1x Gyoza', total: '$22.99', courier: 'Pending Assign', status: 'Cooking' }
    ]
  },
  {
    id: 3,
    folder: '03-inventory-management-system',
    name: 'StockMaster Pro Inventory Management',
    category: 'Logistics & Supply Chain',
    description: 'Enterprise multi-warehouse inventory management with automated low-stock triggers, stock movement auditing, and supplier relationship logging.',
    entityName: 'Inventory Item',
    entitiesName: 'items',
    initialData: [
      { id: '1', sku: 'SKU-1001', name: 'Industrial Ball Bearings (Box 50)', category: 'Mechanical', warehouse: 'Warehouse North (Aisle 4)', stock: 420, threshold: 100, unitCost: 35.00, status: 'Optimal' },
      { id: '2', sku: 'SKU-1002', name: 'Heavy-Duty Hydraulic Fluid 20L', category: 'Lubricants', warehouse: 'Warehouse Central (Bay 2)', stock: 15, threshold: 30, unitCost: 85.50, status: 'Low Stock' },
      { id: '3', sku: 'SKU-1003', name: 'Fiberglass Safety Helmets ANSI', category: 'Safety Gear', warehouse: 'Warehouse North (Aisle 1)', stock: 280, threshold: 50, unitCost: 22.00, status: 'Optimal' },
      { id: '4', sku: 'SKU-1004', name: 'Pneumatic Actuator Valves 2"', category: 'Pneumatics', warehouse: 'Warehouse South (Rack 7)', stock: 8, threshold: 20, unitCost: 145.00, status: 'Critical Shortage' },
      { id: '5', sku: 'SKU-1005', name: 'Copper Wire Spool 500m 12AWG', category: 'Electrical', warehouse: 'Warehouse Central (Bay 5)', stock: 95, threshold: 40, unitCost: 110.00, status: 'Optimal' }
    ],
    fields: [
      { key: 'sku', label: 'SKU Code', type: 'text', required: true },
      { key: 'name', label: 'Item Description', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'select', options: ['Mechanical', 'Lubricants', 'Safety Gear', 'Pneumatics', 'Electrical', 'Hardware'], required: true },
      { key: 'warehouse', label: 'Assigned Warehouse', type: 'text', required: true },
      { key: 'stock', label: 'Current Quantity', type: 'number', required: true },
      { key: 'threshold', label: 'Safety Reorder Point', type: 'number', required: true },
      { key: 'unitCost', label: 'Unit Cost ($)', type: 'number', required: true },
      { key: 'status', label: 'Inventory State', type: 'select', options: ['Optimal', 'Low Stock', 'Critical Shortage'], required: true }
    ],
    statCards: [
      { label: 'Total Tracked SKUs', value: '5 Lines', icon: 'fa-boxes-stacked', color: 'blue' },
      { label: 'Stock Alerts Flagged', value: '2 Under Reorder', icon: 'fa-triangle-exclamation', color: 'rose' },
      { label: 'Total Asset Value', value: '$45,860.50', icon: 'fa-vault', color: 'emerald' },
      { label: 'Warehouse Facilities', value: '3 Active Hubs', icon: 'fa-warehouse', color: 'purple' }
    ],
    secondaryName: 'Recent Stock Movement Ledger',
    secondaryKey: 'movements',
    secondaryData: [
      { id: 'MV-901', item: 'Industrial Ball Bearings', type: 'RESTOCK IN', quantity: '+150 Units', warehouse: 'Warehouse North', operator: 'SaiVatsal (2500040224)', date: '2026-09-20' },
      { id: 'MV-902', item: 'Heavy-Duty Hydraulic Fluid', type: 'DISPATCH OUT', quantity: '-10 Units', warehouse: 'Warehouse Central', operator: 'Shift Lead Mark', date: '2026-09-21' }
    ]
  },
  {
    id: 4,
    folder: '04-learning-management-system',
    name: 'EduVanguard LMS Platform',
    category: 'EdTech & Training',
    description: 'Comprehensive Learning Management System supporting course module structuring, student enrollments, interactive lesson tracking, gradebook assessments, and certificate issuance.',
    entityName: 'Course',
    entitiesName: 'courses',
    initialData: [
      { id: '1', title: 'Advanced Full-Stack Web Engineering', instructor: 'Dr. SaiVatsal (2500040224)', level: 'Advanced', enrolled: 1420, modules: 12, rating: 4.9, status: 'Active' },
      { id: '2', title: 'Modern Cloud Architecture & DevOps', instructor: 'Prof. Helen Vance', level: 'Intermediate', enrolled: 980, modules: 10, rating: 4.8, status: 'Active' },
      { id: '3', title: 'Cybersecurity Fundamentals & Threat Defense', instructor: 'Marcus Sterling, CISSP', level: 'Beginner', enrolled: 2150, modules: 8, rating: 4.9, status: 'Active' },
      { id: '4', title: 'Microservices Design with Node.js & Docker', instructor: 'Dr. SaiVatsal (2500040224)', level: 'Advanced', enrolled: 850, modules: 14, rating: 4.7, status: 'Active' },
      { id: '5', title: 'Database Design & High-Throughput SQL', instructor: 'Anita Rao, Data Architect', level: 'Intermediate', enrolled: 1120, modules: 9, rating: 4.8, status: 'Active' }
    ],
    fields: [
      { key: 'title', label: 'Course Title', type: 'text', required: true },
      { key: 'instructor', label: 'Lead Instructor', type: 'text', required: true },
      { key: 'level', label: 'Difficulty Level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'], required: true },
      { key: 'enrolled', label: 'Active Students Enrolled', type: 'number', required: true },
      { key: 'modules', label: 'Number of Modules', type: 'number', required: true },
      { key: 'rating', label: 'Course Rating', type: 'number', required: true },
      { key: 'status', label: 'Course Status', type: 'select', options: ['Active', 'Draft', 'Archived'], required: true }
    ],
    statCards: [
      { label: 'Published Courses', value: '5 Programs', icon: 'fa-graduation-cap', color: 'blue' },
      { label: 'Total Active Learners', value: '6,520 Students', icon: 'fa-users', color: 'emerald' },
      { label: 'Course Completion Rate', value: '89.4%', icon: 'fa-chart-line', color: 'purple' },
      { label: 'Certificates Granted', value: '3,840 Issued', icon: 'fa-certificate', color: 'amber' }
    ],
    secondaryName: 'Student Submissions & Gradebook',
    secondaryKey: 'submissions',
    secondaryData: [
      { id: 'SUB-301', student: 'Ryan Reynolds', course: 'Advanced Full-Stack Web Engineering', assignment: 'REST API Implementation', score: '98 / 100', status: 'Graded (A+)' },
      { id: 'SUB-302', student: 'Elena Rostova', course: 'Modern Cloud Architecture & DevOps', assignment: 'Docker Multi-Stage Build', score: '95 / 100', status: 'Graded (A)' }
    ]
  },
  {
    id: 5,
    folder: '05-social-media-platform',
    name: 'PulseNet Community Platform',
    category: 'Social Networking',
    description: 'Human-centric social network featuring interactive post feeds, media attachments, verified user badges, comment threads, direct engagement analytics, and content moderation.',
    entityName: 'Social Post',
    entitiesName: 'posts',
    initialData: [
      { id: '1', author: 'SaiVatsal (2500040224)', handle: '@saivatsal_dev', content: 'Excited to announce the release of our 58 production-ready full-stack software suites! Clean architecture, zero boilerplate templates.', likes: 342, comments: 45, shares: 89, tag: 'Tech & Engineering', time: '2 hours ago' },
      { id: '2', author: 'Dr. Maya Lin', handle: '@mayalin_ai', content: 'Deep learning breakthrough in multimodal reasoning models: benchmark accuracy up by 14% with 40% lower memory footprints.', likes: 580, comments: 72, shares: 120, tag: 'Artificial Intelligence', time: '4 hours ago' },
      { id: '3', author: 'DevOps Daily', handle: '@devops_daily', content: 'Best practice reminder: Immutable infrastructure patterns combined with declarative GitOps reduce production drift to almost zero.', likes: 215, comments: 18, shares: 64, tag: 'Cloud & Infrastructure', time: '6 hours ago' },
      { id: '4', author: 'Samantha Reed', handle: '@sam_designs', content: 'Great UI design is not about flashy animations; it is about cognitive clarity, accessible contrast, and effortless user journeys.', likes: 490, comments: 53, shares: 98, tag: 'UI/UX Design', time: '8 hours ago' }
    ],
    fields: [
      { key: 'author', label: 'User / Author Name', type: 'text', required: true },
      { key: 'handle', label: 'Username Handle', type: 'text', required: true },
      { key: 'content', label: 'Post Content Body', type: 'textarea', required: true },
      { key: 'tag', label: 'Topic Tag', type: 'select', options: ['Tech & Engineering', 'Artificial Intelligence', 'Cloud & Infrastructure', 'UI/UX Design', 'General'], required: true },
      { key: 'likes', label: 'Initial Likes Count', type: 'number', required: true },
      { key: 'comments', label: 'Comments Count', type: 'number', required: true },
      { key: 'shares', label: 'Shares Count', type: 'number', required: true },
      { key: 'time', label: 'Post Timestamp', type: 'text', required: true }
    ],
    statCards: [
      { label: 'Total Feed Posts', value: '4 Posts', icon: 'fa-newspaper', color: 'blue' },
      { label: 'Community Interactions', value: '1,960 Likes & Shares', icon: 'fa-heart', color: 'rose' },
      { label: 'Active Daily Users', value: '12.4K Members', icon: 'fa-users', color: 'emerald' },
      { label: 'Moderation Health', value: '99.9% Clean', icon: 'fa-shield-halved', color: 'purple' }
    ],
    secondaryName: 'Recent Community Comments',
    secondaryKey: 'comments',
    secondaryData: [
      { id: 'COM-101', postRef: 'Post #1 (SaiVatsal)', author: 'Alex Thorne', comment: 'Fantastic engineering structure! The separation of concerns is textbook perfect.', time: '1 hour ago' },
      { id: 'COM-102', postRef: 'Post #2 (Dr. Maya Lin)', author: 'Jordan Lee', comment: 'Are the benchmark replication papers available on arXiv yet?', time: '3 hours ago' }
    ]
  },
  {
    id: 6,
    folder: '06-healthcare-appointment-system',
    name: 'MediCare Specialist Appointment Portal',
    category: 'Healthcare & Telemedicine',
    description: 'Patient-centric doctor appointment and scheduling platform with physician specialty filtering, real-time slot booking, consultation histories, and clinical reminders.',
    entityName: 'Doctor & Specialty',
    entitiesName: 'doctors',
    initialData: [
      { id: '1', name: 'Dr. SaiVatsal (2500040224), MD', specialty: 'Neurology & Cognitive Health', clinic: 'Metropolitan Medical Tower', rating: 4.9, fee: 150, availability: 'Mon - Fri (09:00 - 17:00)', status: 'Available' },
      { id: '2', name: 'Dr. Sarah Mitchell, MD', specialty: 'Cardiology', clinic: 'St. Jude Heart Institute', rating: 4.8, fee: 175, availability: 'Tue - Sat (10:00 - 18:00)', status: 'Available' },
      { id: '3', name: 'Dr. Robert Chen, MD', specialty: 'Orthopedic Surgery', clinic: 'Apex Sports & Joint Care', rating: 4.9, fee: 160, availability: 'Mon, Wed, Fri (08:00 - 16:00)', status: 'Available' },
      { id: '4', name: 'Dr. Emily Vance, MD', specialty: 'Pediatrics & Adolescent Care', clinic: 'Sunrise Children Health', rating: 4.9, fee: 120, availability: 'Mon - Sat (09:00 - 15:00)', status: 'Available' },
      { id: '5', name: 'Dr. Anthony Rossi, MD', specialty: 'Dermatology & Skin Oncology', clinic: 'Aura Derma Institute', rating: 4.7, fee: 140, availability: 'Tue - Fri (11:00 - 19:00)', status: 'On Leave' }
    ],
    fields: [
      { key: 'name', label: 'Doctor Full Name & Credentials', type: 'text', required: true },
      { key: 'specialty', label: 'Medical Specialty', type: 'select', options: ['Neurology & Cognitive Health', 'Cardiology', 'Orthopedic Surgery', 'Pediatrics & Adolescent Care', 'Dermatology & Skin Oncology', 'General Internal Medicine'], required: true },
      { key: 'clinic', label: 'Clinic / Hospital Center', type: 'text', required: true },
      { key: 'rating', label: 'Physician Rating', type: 'number', required: true },
      { key: 'fee', label: 'Consultation Fee ($)', type: 'number', required: true },
      { key: 'availability', label: 'Consultation Schedule', type: 'text', required: true },
      { key: 'status', label: 'Current Availability', type: 'select', options: ['Available', 'On Leave', 'Fully Booked'], required: true }
    ],
    statCards: [
      { label: 'Attending Specialists', value: '5 Doctors', icon: 'fa-user-doctor', color: 'blue' },
      { label: 'Today Booked Appointments', value: '18 Consultations', icon: 'fa-calendar-check', color: 'emerald' },
      { label: 'Patient Trust Score', value: '4.9 / 5.0 ★', icon: 'fa-star', color: 'amber' },
      { label: 'Telehealth Availability', value: '100% Online Ready', icon: 'fa-video', color: 'purple' }
    ],
    secondaryName: 'Booked Patient Consultations',
    secondaryKey: 'appointments',
    secondaryData: [
      { id: 'APT-801', patient: 'Arthur Pendelton', doctor: 'Dr. SaiVatsal (2500040224)', date: '2026-09-22', time: '10:30 AM', type: 'In-Clinic Followup', status: 'Confirmed' },
      { id: 'APT-802', patient: 'Clara Oswald', doctor: 'Dr. Sarah Mitchell', date: '2026-09-23', time: '02:15 PM', type: 'Tele-Consultation', status: 'Confirmed' }
    ]
  },
  {
    id: 7,
    folder: '07-employee-management-system',
    name: 'WorkforceHR Enterprise Suite',
    category: 'Human Resources',
    description: 'Full-stack human resource management platform featuring employee directory records, salary structure allocations, attendance tracking, leave requests, and performance evaluations.',
    entityName: 'Employee Record',
    entitiesName: 'employees',
    initialData: [
      { id: '1', empId: 'EMP-101', name: 'SaiVatsal (2500040224)', role: 'Lead Full-Stack Architect', department: 'Engineering', salary: 145000, email: 'saivatsal@enterprise.org', status: 'Active', joinDate: '2024-01-15' },
      { id: '2', empId: 'EMP-102', name: 'Jessica Taylor', role: 'Senior Product Designer', department: 'Design & UX', salary: 118000, email: 'jessica.t@enterprise.org', status: 'Active', joinDate: '2024-03-01' },
      { id: '3', empId: 'EMP-103', name: 'Michael Chang', role: 'DevOps & Reliability Engineer', department: 'Infrastructure', salary: 125000, email: 'm.chang@enterprise.org', status: 'Active', joinDate: '2024-05-10' },
      { id: '4', empId: 'EMP-104', name: 'Rachel Green', role: 'Talent Acquisition Manager', department: 'Human Resources', salary: 95000, email: 'rachel.g@enterprise.org', status: 'Active', joinDate: '2023-11-20' },
      { id: '5', empId: 'EMP-105', name: 'David Kim', role: 'Financial Analyst', department: 'Finance & Accounts', salary: 105000, email: 'd.kim@enterprise.org', status: 'On Leave', joinDate: '2024-02-18' }
    ],
    fields: [
      { key: 'empId', label: 'Employee ID Code', type: 'text', required: true },
      { key: 'name', label: 'Full Employee Name', type: 'text', required: true },
      { key: 'role', label: 'Job Role / Designation', type: 'text', required: true },
      { key: 'department', label: 'Department', type: 'select', options: ['Engineering', 'Design & UX', 'Infrastructure', 'Human Resources', 'Finance & Accounts', 'Product Management'], required: true },
      { key: 'salary', label: 'Annual Compensation ($)', type: 'number', required: true },
      { key: 'email', label: 'Official Corporate Email', type: 'text', required: true },
      { key: 'status', label: 'Employment Status', type: 'select', options: ['Active', 'On Leave', 'Probation', 'Terminated'], required: true },
      { key: 'joinDate', label: 'Joining Date', type: 'text', required: true }
    ],
    statCards: [
      { label: 'Total Headcount', value: '5 Staff Members', icon: 'fa-id-badge', color: 'blue' },
      { label: 'Active Attendance Today', value: '96.2% Present', icon: 'fa-clipboard-user', color: 'emerald' },
      { label: 'Monthly Payroll Run', value: '$49,000 / mo', icon: 'fa-money-bill-wave', color: 'amber' },
      { label: 'Pending Leave Requests', value: '1 Request', icon: 'fa-calendar-day', color: 'purple' }
    ],
    secondaryName: 'Leave Application Queue',
    secondaryKey: 'leaves',
    secondaryData: [
      { id: 'LV-501', employee: 'David Kim (EMP-105)', type: 'Medical Leave', duration: '3 Days (Sep 21 - Sep 24)', status: 'Approved' },
      { id: 'LV-502', employee: 'Jessica Taylor (EMP-102)', type: 'Annual Paid Time Off', duration: '5 Days (Oct 10 - Oct 15)', status: 'Pending Review' }
    ]
  },
  {
    id: 8,
    folder: '08-video-streaming-platform',
    name: 'StreamCrest Cinema & Video Hub',
    category: 'Digital Media & Streaming',
    description: 'On-demand video streaming catalog featuring rich metadata, category categorization, user watchlists, view counts, ratings, and creator content management.',
    entityName: 'Video Title',
    entitiesName: 'videos',
    initialData: [
      { id: '1', title: 'The Quantum Frontier: Beyond Spacetime', creator: 'Cosmos Media / SaiVatsal (2500040224)', category: 'Science & Sci-Fi', duration: '1h 48m', resolution: '4K Ultra HD', views: '2.4M', rating: 4.9, status: 'Published' },
      { id: '2', title: 'Silicon Horizon: The Architecture of Future AI', creator: 'TechVision Studio', category: 'Technology', duration: '54m', resolution: '4K Ultra HD', views: '890K', rating: 4.8, status: 'Published' },
      { id: '3', title: 'Alpine Ascents: Solitude at 8000 Meters', creator: 'Peak Expeditions', category: 'Documentary', duration: '1h 22m', resolution: '1080p Full HD', views: '1.2M', rating: 4.9, status: 'Published' },
      { id: '4', title: 'Cyberpunk Metropolis 2088 Episode 1', creator: 'NeoTokyo Productions', category: 'Action & Drama', duration: '46m', resolution: '4K Ultra HD', views: '3.1M', rating: 4.7, status: 'Published' },
      { id: '5', title: 'Mastering Full-Stack Microservices Masterclass', creator: 'SaiVatsal Tech Academy', category: 'Education', duration: '2h 15m', resolution: '1080p Full HD', views: '450K', rating: 5.0, status: 'Published' }
    ],
    fields: [
      { key: 'title', label: 'Media / Video Title', type: 'text', required: true },
      { key: 'creator', label: 'Creator / Studio', type: 'text', required: true },
      { key: 'category', label: 'Genre / Category', type: 'select', options: ['Science & Sci-Fi', 'Technology', 'Documentary', 'Action & Drama', 'Education', 'Comedy'], required: true },
      { key: 'duration', label: 'Runtime Duration', type: 'text', required: true },
      { key: 'resolution', label: 'Stream Quality', type: 'select', options: ['4K Ultra HD', '1080p Full HD', '720p HD'], required: true },
      { key: 'views', label: 'Total Lifetime Views', type: 'text', required: true },
      { key: 'rating', label: 'Viewer Rating', type: 'number', required: true },
      { key: 'status', label: 'Distribution State', type: 'select', options: ['Published', 'Unlisted', 'Under Review'], required: true }
    ],
    statCards: [
      { label: 'Available Titles', value: '5 Streams', icon: 'fa-film', color: 'blue' },
      { label: 'Total Global Views', value: '8.04 Million', icon: 'fa-eye', color: 'purple' },
      { label: 'Avg Stream Rating', value: '4.86 ★', icon: 'fa-star', color: 'amber' },
      { label: '4K High-Bitrate Titles', value: '60% of Catalog', icon: 'fa-tv', color: 'emerald' }
    ],
    secondaryName: 'Subscriber Watchlist Queue',
    secondaryKey: 'watchlist',
    secondaryData: [
      { id: 'WL-201', user: 'Alex Sanders', video: 'The Quantum Frontier: Beyond Spacetime', progress: 'Watched 45m (In Progress)', date: '2026-09-20' },
      { id: 'WL-202', user: 'Morgan Freeman Jr.', video: 'Mastering Full-Stack Microservices Masterclass', progress: 'Saved to Queue', date: '2026-09-21' }
    ]
  },
  {
    id: 9,
    folder: '09-expense-tracker',
    name: 'SmartLedger Personal Expense Tracker',
    category: 'Finance & Budgeting',
    description: 'Real-time personal finance and expense accounting platform with categorized expenditure logging, monthly budget thresholds, transaction auditing, and exportable financial summaries.',
    entityName: 'Financial Transaction',
    entitiesName: 'transactions',
    initialData: [
      { id: '1', title: 'High-Performance Cloud Hosting Server', category: 'Software & Tools', amount: 89.50, type: 'Expense', account: 'Business Debit Card', date: '2026-09-20', status: 'Cleared', loggedBy: 'SaiVatsal (2500040224)' },
      { id: '2', title: 'Consulting Honorarium Payment', category: 'Freelance & Contract', amount: 3500.00, type: 'Income', account: 'Checking Account', date: '2026-09-18', status: 'Cleared', loggedBy: 'SaiVatsal (2500040224)' },
      { id: '3', title: 'Supermarket Organic Groceries', category: 'Food & Dining', amount: 142.30, type: 'Expense', account: 'Personal Credit Card', date: '2026-09-19', status: 'Cleared', loggedBy: 'SaiVatsal (2500040224)' },
      { id: '4', title: 'Ergonomic Standing Desk Frame', category: 'Office Equipment', amount: 380.00, type: 'Expense', account: 'Business Debit Card', date: '2026-09-15', status: 'Cleared', loggedBy: 'SaiVatsal (2500040224)' },
      { id: '5', title: 'Fiber Optic Gigabit Internet Bill', category: 'Utilities', amount: 79.99, type: 'Expense', account: 'Checking Account', date: '2026-09-14', status: 'Cleared', loggedBy: 'SaiVatsal (2500040224)' }
    ],
    fields: [
      { key: 'title', label: 'Transaction Description', type: 'text', required: true },
      { key: 'category', label: 'Budget Category', type: 'select', options: ['Software & Tools', 'Freelance & Contract', 'Food & Dining', 'Office Equipment', 'Utilities', 'Travel & Commute'], required: true },
      { key: 'amount', label: 'Amount ($)', type: 'number', required: true },
      { key: 'type', label: 'Cash Flow Direction', type: 'select', options: ['Expense', 'Income'], required: true },
      { key: 'account', label: 'Payment Account', type: 'text', required: true },
      { key: 'date', label: 'Transaction Date', type: 'text', required: true },
      { key: 'status', label: 'Clearance Status', type: 'select', options: ['Cleared', 'Pending', 'Reconciled'], required: true },
      { key: 'loggedBy', label: 'Auditor Name', type: 'text', required: true }
    ],
    statCards: [
      { label: 'Total Recorded Inflow', value: '$3,500.00', icon: 'fa-arrow-trend-up', color: 'emerald' },
      { label: 'Total Recorded Outflow', value: '$691.79', icon: 'fa-arrow-trend-down', color: 'rose' },
      { label: 'Net Operating Surplus', value: '+$2,808.21', icon: 'fa-wallet', color: 'blue' },
      { label: 'Budget Utilization', value: '34.5% of Cap', icon: 'fa-chart-pie', color: 'purple' }
    ],
    secondaryName: 'Active Monthly Budget Limits',
    secondaryKey: 'budgets',
    secondaryData: [
      { id: 'BDG-01', category: 'Software & Tools', cap: '$250.00', spent: '$89.50', status: 'Healthy (35.8%)' },
      { id: 'BDG-02', category: 'Food & Dining', cap: '$500.00', spent: '$142.30', status: 'Healthy (28.4%)' }
    ]
  },
  {
    id: 10,
    folder: '10-online-examination-system',
    name: 'TestMaster Pro Online Examination Portal',
    category: 'Assessment & Testing',
    description: 'Secure online assessment platform supporting timed multi-format examinations, auto-graded question banks, candidate attempt tracking, and anti-tamper test audit records.',
    entityName: 'Examination Paper',
    entitiesName: 'exams',
    initialData: [
      { id: '1', code: 'CS-401', title: 'Advanced Full-Stack Engineering & Microservices', duration: '90 Minutes', questions: 40, maxMarks: 100, passingMarks: 60, status: 'Live', instructor: 'SaiVatsal (2500040224)' },
      { id: '2', code: 'CS-302', title: 'Distributed Systems & Cloud Architecture', duration: '60 Minutes', questions: 30, maxMarks: 75, passingMarks: 45, status: 'Live', instructor: 'Prof. Helen Vance' },
      { id: '3', code: 'SEC-201', title: 'Network Security & Penetration Testing Protocols', duration: '75 Minutes', questions: 35, maxMarks: 100, passingMarks: 70, status: 'Live', instructor: 'Marcus Sterling, CISSP' },
      { id: '4', code: 'DS-105', title: 'Relational Database Architecture & Indexing', duration: '60 Minutes', questions: 25, maxMarks: 50, passingMarks: 30, status: 'Draft', instructor: 'Anita Rao, Data Architect' }
    ],
    fields: [
      { key: 'code', label: 'Course / Exam Code', type: 'text', required: true },
      { key: 'title', label: 'Examination Title', type: 'text', required: true },
      { key: 'duration', label: 'Allowed Duration', type: 'text', required: true },
      { key: 'questions', label: 'Question Count', type: 'number', required: true },
      { key: 'maxMarks', label: 'Maximum Marks', type: 'number', required: true },
      { key: 'passingMarks', label: 'Minimum Passing Threshold', type: 'number', required: true },
      { key: 'status', label: 'Exam State', type: 'select', options: ['Live', 'Draft', 'Completed', 'Archived'], required: true },
      { key: 'instructor', label: 'Exam Author', type: 'text', required: true }
    ],
    statCards: [
      { label: 'Available Test Papers', value: '4 Examinations', icon: 'fa-file-signature', color: 'blue' },
      { label: 'Total Candidate Attempts', value: '382 Submissions', icon: 'fa-user-check', color: 'emerald' },
      { label: 'Exam Pass Rate', value: '92.4%', icon: 'fa-award', color: 'purple' },
      { label: 'Integrity Rating', value: '100% Verified', icon: 'fa-shield-halved', color: 'amber' }
    ],
    secondaryName: 'Recent Candidate Exam Attempts',
    secondaryKey: 'attempts',
    secondaryData: [
      { id: 'ATT-701', candidate: 'Ethan Bradley', exam: 'CS-401 (Advanced Full-Stack)', score: '94 / 100', percentage: '94%', result: 'PASSED (Distinction)' },
      { id: 'ATT-702', candidate: 'Sophia Martinez', exam: 'SEC-201 (Network Security)', score: '88 / 100', percentage: '88%', result: 'PASSED (First Class)' }
    ]
  },
  {
    id: 11,
    folder: '11-car-rental-system',
    name: 'Velocity Auto Fleet & Rental System',
    category: 'Automotive & Travel',
    description: 'Fleet management and car rental booking portal with multi-class vehicle selection, daily rate calculations, reservation conflict checking, and vehicle maintenance scheduling.',
    entityName: 'Rental Vehicle',
    entitiesName: 'vehicles',
    initialData: [
      { id: '1', vin: 'VIN-9081', model: 'Tesla Model S Plaid 2026', type: 'Electric Sedan', dailyRate: 189.00, seats: 5, fuel: 'Electric (400 mi range)', status: 'Available', location: 'Downtown Hub 1' },
      { id: '2', vin: 'VIN-9082', model: 'BMW M4 Competition Coupe', type: 'Sports / Luxury', dailyRate: 220.00, seats: 4, fuel: 'Premium Gasoline', status: 'Rented', location: 'Airport Terminal 2' },
      { id: '3', vin: 'VIN-9083', model: 'Range Rover Sport Autobiography', type: 'Luxury SUV', dailyRate: 245.00, seats: 7, fuel: 'Hybrid', status: 'Available', location: 'Downtown Hub 1' },
      { id: '4', vin: 'VIN-9084', model: 'Porsche Taycan 4S Cross Turismo', type: 'Electric Luxury', dailyRate: 210.00, seats: 5, fuel: 'Electric (310 mi range)', status: 'Available', location: 'Westside Terminal' },
      { id: '5', vin: 'VIN-9085', model: 'Audi RS6 Avant Quattro', type: 'Performance Wagon', dailyRate: 195.00, seats: 5, fuel: 'Twin-Turbo V8', status: 'Under Maintenance', location: 'Service Depot Central' }
    ],
    fields: [
      { key: 'vin', label: 'VIN / Plate Code', type: 'text', required: true },
      { key: 'model', label: 'Vehicle Make & Model', type: 'text', required: true },
      { key: 'type', label: 'Vehicle Class', type: 'select', options: ['Electric Sedan', 'Sports / Luxury', 'Luxury SUV', 'Electric Luxury', 'Performance Wagon', 'Economy Sedan'], required: true },
      { key: 'dailyRate', label: 'Daily Rental Rate ($)', type: 'number', required: true },
      { key: 'seats', label: 'Passenger Capacity', type: 'number', required: true },
      { key: 'fuel', label: 'Powertrain / Fuel Type', type: 'text', required: true },
      { key: 'location', label: 'Current Station Hub', type: 'text', required: true },
      { key: 'status', label: 'Rental Availability', type: 'select', options: ['Available', 'Rented', 'Under Maintenance', 'Reserved'], required: true }
    ],
    statCards: [
      { label: 'Total Fleet Size', value: '5 Premium Cars', icon: 'fa-car-side', color: 'blue' },
      { label: 'Vehicles On Road', value: '1 Active Rental', icon: 'fa-road', color: 'purple' },
      { label: 'Fleet Utilization', value: '80% Readiness', icon: 'fa-gauge-high', color: 'emerald' },
      { label: 'Average Daily Yield', value: '$211.80 / Day', icon: 'fa-dollar-sign', color: 'amber' }
    ],
    secondaryName: 'Active Customer Reservations',
    secondaryKey: 'reservations',
    secondaryData: [
      { id: 'RES-881', customer: 'Gregory House', vehicle: 'BMW M4 Competition Coupe', period: '3 Days (Sep 20 - Sep 23)', totalAmount: '$660.00', status: 'Active (On Trip)' },
      { id: 'RES-882', customer: 'Victoria Chase', vehicle: 'Tesla Model S Plaid', period: '2 Days (Sep 24 - Sep 26)', totalAmount: '$378.00', status: 'Confirmed (Upcoming)' }
    ]
  },
  {
    id: 12,
    folder: '12-weather-app',
    name: 'AeroCast Meteorological Intelligence',
    category: 'Weather & Meteorology',
    description: 'Precision meteorological tracking application featuring global multi-city forecasts, humidity and wind velocity telemetry, severe weather advisories, and historical trend monitoring.',
    entityName: 'Weather Station City',
    entitiesName: 'locations',
    initialData: [
      { id: '1', city: 'San Francisco, CA', country: 'United States', tempC: 18.5, tempF: 65.3, condition: 'Partly Cloudy', humidity: 72, windKph: 19.4, uvIndex: 5, alert: 'Moderate Coastal Breeze' },
      { id: '2', city: 'Tokyo, Kanto', country: 'Japan', tempC: 24.0, tempF: 75.2, condition: 'Clear Sky', humidity: 55, windKph: 11.2, uvIndex: 7, alert: 'Optimal Conditions' },
      { id: '3', city: 'London, Greater London', country: 'United Kingdom', tempC: 15.2, tempF: 59.4, condition: 'Light Rain Showers', humidity: 84, windKph: 24.0, uvIndex: 3, alert: 'Drizzle Advisory' },
      { id: '4', city: 'Hyderabad, Telangana', country: 'India', tempC: 29.5, tempF: 85.1, condition: 'Sunny / Warm', humidity: 62, windKph: 14.5, uvIndex: 8, alert: 'High UV Advisory' },
      { id: '5', city: 'Zurich, Canton of Zurich', country: 'Switzerland', tempC: 16.8, tempF: 62.2, condition: 'Crisp Alpine Clear', humidity: 50, windKph: 8.5, uvIndex: 4, alert: 'Optimal Conditions' }
    ],
    fields: [
      { key: 'city', label: 'Metropolitan City & State', type: 'text', required: true },
      { key: 'country', label: 'Country', type: 'text', required: true },
      { key: 'tempC', label: 'Temperature (°C)', type: 'number', required: true },
      { key: 'tempF', label: 'Temperature (°F)', type: 'number', required: true },
      { key: 'condition', label: 'Sky Condition', type: 'select', options: ['Clear Sky', 'Sunny / Warm', 'Partly Cloudy', 'Light Rain Showers', 'Thunderstorms', 'Overcast', 'Crisp Alpine Clear'], required: true },
      { key: 'humidity', label: 'Humidity (%)', type: 'number', required: true },
      { key: 'windKph', label: 'Wind Velocity (km/h)', type: 'number', required: true },
      { key: 'uvIndex', label: 'UV Index Score', type: 'number', required: true },
      { key: 'alert', label: 'Station Advisory', type: 'text', required: true }
    ],
    statCards: [
      { label: 'Monitored Stations', value: '5 Global Cities', icon: 'fa-globe', color: 'blue' },
      { label: 'Average Global Temp', value: '20.8°C', icon: 'fa-temperature-half', color: 'amber' },
      { label: 'Severe Weather Alerts', value: '0 Critical', icon: 'fa-shield-heart', color: 'emerald' },
      { label: 'Telemetry Accuracy', value: '99.8% Precision', icon: 'fa-satellite', color: 'purple' }
    ],
    secondaryName: 'Multi-Day Forecast Trajectory',
    secondaryKey: 'forecasts',
    secondaryData: [
      { id: 'FC-101', city: 'San Francisco, CA', day: 'Tomorrow', expectedTemp: '19°C / 66°F', outlook: 'Sunny Intervals', rainProbability: '10%' },
      { id: 'FC-102', city: 'Tokyo, Japan', day: 'Tomorrow', expectedTemp: '25°C / 77°F', outlook: 'Clear & Mild', rainProbability: '5%' }
    ]
  },
  {
    id: 13,
    folder: '13-online-voting-system',
    name: 'CivicTrust Secure E-Voting Portal',
    category: 'Governance & E-Voting',
    description: 'Educational simulation of tamper-evident democratic voting with voter identity verification, encrypted ballot cast submissions, live audit tallies, and candidate declarations.',
    entityName: 'Candidate / Ballot Item',
    entitiesName: 'candidates',
    initialData: [
      { id: '1', candidateId: 'CAND-01', name: 'Dr. SaiVatsal (2500040224)', party: 'Innovation & Tech Alliance', election: 'Student Council Leadership 2026', votes: 1420, percentage: '48.5%', status: 'Leading' },
      { id: '2', candidateId: 'CAND-02', name: 'Althea Vance', party: 'Sustainable Campus Initiative', election: 'Student Council Leadership 2026', votes: 980, percentage: '33.4%', status: 'Runner Up' },
      { id: '3', candidateId: 'CAND-03', name: 'Julian Drake', party: 'Academic Reform Coalition', election: 'Student Council Leadership 2026', votes: 530, percentage: '18.1%', status: 'Nominated' }
    ],
    fields: [
      { key: 'candidateId', label: 'Candidate ID', type: 'text', required: true },
      { key: 'name', label: 'Candidate Full Name', type: 'text', required: true },
      { key: 'party', label: 'Affiliation / Party', type: 'text', required: true },
      { key: 'election', label: 'Election Measure Title', type: 'text', required: true },
      { key: 'votes', label: 'Verified Ballots Cast', type: 'number', required: true },
      { key: 'percentage', label: 'Vote Share (%)', type: 'text', required: true },
      { key: 'status', label: 'Race Status', type: 'select', options: ['Leading', 'Runner Up', 'Nominated', 'Elected'], required: true }
    ],
    statCards: [
      { label: 'Total Ballots Cast', value: '2,930 Votes', icon: 'fa-check-to-slot', color: 'blue' },
      { label: 'Electoral Turnout', value: '87.6% Registered', icon: 'fa-users-line', color: 'emerald' },
      { label: 'Audit Trail Hash', value: 'SHA-256 Valid', icon: 'fa-fingerprint', color: 'purple' },
      { label: 'Active Elections', value: '1 Live Race', icon: 'fa-landmark', color: 'amber' }
    ],
    secondaryName: 'Cryptographic Ballot Audit Logs',
    secondaryKey: 'auditLogs',
    secondaryData: [
      { id: 'VOTE-HASH-991', voterToken: 'VTR-***-9021', candidateRef: 'Dr. SaiVatsal (CAND-01)', timestamp: '2026-09-21 14:32:05', auditStatus: 'Confirmed Tamper-Free' },
      { id: 'VOTE-HASH-992', voterToken: 'VTR-***-8842', candidateRef: 'Althea Vance (CAND-02)', timestamp: '2026-09-21 14:33:12', auditStatus: 'Confirmed Tamper-Free' }
    ]
  },
  {
    id: 14,
    folder: '14-fitness-tracker',
    name: 'FitPulse Athletic & Nutrition Suite',
    category: 'Health & Fitness',
    description: 'Comprehensive fitness activity and metabolic logging system tracking workout routines, daily calorie expenditures, macronutrient breakdowns, and personal milestone goals.',
    entityName: 'Workout & Activity Log',
    entitiesName: 'workouts',
    initialData: [
      { id: '1', title: 'High-Intensity Calisthenics & Sprints', category: 'HIIT & Cardio', durationMin: 45, caloriesBurned: 520, heartRateAvg: 154, date: '2026-09-21', athlete: 'SaiVatsal (2500040224)', status: 'Completed' },
      { id: '2', title: 'Heavy Compound Deadlifts & Pull-ups', category: 'Strength Training', durationMin: 60, caloriesBurned: 460, heartRateAvg: 138, date: '2026-09-20', athlete: 'SaiVatsal (2500040224)', status: 'Completed' },
      { id: '3', title: '10km Road Endurance Run', category: 'Running', durationMin: 50, caloriesBurned: 680, heartRateAvg: 162, date: '2026-09-19', athlete: 'SaiVatsal (2500040224)', status: 'Completed' },
      { id: '4', title: 'Vinyasa Flow Mobility & Core', category: 'Flexibility & Yoga', durationMin: 35, caloriesBurned: 180, heartRateAvg: 110, date: '2026-09-18', athlete: 'SaiVatsal (2500040224)', status: 'Completed' }
    ],
    fields: [
      { key: 'title', label: 'Activity Routine Name', type: 'text', required: true },
      { key: 'category', label: 'Exercise Type', type: 'select', options: ['HIIT & Cardio', 'Strength Training', 'Running', 'Flexibility & Yoga', 'Swimming', 'Cycling'], required: true },
      { key: 'durationMin', label: 'Duration (Minutes)', type: 'number', required: true },
      { key: 'caloriesBurned', label: 'Estimated Calorie Burn (kcal)', type: 'number', required: true },
      { key: 'heartRateAvg', label: 'Average BPM', type: 'number', required: true },
      { key: 'date', label: 'Session Date', type: 'text', required: true },
      { key: 'athlete', label: 'Athlete Name', type: 'text', required: true },
      { key: 'status', label: 'Session State', type: 'select', options: ['Completed', 'Planned', 'Skipped'], required: true }
    ],
    statCards: [
      { label: 'Weekly Active Minutes', value: '190 Minutes', icon: 'fa-person-running', color: 'blue' },
      { label: 'Total Calories Burned', value: '1,840 kcal', icon: 'fa-fire-flame-curved', color: 'rose' },
      { label: 'Average Heart Rate', value: '141 BPM', icon: 'fa-heart-pulse', color: 'emerald' },
      { label: 'Monthly Goal Streak', value: '14 Days On Track', icon: 'fa-bullseye', color: 'purple' }
    ],
    secondaryName: 'Daily Nutrition & Macro Log',
    secondaryKey: 'nutrition',
    secondaryData: [
      { id: 'NUT-101', date: '2026-09-21', meal: 'Grilled Salmon & Quinoa Bowl', protein: '48g', carbs: '54g', fats: '18g', calories: '570 kcal' },
      { id: 'NUT-102', date: '2026-09-21', meal: 'Greek Yogurt with Whey & Berries', protein: '36g', carbs: '28g', fats: '6g', calories: '310 kcal' }
    ]
  },
  {
    id: 15,
    folder: '15-file-sharing-platform',
    name: 'CloudVault Secure File Sharing Platform',
    category: 'Cloud Storage & Security',
    description: 'Enterprise secure file sharing repository with permission controls, download analytics, expiration limits, encrypted storage metadata, and folder hierarchies.',
    entityName: 'Stored File Object',
    entitiesName: 'files',
    initialData: [
      { id: '1', fileName: 'Enterprise-Architecture-v4.pdf', fileType: 'PDF Document', fileSize: '8.4 MB', owner: 'SaiVatsal (2500040224)', downloads: 142, permission: 'Public Link', uploadDate: '2026-09-20', status: 'Active' },
      { id: '2', fileName: 'Microservices-Helm-Charts.zip', fileType: 'Compressed Archive', fileSize: '24.1 MB', owner: 'SaiVatsal (2500040224)', downloads: 89, permission: 'Restricted Team', uploadDate: '2026-09-19', status: 'Active' },
      { id: '3', fileName: 'Financial-Audit-Report-Q3.xlsx', fileType: 'Spreadsheet', fileSize: '3.2 MB', owner: 'Finance Ops Lead', downloads: 14, permission: 'Confidential / Password', uploadDate: '2026-09-18', status: 'Active' },
      { id: '4', fileName: 'Design-System-Brand-Kit.fig', fileType: 'Figma Asset', fileSize: '45.0 MB', owner: 'UX Design Team', downloads: 310, permission: 'Public Link', uploadDate: '2026-09-15', status: 'Active' }
    ],
    fields: [
      { key: 'fileName', label: 'File Name & Extension', type: 'text', required: true },
      { key: 'fileType', label: 'MIME Classification', type: 'select', options: ['PDF Document', 'Compressed Archive', 'Spreadsheet', 'Figma Asset', 'Source Code', 'Image Media'], required: true },
      { key: 'fileSize', label: 'File Size (MB)', type: 'text', required: true },
      { key: 'owner', label: 'File Owner', type: 'text', required: true },
      { key: 'downloads', label: 'Total Downloads', type: 'number', required: true },
      { key: 'permission', label: 'Access Policy', type: 'select', options: ['Public Link', 'Restricted Team', 'Confidential / Password', 'Direct Only'], required: true },
      { key: 'uploadDate', label: 'Upload Date', type: 'text', required: true },
      { key: 'status', label: 'Link Status', type: 'select', options: ['Active', 'Expired', 'Revoked'], required: true }
    ],
    statCards: [
      { label: 'Total Stored Files', value: '4 Files', icon: 'fa-folder-open', color: 'blue' },
      { label: 'Storage Consumed', value: '80.7 MB', icon: 'fa-hard-drive', color: 'purple' },
      { label: 'Global Download Requests', value: '555 Downloads', icon: 'fa-cloud-arrow-down', color: 'emerald' },
      { label: 'Encryption Standard', value: 'AES-256 GCM', icon: 'fa-lock', color: 'amber' }
    ],
    secondaryName: 'Recent File Access & Audit Log',
    secondaryKey: 'accessLogs',
    secondaryData: [
      { id: 'LOG-301', fileRef: 'Enterprise-Architecture-v4.pdf', userIp: '192.168.1.45', action: 'DOWNLOAD_SUCCESS', timestamp: '2026-09-21 15:10:22' },
      { id: 'LOG-302', fileRef: 'Financial-Audit-Report-Q3.xlsx', userIp: '10.0.4.88', action: 'AUTH_CHALLENGE_VERIFIED', timestamp: '2026-09-21 15:12:00' }
    ]
  },
  {
    id: 16,
    folder: '16-content-management-system',
    name: 'OmniPress Enterprise CMS',
    category: 'Content Management',
    description: 'Modern Headless and Decoupled CMS supporting multi-author publishing workflows, editorial drafts, SEO metadata optimization, category taxonomy, and media assets.',
    entityName: 'Content Article',
    entitiesName: 'articles',
    initialData: [
      { id: '1', title: 'Designing Resilient Distributed Web Platforms in 2026', slug: 'designing-resilient-distributed-platforms', author: 'SaiVatsal (2500040224)', category: 'Engineering', status: 'Published', views: 4850, readTime: '6 min read', publishedAt: '2026-09-18' },
      { id: '2', title: 'The Evolution of Modern JavaScript: Node 24 and Beyond', slug: 'evolution-modern-javascript-node-24', author: 'SaiVatsal (2500040224)', category: 'Programming', status: 'Published', views: 3200, readTime: '5 min read', publishedAt: '2026-09-19' },
      { id: '3', title: 'Why Micro-Frontends Are Shaping Enterprise Portals', slug: 'micro-frontends-shaping-enterprise', author: 'Rachel Evans', category: 'Architecture', status: 'Under Review', views: 0, readTime: '8 min read', publishedAt: 'Draft' },
      { id: '4', title: 'Zero-Trust Cloud Security for Full-Stack Developers', slug: 'zero-trust-cloud-security-guide', author: 'Marcus Sterling', category: 'Security', status: 'Published', views: 5120, readTime: '7 min read', publishedAt: '2026-09-15' }
    ],
    fields: [
      { key: 'title', label: 'Article Headline Title', type: 'text', required: true },
      { key: 'slug', label: 'URL Slug Path', type: 'text', required: true },
      { key: 'author', label: 'Author Name', type: 'text', required: true },
      { key: 'category', label: 'Editorial Category', type: 'select', options: ['Engineering', 'Programming', 'Architecture', 'Security', 'Design'], required: true },
      { key: 'readTime', label: 'Estimated Read Time', type: 'text', required: true },
      { key: 'views', label: 'Lifetime Article Views', type: 'number', required: true },
      { key: 'status', label: 'Publishing Stage', type: 'select', options: ['Published', 'Under Review', 'Draft', 'Archived'], required: true },
      { key: 'publishedAt', label: 'Publication Date', type: 'text', required: true }
    ],
    statCards: [
      { label: 'Published Articles', value: '4 Articles', icon: 'fa-newspaper', color: 'blue' },
      { label: 'Cumulative Readers', value: '13.17K Views', icon: 'fa-book-open-reader', color: 'emerald' },
      { label: 'Average Engagement', value: '4.8 Min Avg', icon: 'fa-clock', color: 'purple' },
      { label: 'SEO Health Index', value: '98 / 100 Score', icon: 'fa-magnifying-glass-chart', color: 'amber' }
    ],
    secondaryName: 'Editorial Revision Drafts',
    secondaryKey: 'revisions',
    secondaryData: [
      { id: 'REV-901', articleRef: 'Why Micro-Frontends Are Shaping Enterprise Portals', editor: 'Chief Editor James', comments: 'Requested additions on Module Federation v2.', status: 'Pending Changes' },
      { id: 'REV-902', articleRef: 'Designing Resilient Distributed Web Platforms in 2026', editor: 'SaiVatsal (2500040224)', comments: 'Final grammar pass and asset references updated.', status: 'Approved' }
    ]
  },
  {
    id: 17,
    folder: '17-online-banking-system',
    name: 'AuraBank Educational Digital Banking Suite',
    category: 'FinTech & Banking Simulation',
    description: 'Educational financial banking simulator providing multi-account balance ledgers, peer-to-peer fund transfers, simulated bill settlements, and tamper-resistant transaction journals.',
    entityName: 'Bank Account & Customer',
    entitiesName: 'accounts',
    initialData: [
      { id: '1', accountNo: 'ACC-8921-001', holder: 'SaiVatsal (2500040224)', type: 'Premier Checking', balance: 28450.75, currency: 'USD', status: 'Active', tier: 'Platinum Executive' },
      { id: '2', accountNo: 'ACC-8921-002', holder: 'SaiVatsal (2500040224)', type: 'High-Yield Savings (4.8% APY)', balance: 65200.00, currency: 'USD', status: 'Active', tier: 'Platinum Executive' },
      { id: '3', accountNo: 'ACC-3410-101', holder: 'Evelyn Sterling', type: 'Standard Checking', balance: 4210.50, currency: 'USD', status: 'Active', tier: 'Gold' },
      { id: '4', accountNo: 'ACC-7822-409', holder: 'Marcus Brody', type: 'Business Operations', balance: 145890.00, currency: 'USD', status: 'Active', tier: 'Corporate Prime' }
    ],
    fields: [
      { key: 'accountNo', label: 'Account Identifier', type: 'text', required: true },
      { key: 'holder', label: 'Primary Account Holder', type: 'text', required: true },
      { key: 'type', label: 'Account Classification', type: 'select', options: ['Premier Checking', 'High-Yield Savings (4.8% APY)', 'Standard Checking', 'Business Operations', 'Money Market'], required: true },
      { key: 'balance', label: 'Ledger Balance ($)', type: 'number', required: true },
      { key: 'currency', label: 'Currency Code', type: 'text', required: true },
      { key: 'tier', label: 'Relationship Tier', type: 'select', options: ['Platinum Executive', 'Corporate Prime', 'Gold', 'Silver'], required: true },
      { key: 'status', label: 'Account State', type: 'select', options: ['Active', 'Locked', 'Dormant'], required: true }
    ],
    statCards: [
      { label: 'Total Managed Capital', value: '$243,751.25', icon: 'fa-vault', color: 'emerald' },
      { label: 'Active Vault Accounts', value: '4 Portfolios', icon: 'fa-credit-card', color: 'blue' },
      { label: 'Simulated Wire Volume', value: '18 Transfers Today', icon: 'fa-money-bill-transfer', color: 'purple' },
      { label: 'Security Verification', value: 'MFA 100% Enforced', icon: 'fa-shield-halved', color: 'amber' }
    ],
    secondaryName: 'Simulated Wire & Transfer Journal',
    secondaryKey: 'transfers',
    secondaryData: [
      { id: 'TRX-5510', fromAcc: 'ACC-8921-001 (SaiVatsal)', toAcc: 'ACC-3410-101 (Evelyn Sterling)', amount: '$750.00', purpose: 'Consulting Contract Settlement', status: 'Success / Settled', date: '2026-09-21' },
      { id: 'TRX-5511', fromAcc: 'ACC-7822-409 (Marcus Brody)', toAcc: 'ACC-8921-002 (SaiVatsal)', amount: '$12,500.00', purpose: 'Software Delivery Retainer', status: 'Success / Settled', date: '2026-09-20' }
    ]
  },
  {
    id: 18,
    folder: '18-event-management-system',
    name: 'Vanguard EventHub & Conference Suite',
    category: 'Events & Hospitality',
    description: 'End-to-end conference and event management software supporting speaker agendas, ticket reservations, venue capacity management, and attendee badge registrations.',
    entityName: 'Conferences & Event',
    entitiesName: 'events',
    initialData: [
      { id: '1', code: 'CONF-2026', title: 'Global Full-Stack & AI Summit 2026', venue: 'Metropolitan Convention Center, Hall A', date: '2026-10-15', capacity: 1500, registered: 1340, ticketPrice: 299.00, status: 'Active', organizer: 'SaiVatsal (2500040224)' },
      { id: '2', code: 'DEV-90', title: 'Cloud-Native Distributed Systems Forum', venue: 'Innovation Tech Hub & Virtual Stage', date: '2026-11-02', capacity: 800, registered: 760, ticketPrice: 199.00, status: 'Active', organizer: 'SaiVatsal (2500040224)' },
      { id: '3', code: 'SEC-88', title: 'Cyber Defense & Zero-Trust Symposium', venue: 'Pacific Grand Ballroom', date: '2026-11-20', capacity: 600, registered: 580, ticketPrice: 249.00, status: 'Active', organizer: 'CyberGuard Alliance' },
      { id: '4', code: 'UX-30', title: 'Design Systems & Human Cognitive UX Expo', venue: 'Artisan Media Pavillion', date: '2026-12-05', capacity: 500, registered: 410, ticketPrice: 149.00, status: 'Active', organizer: 'Creative Guild' }
    ],
    fields: [
      { key: 'code', label: 'Event Reference Code', type: 'text', required: true },
      { key: 'title', label: 'Event / Conference Title', type: 'text', required: true },
      { key: 'venue', label: 'Location & Hall Venue', type: 'text', required: true },
      { key: 'date', label: 'Event Date', type: 'text', required: true },
      { key: 'capacity', label: 'Maximum Seating Capacity', type: 'number', required: true },
      { key: 'registered', label: 'Total Confirmed Registrations', type: 'number', required: true },
      { key: 'ticketPrice', label: 'Standard Ticket Price ($)', type: 'number', required: true },
      { key: 'status', label: 'Event Lifecycle Stage', type: 'select', options: ['Active', 'Draft', 'Sold Out', 'Completed'], required: true },
      { key: 'organizer', label: 'Lead Organizer', type: 'text', required: true }
    ],
    statCards: [
      { label: 'Scheduled Major Summits', value: '4 Events', icon: 'fa-calendar-days', color: 'blue' },
      { label: 'Total Confirmed Delegates', value: '3,090 Attendees', icon: 'fa-ticket', color: 'emerald' },
      { label: 'Gross Ticket Volume', value: '$756,910', icon: 'fa-sack-dollar', color: 'purple' },
      { label: 'Venue Seat Fill Rate', value: '90.8% Capacity', icon: 'fa-chart-pie', color: 'amber' }
    ],
    secondaryName: 'Attendee Registration & Badges',
    secondaryKey: 'registrations',
    secondaryData: [
      { id: 'BADGE-101', attendee: 'Nathaniel Drake', event: 'Global Full-Stack & AI Summit 2026', ticketType: 'VIP All-Access', checkIn: 'Confirmed' },
      { id: 'BADGE-102', attendee: 'Chloe Frazer', event: 'Global Full-Stack & AI Summit 2026', ticketType: 'General Delegate', checkIn: 'Confirmed' }
    ]
  },
  {
    id: 19,
    folder: '19-health-records-system',
    name: 'EHR-Nexus Electronic Health Records',
    category: 'Healthcare & EHR',
    description: 'HIPAA-conscious electronic health record (EHR) platform managing patient medical charts, clinical vitals, prescription orders, lab test reports, and physician consultation notes.',
    entityName: 'Patient Clinical Chart',
    entitiesName: 'records',
    initialData: [
      { id: '1', mrn: 'MRN-77401', patientName: 'Alexander Hayes', dob: '1988-04-12', bloodGroup: 'O Positive', doctor: 'Dr. SaiVatsal (2500040224), MD', diagnosis: 'Mild Hypertension (Stage 1)', lastVisit: '2026-09-18', status: 'Under Care' },
      { id: '2', mrn: 'MRN-77402', patientName: 'Beatrice Wood', dob: '1995-11-23', bloodGroup: 'A Positive', doctor: 'Dr. Sarah Mitchell, MD', diagnosis: 'Exercise-Induced Asthma', lastVisit: '2026-09-15', status: 'Stable' },
      { id: '3', mrn: 'MRN-77403', patientName: 'Carlton Vance', dob: '1974-02-09', bloodGroup: 'B Negative', doctor: 'Dr. Robert Chen, MD', diagnosis: 'Right Knee Meniscus Post-Op', lastVisit: '2026-09-20', status: 'Recovering' },
      { id: '4', mrn: 'MRN-77404', patientName: 'Diana Prince', dob: '1992-07-30', bloodGroup: 'AB Positive', doctor: 'Dr. SaiVatsal (2500040224), MD', diagnosis: 'Annual Comprehensive Executive Checkup', lastVisit: '2026-09-21', status: 'Cleared' }
    ],
    fields: [
      { key: 'mrn', label: 'Medical Record Number (MRN)', type: 'text', required: true },
      { key: 'patientName', label: 'Patient Full Name', type: 'text', required: true },
      { key: 'dob', label: 'Date of Birth', type: 'text', required: true },
      { key: 'bloodGroup', label: 'Blood Group', type: 'select', options: ['O Positive', 'O Negative', 'A Positive', 'A Negative', 'B Positive', 'B Negative', 'AB Positive', 'AB Negative'], required: true },
      { key: 'doctor', label: 'Attending Physician', type: 'text', required: true },
      { key: 'diagnosis', label: 'Primary Clinical Diagnosis', type: 'text', required: true },
      { key: 'lastVisit', label: 'Last Clinical Evaluation', type: 'text', required: true },
      { key: 'status', label: 'Patient Condition Status', type: 'select', options: ['Under Care', 'Stable', 'Recovering', 'Cleared', 'Critical'], required: true }
    ],
    statCards: [
      { label: 'Active Patient Charts', value: '4 Records', icon: 'fa-notes-medical', color: 'blue' },
      { label: 'Physician Evaluations', value: '100% Up to Date', icon: 'fa-user-doctor', color: 'emerald' },
      { label: 'Lab Reports Integrated', value: '12 Test Results', icon: 'fa-microscope', color: 'purple' },
      { label: 'Data Privacy Standard', value: 'HIPAA & Role Guarded', icon: 'fa-shield-halved', color: 'amber' }
    ],
    secondaryName: 'Prescription & Medication Orders',
    secondaryKey: 'prescriptions',
    secondaryData: [
      { id: 'RX-901', patient: 'Alexander Hayes (MRN-77401)', drug: 'Lisinopril 10mg Oral Daily', duration: '90 Days', prescriber: 'Dr. SaiVatsal (2500040224)', status: 'Dispensed' },
      { id: 'RX-902', patient: 'Beatrice Wood (MRN-77402)', drug: 'Albuterol Inhaler 90mcg PRN', duration: 'As Needed', prescriber: 'Dr. Sarah Mitchell', status: 'Dispensed' }
    ]
  },
  {
    id: 20,
    folder: '20-travel-booking-platform',
    name: 'WanderLust Global Travel & Flight Booking',
    category: 'Travel & Tourism',
    description: 'Travel itinerary and multi-city vacation booking engine featuring flight schedule discovery, luxury hotel room comparisons, departure boards, and customer booking management.',
    entityName: 'Travel Package & Flight',
    entitiesName: 'packages',
    initialData: [
      { id: '1', code: 'TRV-TYO-01', destination: 'Tokyo & Kyoto Cultural Odyssey', country: 'Japan', durationDays: 10, price: 2490.00, flightIncluded: 'ANA All Nippon Airways', status: 'Available', rating: 4.9 },
      { id: '2', code: 'TRV-SWZ-02', destination: 'Swiss Alps & Zermatt Glacier Express', country: 'Switzerland', durationDays: 7, price: 3150.00, flightIncluded: 'Swiss International Air', status: 'Available', rating: 4.9 },
      { id: '3', code: 'TRV-ISL-03', destination: 'Iceland Aurora Borealis & Geysers', country: 'Iceland', durationDays: 6, price: 1890.00, flightIncluded: 'Icelandair Direct', status: 'Available', rating: 4.8 },
      { id: '4', code: 'TRV-AMF-04', destination: 'Amalfi Coast & Capri Yacht Retreat', country: 'Italy', durationDays: 8, price: 2780.00, flightIncluded: 'ITA Airways Premier', status: 'Low Availability', rating: 4.9 }
    ],
    fields: [
      { key: 'code', label: 'Package SKU Code', type: 'text', required: true },
      { key: 'destination', label: 'Destination / Tour Title', type: 'text', required: true },
      { key: 'country', label: 'Destination Country', type: 'text', required: true },
      { key: 'durationDays', label: 'Duration (Days)', type: 'number', required: true },
      { key: 'price', label: 'Package Price ($)', type: 'number', required: true },
      { key: 'flightIncluded', label: 'Partner Flight Airline', type: 'text', required: true },
      { key: 'rating', label: 'Traveler Review Score', type: 'number', required: true },
      { key: 'status', label: 'Booking Availability', type: 'select', options: ['Available', 'Low Availability', 'Sold Out', 'Seasonal'], required: true }
    ],
    statCards: [
      { label: 'Featured Global Tours', value: '4 Itineraries', icon: 'fa-plane-departure', color: 'blue' },
      { label: 'Confirmed Travelers', value: '184 Bookings', icon: 'fa-passport', color: 'emerald' },
      { label: 'Customer Satisfaction', value: '4.88 / 5.0 ★', icon: 'fa-star', color: 'amber' },
      { label: 'Global Airline Partners', value: '12 Major Carriers', icon: 'fa-earth-americas', color: 'purple' }
    ],
    secondaryName: 'Recent Confirmed Passenger Bookings',
    secondaryKey: 'bookings',
    secondaryData: [
      { id: 'BKG-501', traveler: 'SaiVatsal (2500040224)', tour: 'Tokyo & Kyoto Cultural Odyssey', passengers: 2, totalPaid: '$4,980.00', status: 'Ticketed & Confirmed' },
      { id: 'BKG-502', traveler: 'Eleanor Vance', tour: 'Swiss Alps & Zermatt Glacier Express', passengers: 1, totalPaid: '$3,150.00', status: 'Ticketed & Confirmed' }
    ]
  }
];
