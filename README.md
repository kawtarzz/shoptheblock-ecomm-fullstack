ShopTheBlock - Local Artist Marketplace

A full-stack e-commerce application built as my capstone project for Nashville Software School's Full-Stack Software Development program. This marketplace empowers independent sellers and artists with a platform to market their art in a collective online space localized to their community.

##  [Live Demo](https://locus-app-f0eb9.web.app/login)
*Frontend deployment available - use Guest Login to explore*
## [shoptheblock Video Demo](https://github.com/user-attachments/assets/bf0eed8b-2023-4ecc-8756-b76c5b2e4407)

##  Problem Statement

Independent sellers & artists need a platform to market their art in a collective online space that can be localized to their community.

##  Solution

Shop the Block! An online marketplace where you can browse and shop for products from local artists & makers, creating a dedicated community-focused platform for local creators.

##  MVP Features

- **Authentication-Based Product Display**: When logged in, users can browse all available products
- **Detailed Product Views**: Product selection loads detailed pages with quantity selectors and "Add to Cart" functionality
- **Persistent Shopping Cart**: Products remain in cart as users continue shopping across sessions
- **Streamlined Checkout Process**: Complete checkout form with payment and delivery information
- **Order Confirmation**: Users receive confirmation numbers upon successful checkout
- **Responsive Design**: Mobile-first approach ensuring great experience across all devices

## 🛠️ Built With

**Frontend:**
- React.js
- HTML5 & CSS3
- Bootstrap

**Backend:**
- C# + ASP.NET Core
- .NET Framework
- Microsoft SQL Server

**Authentication & Security:**
- Firebase Auth
- JWT Tokens

**Deployment:**
- Firebase Hosting (Frontend)

##  Development Journey

This project was a comprehensive full-stack challenge that tested everything from concept to MVP:

- **Database Design**: Structuring complex data entity relationships for e-commerce functionality
- **API Development**: Building robust C# Web API endpoints with proper HTTP methods
- **Authentication**: Implementing secure user authentication with Firebase Auth and JWT tokens
- **Frontend Integration**: Connecting React frontend with .NET backend through RESTful APIs
- **Debugging Challenges**: Extensive troubleshooting of API calls, SQL queries, and cross-platform integration

**Key Learning Outcomes:**
- Mastered full-stack development workflow from database to user interface
- Gained proficiency in C#, SQL methods, and backend technologies
- Developed expertise in React.js and RESTful API integration
- Enhanced problem-solving skills through complex debugging scenarios

##  Future Enhancements

Planned features for future development:
- **Admin Dashboard**: Seller accounts with product management capabilities
- **Enhanced Filtering**: Advanced sort and filter options for improved user experience
- **Seller Analytics**: Dashboard for artists to track sales and performance
- **Category Management**: Dynamic product categorization system

##  Screenshots
![shoptheblock_01](https://github.com/user-attachments/assets/abdc7826-a522-4e6d-812c-fa5f50f279f1)


##  Architecture

- **Frontend**: React SPA with component-based architecture
- **Backend**: ASP.NET Core Web API with Repository pattern
- **Database**: SQL Server with relational design
- **Authentication**: Firebase for user management

##  Getting Started

### Prerequisites
- Node.js (v14 or higher)
- .NET Core SDK
- SQL Server
- Firebase project setup

### Frontend Setup

1. Clone the repository

git clone https://github.com/kawtarzz/shoptheblock.git
cd shoptheblock/client

2. Install dependencies
        bashnpm install

3. Start the development server
        bashnpm start
### Backend Setup

1. Navigate to the server directory

2. Restore packages

3. Update database connection string in appsettings.json
        Run migrations

4. Start the API
API Endpoints

GET /api/products - Retrieve all products
POST /api/products - Create new product
GET /api/users/{id} - Get user profile
POST /api/orders - Create new order


KawtaryAzzouzi@gmail.com
