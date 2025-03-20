# Order Management System
Order Management System is a clean architecture-based .NET solution with an Angular frontend. It provides an API for managing orders, integrates with Azure services using Azurite, and stores data in SQLite.

## Solution Overview
The solution follows clean architecture principles and implements the repository pattern for data access. The solution is structured as follows:
```
OrderManagement/
│   │-- OrderManagement.Api/               # API Layer (Presentation)
│   │   │-- Endpoints/                     # API Controllers
│   │   │-- Program.cs                     # Entry point
│   │
│   │-- OrderManagement.Application/        # Application Layer (Business Logic)
│   │   │-- Interfaces/                      # Abstractions (e.g., IOrderService)
│   │   │-- DTOs/                            # Data Transfer Objects
│   │   │-- Services/                        # Business logic implementation
│   │
│   │-- OrderManagement.Domain/              # Domain Layer (Core Business Rules)
│   │   │-- Entities/                        # Order, Customer, etc.
│   │   │-- Events/                          # Doamin Events
│   │   │-- Enums/                           # Status, Order Type, etc.
│   │   │-- Interfaces/                      # Repository abstractions
│   │
│   │-- OrderManagement.Infrastructure/      # Infrastructure Layer (Data & External Services)
│   │   │-- Persistence/                     # Database and repositories
│   │   │-- Services/                        # Services : Azure Blob, Queue, etc.
│   │   │-- Configuration/                   # External service configurations
│   │   │-- Migrations/                      # db migrations
│   │
│   │-- OrderManagement.Functions/           # Serverless azure functions
│   │   │-- Functions/                       # functions
│   │   │-- Models/                          # models
|   |
│   │-- OrderManagement.Tests/              # Unit & Integration Tests
│   │   │-- InfrastructureTests/            
│   │   │-- ApiTests/
│
│   │-- OrderManagement.Client/              # Unit & Integration Tests
│   │-- src/
│   │   │-- components/                      # UI Components
│   │   │-- services/                        # API service calls
│   │   │-- types/                           # models
│   │   │-- pages/                           # Order listing, form, etc.
│   │   │-- app/                             # Main app setup
│
│-- README.md                               # Project documentation
│-- .gitignore                              # Ignore unnecessary files
```

## Technologies Used
- Backend: .NET 8, Minimal APIs, MediatR, Azure SDK
- Frontend: Angular
- Database: SQLite
- Cloud Services: Azure (via Azurite for local dev)
- Messaging: Azure Queue Storage (mocked via Azurite)

## Setup Instructions
 Prerequisites
- .NET 8 SDK
- Node.js (for Angular frontend)
- Docker (for Azurite)

Run OrderManagement.API and OrderManagement.Functions

## Clean Architecture
![image](https://devblogs.microsoft.com/ise/wp-content/uploads/sites/55/2024/06/clean-arch.png)
